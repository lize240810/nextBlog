import '../styles/global.css'

// 此App组件是顶级组件，将在所有不同页面中通用。App例如，您可以使用此组件在页面间导航时保​​持状态,重启开发服务器
export default function APP({ Component, pageProps }) {
    return <Component {...pageProps} />
}