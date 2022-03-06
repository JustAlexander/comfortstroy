import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import 'react-modal-video/css/modal-video.min.css';
import Script from 'next/script';

import withTwindApp from '@twind/next/app';
import twindConfig from '../twind.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', '${process.env.NEXT_PUBLIC_GA_ID}', 'auto');
            ga('send', 'pageview');
        `}
      </Script>
      <Script src="https://www.google-analytics.com/analytics.js" strategy="afterInteractive" />
      <Component {...pageProps} />;
    </>
  );
}

export default withTwindApp(twindConfig, MyApp);
