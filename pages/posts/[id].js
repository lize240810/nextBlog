import Layout from '../../components/layout'
import Head from 'next/head'

import { getAllPostIds, getPostData } from '../../lib/posts'

/**
 * getStaticProps并且getStaticPaths仅在服务器端运行
 * 它永远不会在客户端运行。它甚至不会包含在浏览器的 JS 包中。这意味着您可以编写代码
 * 例如直接进行数据库查询，而无需将其发送到浏览器
 */




/**
 * 为动态路由页面（如 pages/posts/[id].js）指定哪些路径应在构建时预生成
 */
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
        //     fallback: 'blocking', // 或 true/false
    }
}

// SSG 构建时预生成所有HTML，作为静态文件托管	
// export async function getServerSideProps({ params }) {
export async function getStaticProps({ params }) {
    console.log("params", params.id)
    const postData = await getPostData(params.id)


    // 注意：notFound: true即使之前已成功生成页面，该页面仍会返回 404 错误。这是为了支持用户生成的内容被作者删除等用例。
    if (!postData) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            postData
        },
        // revalidate: 60, // 可选：开启 ISR，60秒后重新生成页面
    }
}

export default function Post({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
}
