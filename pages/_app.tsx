import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { Provider as ReduxProvider } from 'react-redux';
import store from '@/store';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

interface StudentAppProps extends AppProps {
    emotionCache?: EmotionCache;
    Component: NextPageWithLayout;
}

function StudentApp(props: StudentAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps
    } = props;
    const getLayout = Component.getLayout ?? ((page) => page);

    Router.events.on('routeChangeStart', nProgress.start);
    Router.events.on('routeChangeError', nProgress.done);
    Router.events.on('routeChangeComplete', nProgress.done);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Student Job Part-Time</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Part-Time Jobs" />
                <meta
                    property="og:description"
                    content="FIND PART_TIME JOB FOR STUDENTS"
                />
            </Head>
            <ReduxProvider store={store}>
                <SidebarProvider>
                    <ThemeProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <CssBaseline />
                            {getLayout(<Component {...pageProps} />)}
                        </LocalizationProvider>
                    </ThemeProvider>
                </SidebarProvider>
            </ReduxProvider>
        </CacheProvider>
    );
}

export default StudentApp;
