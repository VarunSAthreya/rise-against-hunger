import { Box, Image, Link } from '@chakra-ui/react';

const Logo = () => {
    return (
        <Box>
            <Link href="/" _focus={{ outline: 'none' }}>
                <Image
                    src="/assests/images/logo.png"
                    alt="Logo"
                    maxW={'80px'}
                    h={'auto'}
                    borderRadius={'50%'}
                    _focus={{ outline: 'none' }}
                />
            </Link>
        </Box>
    );
};

export default Logo;
