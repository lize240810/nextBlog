import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

/**
 * 静态生成
 * 静态生成是在构建时生成HTML并将其作为预渲染页面提供的过程。
 * 这意味着在用户请求页面时，服务器无需执行任何代码来生成页面。
 * 相反，服务器直接提供预渲染的HTML页面。
 * 静态生成通常用于内容相对固定或不常变化的页面，如博客文章、产品页面等。
 * 静态生成的页面在第一次构建时生成，并在后续构建中保持不变。
 * 这使得静态生成的页面加载速度更快，因为它们不需要动态生成的逻辑。  
 * 
 * 静态生成的页面通常由getStaticProps函数提供数据。
 * getStaticProps函数是一个特殊的函数，用于在构建时获取页面所需的数据。
 * 它在服务器上运行，而不是在客户端上运行。
 * getStaticProps函数返回一个包含props对象的对象，该对象包含页面所需的数据。
 * 这些数据将作为props传递给页面组件。
 */

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// 通过返回对象allPostsData内部的内容props，博客文章将被传递给Home组件。
// 要查看此内容，请修改组件定义以进行以下操作{ allPostsData }：
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on)
          <Link href="/posts/first-post">
            About
          </Link>
        </p>
      </section>
      <section className="mt-10 border-1 p-2">
        <h2 className="text-center text-2xl">Blog</h2>
        <ul>
          {
            allPostsData.map(({ id, date, title }) => {
              return <li>
                <Link href={`posts/${id}`}><strong>{title}</strong></Link><br />
                <span className="text-sm text-gray-400">{date}</span>
              </li>
            })
          }
        </ul>
      </section>
    </Layout>
  )
}