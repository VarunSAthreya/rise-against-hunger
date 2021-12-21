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
        title: 'Vision',
        content: (
            <>
                We envision a community in which everyone has access to
                sufficient nutritious food.
            </>
        ),
    },
    {
        title: 'Mission',
        content: <>To End Food Insecurity in All Forms in the World.</>,
    },
    {
        title: 'Vision',
        content: (
            <>
                To be the prevailing centralized coordinating organization for
                all food donations and to play a key role in the reduction of
                food wastage and food insecurity.
            </>
        ),
    },
    {
        title: 'Mission',
        content: (
            <>
                To help our neighbors thrive by creating more equitable access
                to food and opportunity through community partnerships.
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
            <Box bg={'#ffbf24'} position={'relative'}>
                <Container maxW={'7xl'} zIndex={10} position={'relative'}>
                    <Stack direction={{ base: 'column', lg: 'row' }}>
                        <Stack
                            flex={1}
                            color={'#000'}
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
                                    color={'#000'}
                                >
                                    Our Aspiration
                                </Text>
                                <Heading
                                    color={'white'}
                                    textAlign={'center'}
                                    mb={5}
                                    fontSize={{ base: '3xl', md: '5xl' }}
                                >
                                    Mission & Vision
                                </Heading>
                                <Text
                                    fontSize={'xl'}
                                    color={'#000'}
                                    textAlign={'center'}
                                >
                                    Every Organization as to have some mission
                                    and Vision in order to succeed the goals and
                                    Make the world a better place.
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
                                        <Text fontSize={'xl'} color={'#000'}>
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
                                    bg: '#fbbf24',
                                    zIndex: -1,
                                }}
                            >
                                Want to now More
                            </Text>
                            <br />
                            <Text as={'span'} color={'#fbbf24'}>
                                check out! Our App
                            </Text>
                        </Heading>
                        <Text color={'gray.500'}>
                            Food is always stored off the floor and away from
                            walls and non-food items. Storage area, including
                            the floor, pallets and shelves are cleaned
                            regularly. Doors, windows and roofs of storage area
                            are well sealed to prevent pest entry and a pest
                            control program is organized at regular intervals.
                            Our staffs and volunteers are oriented with personal
                            hygiene and sanitation practices for maintaining
                            hygiene standards in food handling.
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
                                bg={'#fbbf24'}
                                _hover={{ bg: '#fbbf24' }}
                            >
                                Download
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
                        The organization and its members, employees, volunteers
                        or other representatives shall inspect and confirm that
                        all donated food products received from respected
                        partners are in good order and all of their affiliates
                        and related entities and employees and officers make no
                        representations, warranties or guaranties whatsoever
                        with respect to the quality or hygiene of the donated
                        food products. Once the donated food products are
                        received by organization and its members, employees,
                        volunteers or other representatives shall not be
                        responsible for any adverse reactions, side effects,
                        injury, bodily harm or death that results from
                        consumption of the donated food products or any other
                        liability arising thereof hereby releases and
                        indemnifies and holds noone , harmless from and against
                        all claims whatsoever organisation may have against
                        anyone and all damage, loss, cost, expense or liability.
                    </Text>
                </Stack>
            </Container>
            <Footer />
        </>
    );
};

export default Home;
