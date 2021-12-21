import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { AuthProvider } from '../hooks/use-auth';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Raise Against Hunger</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <meta name="robots" content="all" />
            </Head>
            <AuthProvider>
                <ChakraProvider>
                    <Component {...pageProps} />
                </ChakraProvider>
            </AuthProvider>
        </>
    );
};

export default App;
