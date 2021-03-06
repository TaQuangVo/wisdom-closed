import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>

        <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>


      </Html>
    )
  }
}

export default MyDocument