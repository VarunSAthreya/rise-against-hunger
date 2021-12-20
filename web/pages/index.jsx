import React from 'react';
import {
    Box,
    Heading,
    Stack,
    Text,
    SimpleGrid,
    Flex,
    Container,
    Button,
    IconButton,
    Image,
} from '@chakra-ui/react';
import { AiFillHeart, AiFillPhone } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { FaTruckMoving } from 'react-icons/fa';
import NavBar from '../components/NavBar/NavBar';
import Carousel from '../components/UI/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import BasicCard from '../components/UI/Card/BasicCard';

const basicCardData = [
    {
        title: 'Get in touch',
        description:
            'Donors with surplus food/resources can reach us at -91 90877 90877',
        icon: AiFillPhone,
    },
    {
        title: 'Quality check',
        description:
            ' Excess Food will be checked based on our Food Safety and Standard Guidelines',
        icon: AiFillHeart,
    },
    {
        title: 'Locate',
        description:
            'We spot the nearest “Hunger Spot” which is the most underserved areas',
        icon: ImLocation,
    },
    {
        title: 'Deliver',
        description: 'Excess food is distributed to needy people with love.',
        icon: FaTruckMoving,
    },
];

const stats = [
    {
        title: '10+',
        content: (
            <>
                Software modules for detailed monitoring and real-time analytics
            </>
        ),
    },
    {
        title: '24/7',
        content: (
            <>
                Analytics enabled right in your dashboard without history
                limitations
            </>
        ),
    },
    {
        title: '13%',
        content: (
            <>
                Farms in North America has chosen NewLife™ as their management
                solution
            </>
        ),
    },
    {
        title: '250M+',
        content: (
            <>
                Plants currently connected and monitored by the NewLife™
                software
            </>
        ),
    },
];

const Home = () => {
    return (
        <>
            <NavBar />
            <Carousel />
            {/*Welcome*/}
            <Container maxW={'7xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 4 }}
                    py={{ base: 20, md: 28 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    >
                        Welcome
                    </Heading>
                    <Text color={'gray.500'}>
                        We’re on the road to end hunger, aligned with the United
                        Nations Sustainable Goal #2 of Zero Hunger. From the
                        implementation of sustainable community development
                        projects to our meal packaging program that harnesses
                        the passion of local volunteers, we strive to make an
                        impact on hunger by building resilience,
                        self-sufficiency and empowerment in communities
                        worldwide.
                    </Text>
                    <Text color={'gray.500'}>
                        No Food Waste is a Not-For-Profit surplus food
                        management organisation connecting untouched edible
                        surplus food with needy people for making the World
                        Hunger Free and Zero Food Waste.
                    </Text>
                </Stack>
            </Container>
            {/*Why Choose Us*/}
            <Box
                maxW="6xl"
                mx={'auto'}
                textAlign={'center'}
                pt={5}
                px={{ base: 2, sm: 12, md: 17 }}
            >
                <Heading
                    textAlign={'center'}
                    fontSize={'4xl'}
                    py={10}
                    fontWeight={'bold'}
                >
                    Why Choose Our Service ?
                </Heading>
                <Text color={'gray.500'}>
                    To bring a social change in every individual in-order to
                    reduce food waste and to make the World Hunger Free. to
                    provide essential food support to underserved areas in the
                    form of food or packaged food products depending on the
                    need. Our goal is to ensure, Feed people not landfills.
                </Text>
                <SimpleGrid
                    my={6}
                    columns={{ base: 1, md: 4 }}
                    spacing={{ base: 5, lg: 8 }}
                >
                    {basicCardData.map((data, index) => (
                        <BasicCard data={data} key={index} />
                    ))}
                </SimpleGrid>
            </Box>
            {/*Mission*/}
            <Box bg={'gray.800'} position={'relative'}>
                <Container maxW={'7xl'} zIndex={10} position={'relative'}>
                    <Stack direction={{ base: 'column', lg: 'row' }}>
                        <Stack
                            flex={1}
                            color={'gray.400'}
                            justify={{ lg: 'center' }}
                            py={{ base: 4, md: 10, xl: 20 }}
                        >
                            <Box mb={{ base: 8, md: 20 }}>
                                <Text
                                    textAlign={'center'}
                                    fontFamily={'heading'}
                                    fontWeight={700}
                                    textTransform={'uppercase'}
                                    mb={3}
                                    fontSize={'xl'}
                                    color={'gray.500'}
                                >
                                    Technology
                                </Text>
                                <Heading
                                    color={'white'}
                                    textAlign={'center'}
                                    mb={5}
                                    fontSize={{ base: '3xl', md: '5xl' }}
                                >
                                    21st century agriculture
                                </Heading>
                                <Text
                                    fontSize={'xl'}
                                    color={'gray.400'}
                                    textAlign={'center'}
                                >
                                    The NewLife™ technology allows you to
                                    monitor your crops and get complete insights
                                    at real time. The proprietary
                                    software/hardware ecosystem prevents your
                                    plants from getting neglected.
                                </Text>
                            </Box>

                            <SimpleGrid
                                columns={{ base: 1, md: 2 }}
                                spacing={10}
                            >
                                {stats.map((stat) => (
                                    <Box key={stat.title}>
                                        <Text
                                            fontFamily={'heading'}
                                            fontSize={'3xl'}
                                            color={'white'}
                                            mb={3}
                                        >
                                            {stat.title}
                                        </Text>
                                        <Text
                                            fontSize={'xl'}
                                            color={'gray.400'}
                                        >
                                            {stat.content}
                                        </Text>
                                    </Box>
                                ))}
                            </SimpleGrid>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            {/*App Info*/}
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        >
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'red.400',
                                    zIndex: -1,
                                }}
                            >
                                Write once,
                            </Text>
                            <br />
                            <Text as={'span'} color={'red.400'}>
                                use everywhere!
                            </Text>
                        </Heading>
                        <Text color={'gray.500'}>
                            Snippy is a rich coding snippets app that lets you
                            create your own code snippets, categorize them, and
                            even sync them in the cloud so you can use them
                            anywhere. All that is free!
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={'red'}
                                bg={'red.400'}
                                _hover={{ bg: 'red.500' }}
                            >
                                Get started
                            </Button>
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                            >
                                How It Works
                            </Button>
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'300px'}
                            rounded={'2xl'}
                            boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <IconButton
                                aria-label={'Play Button'}
                                variant={'ghost'}
                                _hover={{ bg: 'transparent' }}
                                size={'lg'}
                                color={'white'}
                                position={'absolute'}
                                left={'50%'}
                                top={'50%'}
                                transform={'translateX(-50%) translateY(-50%)'}
                            />
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
            {/*Disclaimer*/}
            <Container maxW={'7xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 4 }}
                    py={{ base: 16, md: 24 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    >
                        Discalimer
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus ornare mollis leo, et gravida nulla. Aliquam sed
                        ligula libero. Cras nec mi augue. Integer accumsan id
                        eros commodo facilisis. Nam volutpat, orci in placerat
                        scelerisque, nisi ipsum feugiat lacus, ac iaculis ex
                        augue nec nisi. Pellentesque nisi sapien, laoreet vitae
                        neque lacinia, semper aliquet neque. Curabitur vel mi ac
                        felis suscipit maximus. Vivamus hendrerit nec sem eget
                        accumsan. Integer finibus tempus sodales. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Donec sed
                        elementum ex. Etiam rutrum ornare mauris vel tempus.
                    </Text>
                </Stack>
            </Container>
            <Footer />
        </>
    );
};

export default Home;
