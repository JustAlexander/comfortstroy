import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import 'react-modal-video/css/modal-video.min.css';
import withTwindApp from '@twind/next/app';
import twindConfig from '../twind.config';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TLKJPMD' });
  }, []);

  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}

export default withTwindApp(twindConfig, MyApp);
