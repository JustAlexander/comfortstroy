import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import 'react-modal-video/css/modal-video.min.css';

import withTwindApp from '@twind/next/app';
import twindConfig from '../twind.config';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTwindApp(twindConfig, MyApp);
