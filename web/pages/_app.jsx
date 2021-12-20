import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../hooks/use-auth';

const App = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </AuthProvider>
    );
};

export default App;
