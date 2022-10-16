import {
    Box,
    Container,
    Heading,
    IconButton,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Carousel = () => {
    const [slider, setSlider] = useState(null);

    //   const top = useBreakpointValue({ base: '90%', md: '50%' }); USE THIS ON ICONBUTTON LEFT AND RIGHT
    //   const side = useBreakpointValue({ base: '30%', md: '40px' });

    const cards = [
        {
            title: 'RISE AGAINST HUNGER',
            text: 'Hunger is actually the worst weapon of mass destruction. It claims millions of victims each year.',
            secondaryText:
                'Support our food bank to help the needy in the community',
            image: '/assests/images/carousel-1.jpg',
        },
        {
            title: 'DONATE FOR HUNGER',
            text: 'One of the greatest feelings in the world is knowing that we as individuals can make a difference.',
            secondaryText:
                'Ending hunger in World is a goal that is literally within our grasp',
            image: '/assests/images/carousel-2.jpg',
        },
        {
            title: 'LETS FEED THE WORLD',
            text: 'FEED THE WORLD is growing a global movement to end hunger by empowering communities',
            secondaryText:
                'For nourishing lives and responding to emergencies..',
            image: '/assests/images/carousel-3.jpg',
        },
    ];

    return (
        <Box height={'675px'} width={'full'} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={50}
                top={395}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                backgroundColor={useColorModeValue('white', '#1a202cf5')}
                onClick={() => slider?.slickPrev()}
                _focus={{ outline: 'none' }}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={50}
                top={395}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                backgroundColor={useColorModeValue('white', '#1a202cf5')}
                onClick={() => slider?.slickNext()}
                _focus={{ outline: 'none' }}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'auto'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`${card.image}`}
                    >
                        {/* This is the block you need to change, to customize the caption */}
                        <Container
                            size="container.lg"
                            maxW={'110ch'}
                            height="675px"
                            position="relative"
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            <Stack
                                spacing={6}
                                alignItems={'center'}
                                position="absolute"
                                top="28%"
                                backgroundColor={useColorModeValue(
                                    'white',
                                    '#1a202cf5'
                                )}
                                padding={{
                                    base: '0px',
                                    md: '25px',
                                    lg: '50px',
                                }}
                            >
                                <Heading
                                    fontSize={{
                                        base: '3xl',
                                        md: '5xl',
                                        lg: '7xl',
                                    }}
                                    color="#ffbf24"
                                >
                                    {card.title}
                                </Heading>
                                <Box textAlign={'center'}>
                                    <Text
                                        fontSize={{ base: 'md', lg: 'lg' }}
                                        color={useColorModeValue(
                                            '#1a202cf5',
                                            'white'
                                        )}
                                    >
                                        {card.text}
                                    </Text>
                                    <Text
                                        fontSize={{ base: 'md', lg: 'lg' }}
                                        color={useColorModeValue(
                                            '#1a202cf5',
                                            'white'
                                        )}
                                    >
                                        {card.secondaryText}
                                    </Text>
                                </Box>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
