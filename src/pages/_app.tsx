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
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TLKJPMD');`,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLKJPMD" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default withTwindApp(twindConfig, MyApp);
