import Document, { Html, Head, Main, NextScript } from "next/document"
import { DEV, BASE_PATH} from "../src/constants/env"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href={DEV ? "/logo.png" : BASE_PATH + "/logo.png"} />
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
