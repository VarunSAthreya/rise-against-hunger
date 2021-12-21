import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaHandHoldingHeart, FaLaughBeam } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiInjustice } from 'react-icons/gi';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import TestimonialCard from '../components/UI/Card/TestimonialCard';

const testimonialCardData = [
    {
        heading: 'Efficient Collaborating',
        review: 'The people providing the service and technology used is very good and have good collaboration.',
        name: 'Guy Hawkins',
        designation: 'TrustWell Organization Head',
        imageUrl:
            'http://webdesign-finder.com/psycheco-psychology/wp-content/uploads/2021/06/img50.jpg',
    },
    {
        heading: 'Good Service',
        review: 'The service provided by the the organization is very good.',
        name: 'Alec Buttons',
        designation: 'Lets Feed Organization Head',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/close-up-cheerful-older-man-standing-isolated-on-w-Z7MW6Q8.jpg',
    },
    {
        heading: 'Friendly Nature',
        review: 'The volunteers are very friendly and have an helping nature',
        name: 'Kira Rhoades',
        designation: 'No Hungry Organization Head',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/beautiful-young-woman-standing-outdoors-PDP7Q6B-1.jpg',
    },
];

const About = () => {
    return (
        <>
            <NavBar />
            <Container maxW={'7xl'} p="12">
                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={10}
                    py={{ base: 20, md: 28 }}
                >
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'https://d1m6300l53o0vp.cloudfront.net/wp-content/uploads/2019/11/FoodBank_IMG_5469-1246x700.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'#ffbf24'}
                            fontWeight={600}
                            fontSize={'sm'}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}
                        >
                            Our Story
                        </Text>
                        <Heading fontSize={'3xl'}>
                            Who We Are And What We Do
                        </Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            We are a non Profitable Organization,determined to
                            end hungry and provide nutritious food to everyone
                            and raise the importance of a proper diet.
                        </Text>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            We support a nationwide network of food banks and
                            together we provide emergency food and support to
                            people locked in poverty, and campaign for change to
                            end the need for food banks in the UK.
                        </Text>
                    </Stack>
                </SimpleGrid>
                <Box p={4} spacing={8}>
                    <Heading textAlign={'center'} mb={4}>
                        Our Values
                    </Heading>
                    <SimpleGrid
                        columns={{ base: 1, md: 4 }}
                        spacing={10}
                        py={5}
                    >
                        <Stack alignItems={'center'} my={4}>
                            <Flex
                                w={16}
                                h={16}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg={'#ffbf24'}
                                mb={1}
                            >
                                <Icon as={FaHandHoldingHeart} w={10} h={10} />
                            </Flex>
                            <Text fontWeight={600}>Compassion</Text>
                            <Text color={'gray.600'} textAlign={'center'}>
                                We stand in solidarity with people that need the
                                help of food banks. We put the wellbeing of
                                people served by food banks above everything
                                else. We always uphold and protect their
                                dignity.
                            </Text>
                        </Stack>
                        <Stack alignItems={'center'} my={4}>
                            <Flex
                                w={16}
                                h={16}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg={'#ffb24f'}
                                mb={1}
                            >
                                <Icon as={GiInjustice} w={10} h={10} />
                            </Flex>
                            <Text fontWeight={600}>Justice</Text>
                            <Text color={'gray.600'} textAlign={'center'}>
                                We are motivated by a desire to see a more just
                                society. It’s not right that anyone is facing
                                hunger and poverty. Everyone should have enough
                                income to afford the essentials.
                            </Text>
                        </Stack>
                        <Stack alignItems={'center'} my={4}>
                            <Flex
                                w={16}
                                h={16}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg={'#ffb24f'}
                                mb={1}
                            >
                                <Icon as={BsFillPeopleFill} w={10} h={10} />
                            </Flex>
                            <Text fontWeight={600}>Community</Text>
                            <Text color={'gray.600'} textAlign={'center'}>
                                We believe we share the responsibility to
                                support one another in our communities. To
                                create change, we must work together for a
                                fairer society.
                            </Text>
                        </Stack>
                        <Stack alignItems={'center'} my={4}>
                            <Flex
                                w={16}
                                h={16}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg={'#ffb24f'}
                                mb={1}
                            >
                                <Icon as={FaLaughBeam} w={10} h={10} />
                            </Flex>
                            <Text fontWeight={600}>Dignity</Text>
                            <Text color={'gray.600'} textAlign={'center'}>
                                We recognise the innate value of each individual
                                person and seek to prioritise the other person’s
                                needs and concerns in the spirit of mutuality
                                and friendship. Regardless of background.
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Box>
                <Stack spacing={6} align={'center'} py={{ base: 20 }}>
                    <Heading>What Our Clients Say</Heading>
                    <Text color={'gray.500'}>
                        We have been working with other non-profitable
                        organizations around the world and Here are the few
                        things they say about us.
                    </Text>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: 10, md: 4, lg: 10 }}
                        my={10}
                    >
                        {testimonialCardData.map((data, index) => (
                            <TestimonialCard data={data} key={index} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
            <Footer />
        </>
    );
};

export default About;
