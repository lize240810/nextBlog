This is a starter template for [Learn Next.js](https://nextjs.org/learn).


| 渲染模式 | 全称 | 核心原理 | 数据更新时机 | HTML生成方式 |
| --- | --- | --- | --- | --- |
| SSR | Server-Side Rendering | 每次请求时服务器实时生成HTML | 每次请求时更新 | 服务端动态生成 |
| SSG | Static Site Generation | 构建时预生成所有HTML，作为静态文件托管 | 需重新构建部署 | 构建时一次性生成 |
| CSR | Client-Side Rendering | 服务器返回空HTML，由浏览器JS动态渲染 | 客户端运行时更新 | 客户端动态生成 |
| ISR | Incremental Static Regeneration | 首次访问生成静态HTML，按需或定时重新生成 | 可配置（如revalidate: 60秒） | 混合（构建+按需生成） |
| 预渲染 | Prerendering | 构建时或首次访问时生成静态HTML，后续行为类似CSR | 首次访问后缓存 | 构建时/首次访问时生成 |


## SSR
> 特点：适合实时数据（如股票行情），但服务器压力大, 每次请求时服务器实时生成HTML	
```js
// 每次请求时执行
export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data: await data.json() } }; // 实时数据注入HTML
}
```

## SSG
> 特点：适合静态内容（如博客文章），构建时预生成所有HTML，作为静态文件托管
```js
// 仅在构建时执行
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/static-data');
  return { props: { data: await data.json() } }; // 数据固化到HTML
}
```

## ISR
>  特点：适合频繁更新的内容，首次访问生成静态HTML，按需或定时重新生成
```js
// 首次访问时生成静态HTML，后续行为类似CSR
// 构建时生成，后续按需更新
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/dynamic-data');
  return { 
    props: { data: await data.json() },
    revalidate: 60 // 60秒后重新验证
  };
}
```

## CSR
> 特点：交互复杂但SEO不友好（如后台管理系统），服务器返回空HTML，由浏览器JS动态渲染
```js
// 客户端运行时更新
function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.example.com/data').then(res => setData(res.json()));
  }, []);
  return <div>{data ? data.content : 'Loading...'}</div>;
}
```

## 预渲染
> 特点：适合SEO优化，构建时或首次访问时生成静态HTML，后续行为类似CSR，提升首屏速度，但动态内容仍需客户端加载
```js
// 构建时或首次访问时生成静态HTML，后续行为类似CSR
// 构建时生成，后续按需更新
// nuxt.config.js
export default {
  target: 'static',
  generate: {
    routes: ['/product/1', '/product/2'] // 预渲染特定路由
  }
}
```


三、关键指标对比
| 指标 | SSR | SSG | CSR | ISR | 预渲染 |
| --- | --- | --- | --- | --- | --- |
| 首屏速度 | ⚡️ 快 | ⚡️⚡️⚡️ 极快 | 🐢 慢 | ⚡️⚡️ 较快 | ⚡️⚡️ 较快 |
| SEO支持 | ✅ 优秀 | ✅ 优秀 | ❌ 差 | ✅ 优秀 | ✅ 良好 |
| 服务器压力 | 🔥 高 | ❄️ 无 | ❄️ 无 | 🌡️ 中低 | ❄️ 低 |
| 数据实时性 | 🔄 实时 | ⏸️ 静态 | 🔄 实时 | ⏳ 可控延迟 | ⏳ 延迟 |
| 适用场景 | 实时数据页 | 静态内容 | 交互复杂应用 | 混合内容站 | 营销落地页 |



# 五、现代框架支持方案
| 框架 | SSR支持 | SSG支持 | ISR支持 | 预渲染支持 |
| --- | --- | --- | --- | --- |
| Next.js | getServerSideProps | getStaticProps | revalidate参数 | next export |
| Nuxt 3 | 默认开启 | ssr: false | 需手动实现 | generate配置 |
| Gatsby | 插件实现 | 核心功能 | 插件扩展 | 内置 |


# 六、演进趋势
- 营销首页用SSG
- 产品详情页用ISR
- 用户仪表盘用SSR
- 后台管理用CSR