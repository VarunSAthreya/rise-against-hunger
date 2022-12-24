import {
    Box,
    Container,
    Flex,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube,
} from 'react-icons/bs';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import SocialMedia from '../UI/Card/SocialMedia';
import Logo from '../UI/Logo/Logo';

const Footer = () => {
    const varun = [
        {
            icon: BsGithub,
            url: 'https://github.com/VarunSAthreya',
            text: 'GitHub',
        },
        {
            icon: BsLinkedin,
            url: 'https://www.linkedin.com/in/varunsathreya/',
            text: 'LinkedIn',
        },
    ];
    const sandeep = [
        {
            icon: BsGithub,
            url: 'https://github.com/Sandeep-M23',
            text: 'GitHub',
        },
        {
            icon: BsLinkedin,
            url: 'https://www.linkedin.com/in/sandeep-m-4a599a1a4/',
            text: 'LinkedIn',
        },
    ];

    return (
        <Box color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={8}>
                <Box py={10}>
                    <Flex
                        align={'center'}
                        _before={{
                            content: '""',
                            borderBottom: '1px solid',
                            borderColor: '#ffbf24',
                            flexGrow: 1,
                            mr: 8,
                        }}
                        _after={{
                            content: '""',
                            borderBottom: '1px solid',
                            borderColor: '#ffbf24',
                            flexGrow: 1,
                            ml: 8,
                        }}
                    >
                        <Logo />
                    </Flex>
                </Box>
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Services
                        </Text>
                        <Text>Additional Support</Text>
                        <Text>Research & Advocacy</Text>
                        <Text>Real Stories</Text>
                        <Text>Charity Retail</Text>
                        <Text>Emergency Food</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Contact Us
                        </Text>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: '#ffb24f',
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={MdPhone} />
                            <Link
                                href="tel:+918088611802"
                                target="_blank"
                                rel="noreferrer"
                                _hover={{
                                    textDecoration: 'none',
                                }}
                                _focus={{ outline: 'none' }}
                            >
                                +91 80 8751 1913
                            </Link>
                        </Text>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: '#ffb24f',
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={MdEmail} />
                            <Link
                                href="mailto:HmH@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                _hover={{
                                    textDecoration: 'none',
                                }}
                                _focus={{ outline: 'none' }}
                            >
                                EMail@gmail.com
                            </Link>
                        </Text>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="flex-start"
                        >
                            <Icon
                                boxSize={5}
                                m={{ base: 1 }}
                                as={MdLocationOn}
                            />
                            2231 Sycamore Lake Road Green Bay, WI 54304
                        </Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Follow Us
                        </Text>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: '#ffb24f',
                                textDecoration: 'none',
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={BsFacebook} />
                            <Link
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                _hover={{
                                    textDecoration: 'none',
                                }}
                                _focus={{ outline: 'none' }}
                            >
                                FaceBook
                            </Link>
                        </Text>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: '#ffb24f',
                            }}
                        >
                            <Icon
                                boxSize={5}
                                m={{ base: 2 }}
                                as={BsInstagram}
                            />
                            <Link
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                _hover={{
                                    textDecoration: 'none',
                                }}
                                _focus={{ outline: 'none' }}
                            >
                                Instagram
                            </Link>
                        </Text>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: '#ffb24f',
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={BsTwitter} />
                            <Link
                                href="https://twitter.com/?lang=en"
                                target="_blank"
                                rel="noreferrer"
                                _hover={{
                                    textDecoration: 'none',
                                }}
                                _focus={{ outline: 'none' }}
                            >
                                Twitter
                            </Link>
                        </Text>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: '#ffb24f',
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={BsYoutube} />
                            <Link
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                                _hover={{
                                    textDecoration: 'none',
                                }}
                                _focus={{ outline: 'none' }}
                            >
                                Youtube
                            </Link>
                        </Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Designed And Developed By:
                        </Text>
                        <SimpleGrid columns={{ base: 2 }} spacing={3}>
                            <Box>
                                <Text fontWeight={'500'} fontSize={'md'} mb={2}>
                                    Varun S Athreya
                                </Text>
                                {varun.map((data, index) => (
                                    <SocialMedia data={data} key={index} />
                                ))}
                            </Box>
                            <Box>
                                <Text fontWeight={'500'} fontSize={'md'} mb={2}>
                                    Sandeep M
                                </Text>
                                {sandeep.map((data, index) => (
                                    <SocialMedia data={data} key={index} />
                                ))}
                            </Box>
                        </SimpleGrid>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Footer;
