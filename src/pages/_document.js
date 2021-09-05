import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="theme-color" content="#191E38" />
            <meta
              name="description"
              content="Trade stocks, commodities and crypto in a decentralized fashion using DEUS Finance its smart contract technology. No KYC - No Signup. Simply connect your wallet and start trading on multiple chains."
            />

            <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="192x192" href="/images/192x192_App_Icon.png" />
            <link rel="apple-touch-icon" sizes="512x512" href="/images/512x512_App_Icon.png" />

            <link rel="manifest" href="/manifest.json" />
            <title>dSynths</title>
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
