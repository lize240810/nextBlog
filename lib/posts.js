import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import { unified } from 'unified';



// 文章存储目录（存放.md文件的posts目录）
const postsDirectory = path.join(process.cwd(), 'posts')

// 获取按日期排序的文章数据
export function getSortedPostsData() {
    // 读取posts目录下所有文件名
    const fileNames = fs.readdirSync(postsDirectory)

    // 遍历所有文件并提取元数据
    const allPostsData = fileNames.map(fileName => {
        // 通过移除.md后缀获取文章ID
        const id = fileName.replace(/\.md$/, '')

        // 构造完整文件路径并读取文件内容
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // 使用gray-matter解析markdown元数据
        const matterResult = matter(fileContents)

        // 返回包含ID和元数据的组合对象
        return {
            id,
            ...matterResult.data // 展开解析后的元数据（title, date等）
        }
    })

    // 按日期降序排序（最新文章在前）
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1  // 如果a日期更早，将a排到后面
        } else {
            return -1 // 如果a日期更新，保持a在前
        }
    })
}

export function getAllPostIds() {
    // 读取posts目录下所有文件名
    const fileNames = fs.readdirSync(postsDirectory)
    // 返回包含ID的对象数组
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '') // 移除.md后缀作为ID
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // const processedContent = await unified()
    // .use(remarkParse)
    // .use(remarkHtml)
    // .process(matterResult.content);

    let processedContent = ""

    try {
        processedContent = await unified().use(remarkParse).use(remarkHtml).process(matterResult.content);
    } catch (error) {
        console.error("error， 解析失败")
    }

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}