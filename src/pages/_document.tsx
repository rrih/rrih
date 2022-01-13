import Document, { Html, Head, Main, NextScript } from 'next/document'
import font from '../utils/font';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head>
          <link rel="shortcut icon" href="https://github.com/rrih.png"/>
          <style>{`html,body { margin: 0; padding: 0; }`}</style>
          <title>rrih</title>
        </Head>
        <body style={{fontFamily: font}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;