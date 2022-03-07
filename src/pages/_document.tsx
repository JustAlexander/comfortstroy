import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import withTwindDocument from '@twind/next/document';
import twindConfig from '../twind.config';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default withTwindDocument(twindConfig, MyDocument);
