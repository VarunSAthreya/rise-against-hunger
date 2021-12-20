import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Input,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];

const Login = () => {
    const [login, setLogin] = useState(false);

    const switchLoginHandler = () => {
        setLogin((prevState) => !prevState);
    };

    const router = useRouter();

    const handleSubmission = async () => {
        // if (login) {
        //     await signUp(name, email, password);
        //     router.push('/');
        // } else {
        //     await signIn(email, password);
        //     router.push('/');
        // }
    };
    return (
        <>
            <NavBar />
            <Box position={'relative'}>
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    px={{ base: 10, sm: 15 }}
                    py={{ base: 10, sm: 20, lg: 48 }}
                >
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{
                                base: '3xl',
                                sm: '4xl',
                                md: '5xl',
                                lg: '6xl',
                            }}
                        >
                            Senior web designers{' '}
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text"
                            >
                                &
                            </Text>{' '}
                            Full-Stack Developers
                        </Heading>
                        <Stack direction={'row'} spacing={4} align={'center'}>
                            <AvatarGroup>
                                {avatars.map((avatar) => (
                                    <Avatar
                                        key={avatar.name}
                                        name={avatar.name}
                                        src={avatar.url}
                                        size={useBreakpointValue({
                                            base: 'md',
                                            md: 'lg',
                                        })}
                                        position={'relative'}
                                        zIndex={2}
                                        _before={{
                                            content: '""',
                                            width: 'full',
                                            height: 'full',
                                            rounded: 'full',
                                            transform: 'scale(1.125)',
                                            bgGradient:
                                                'linear(to-bl, red.400,pink.400)',
                                            position: 'absolute',
                                            zIndex: -1,
                                            top: 0,
                                            left: 0,
                                        }}
                                    />
                                ))}
                            </AvatarGroup>
                            <Text
                                fontFamily={'heading'}
                                fontSize={{ base: '4xl', md: '6xl' }}
                            >
                                +
                            </Text>
                            <Flex
                                align={'center'}
                                justify={'center'}
                                fontFamily={'heading'}
                                fontSize={{ base: 'sm', md: 'lg' }}
                                bg={'gray.800'}
                                color={'white'}
                                rounded={'full'}
                                width={useBreakpointValue({
                                    base: '44px',
                                    md: '60px',
                                })}
                                height={useBreakpointValue({
                                    base: '44px',
                                    md: '60px',
                                })}
                                position={'relative'}
                                _before={{
                                    content: '""',
                                    width: 'full',
                                    height: 'full',
                                    rounded: 'full',
                                    transform: 'scale(1.125)',
                                    bgGradient:
                                        'linear(to-bl, orange.400,yellow.400)',
                                    position: 'absolute',
                                    zIndex: -1,
                                    top: 0,
                                    left: 0,
                                }}
                            >
                                YOU
                            </Flex>
                        </Stack>
                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}
                    >
                        <Stack spacing={4}>
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                            >
                                Join our Organization
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    bgClip="text"
                                >
                                    !
                                </Text>
                            </Heading>
                            <Text
                                color={'gray.500'}
                                fontSize={{ base: 'sm', sm: 'md' }}
                            >
                                We’re looking for amazing people just like you!
                                Become a part of our team and help us in
                                achieving our goal!
                            </Text>
                        </Stack>
                        <Box as={'form'} mt={10}>
                            <Stack spacing={4}>
                                {login ? (
                                    <>
                                        <Input
                                            placeholder="Name"
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                        />
                                        <Input
                                            placeholder="Email"
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                        />
                                        <Input
                                            placeholder="Password"
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Input
                                            placeholder="Email"
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                        />
                                        <Input
                                            placeholder="password"
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                        />
                                    </>
                                )}
                            </Stack>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                _hover={{
                                    bgGradient:
                                        'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                                }}
                                onClick={handleSubmission}
                            >
                                {login ? 'SIGN UP' : 'LOGIN'}
                            </Button>
                            <Button
                                fontFamily={'heading'}
                                mt={4}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                _hover={{
                                    bgGradient:
                                        'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                                }}
                                onClick={switchLoginHandler}
                            >
                                Dont Have account?
                            </Button>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Login;
