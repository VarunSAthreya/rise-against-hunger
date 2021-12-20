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
import { AiFillRead } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaBrain } from 'react-icons/fa';
import { MdHearing } from 'react-icons/md';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import TestimonialCard from '../components/UI/Card/TestimonialCard';

const testimonialCardData = [
    {
        heading: 'Efficient Collaborating',
        review: 'The people providing the service and technology used is very good and have good collaboration.',
        name: 'Guy Hawkins',
        designation: 'Designer',
        imageUrl:
            'http://webdesign-finder.com/psycheco-psychology/wp-content/uploads/2021/06/img50.jpg',
    },
    {
        heading: 'Good Service',
        review: 'The service provided by the doctors is very good and they have very good knowledge.',
        name: 'Alec Buttons',
        designation: 'Software Engineer',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/close-up-cheerful-older-man-standing-isolated-on-w-Z7MW6Q8.jpg',
    },
    {
        heading: 'Friendly Nature',
        review: 'The Doctors are very friendly and understand the problem very quickly.',
        name: 'Kira Rhoades',
        designation: 'CEO',
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
                                'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'#521262'}
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
                            Donec et odio pellentesque diam volutpat. Quis vel
                            eros donec ac odio. Adipiscing elit duis tristique
                            sollicitudin nibh sit. Molestie ac feugiat sed
                            lectus vestibulum mattis ullamcorper velit sed. Arcu
                            vitae elementum curabitur vitae nunc sed velit
                            dignissim. Volutpat diam ut venenatis tellus in.
                        </Text>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            Donec et odio pellentesque diam volutpat. Quis vel
                            eros donec ac odio. Adipiscing elit duis tristique
                            sollicitudin nibh sit. Molestie ac feugiat sed
                            lectus vestibulum mattis ullamcorper velit sed.
                        </Text>
                    </Stack>
                </SimpleGrid>
                <Box p={4} spacing={8}>
                    <Heading textAlign={'center'} mb={4}>
                        Credentials
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
                                bg={'#521262'}
                                mb={1}
                            >
                                <Icon as={AiFillRead} w={10} h={10} />
                            </Flex>
                            <Text fontWeight={600}>Higher degrees</Text>
                            <Text color={'gray.600'} textAlign={'center'}>
                                Maecenas nec mi in est maximus fermentum.
                                Suspendisse tempus.
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
                                bg={'#521262'}
                                mb={1}
                            >
                                <Icon as={FaBrain} w={10} h={10} />
                            </Flex>
                            <Text fontWeight={600}>Methodology</Text>
                            <Text color={'gray.600'} textAlign={'center'}>
                                Maecenas nec mi in est maximus fermentum.
                                Suspendisse tempus.
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
                                bg={'#521262'}
                                mb={1}
                            >
                                <Icon as={BsFillPeopleFill} w={10} h={10} />
                            </Flex>
                            <Text fontWeight={600}>Professionals</Text>
                            <Text color={'gray.600'} textAlign={'center'}>
                                Maecenas nec mi in est maximus fermentum.
                                Suspendisse tempus.
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
                                bg={'#521262'}
                                mb={1}
                            >
                                <Icon as={MdHearing} w={10} h={10} />
                            </Flex>
                            <Text fontWeight={600}>Therapy</Text>
                            <Text color={'gray.600'} textAlign={'center'}>
                                Maecenas nec mi in est maximus fermentum.
                                Suspendisse tempus.
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Box>
                <Stack spacing={6} align={'center'} py={{ base: 20 }}>
                    <Heading>What Our Clients Say</Heading>
                    <Text color={'gray.500'}>
                        We have been working with clients around the world and
                        Here are the few things they say about us.
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
