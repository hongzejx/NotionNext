// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <CommonScript />
          <meta name="baidu-site-verification" content="codeva-F4Gl99qyUD" />
          <meta http-equiv="Content-Type" content="text/html;charset=gb2312" />
          <meta name="sogou_site_verification" content="CEwXrLcfPy" />
        </Head>

        <body className={`${BLOG.FONT_STYLE} font-light bg-day dark:bg-night`}>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
