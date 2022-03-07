import Head from 'next/head';
import Navigation from '@/components/navigation';
import { tw } from 'twind';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

interface IProps {
  children: React.ReactNode;
}

const theme = createTheme({
  typography: {
    fontFamily: [`Inter`, `ui-sans-serif`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `"Helvetica Neue"`, `Arial`, `"Noto Sans"`, `sans-serif`, `"Apple Color Emoji"`, `"Segoe UI Emoji"`, `"Segoe UI Symbol"`, `"Noto Color Emoji"`].join(`,`),
  },
  palette: {
    mode: `light`,
    primary: {
      main: `#d97706`,
    },
  },
});

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={tw(`min-h-screen flex flex-col`)}>
        <Navigation />
        {children}
      </div>
    </ThemeProvider>
  </div>
);

export default Page;
