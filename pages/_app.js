import React from 'react'
import 'antd/dist/antd.css'
import '~/styles/variables.css'
import '~/styles/globals.css'
import { wrapper } from '~/store'
// import { isLoginServer, redirectTo } from '~/utils/auth'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  // if (ctx.req) {
  //   if (!isLoginServer(ctx.req)) {
  //     if (ctx.pathname == "/" ||
  //         ctx.pathname.includes("/auth") ||
  //         ctx.pathname == "/kebijakan-privasi" ||
  //         ctx.pathname == "/syarat-ketentuan" ||
  //         ctx.pathname == "/tentang-kami" ||
  //         ctx.pathname == "/faq"
  //     ) { // allow page if not login
  //       return { pageProps }
  //     } else {
  //       redirectTo('/', { res: ctx.res, status: 301 })
  //     }
  //   } else { // can access any page if login
  //     if (ctx.pathname.includes("/auth"))  {
  //       redirectTo('/', { res: ctx.res, status: 301 })
  //     } else {
  //       return { pageProps }
  //     }
  //   }
  // }

  return { pageProps }
}

export default wrapper.withRedux(MyApp)
