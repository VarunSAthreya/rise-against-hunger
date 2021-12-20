import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
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
            title: 'FEED THE WORLD',
            text: 'FEED THE WORLD is growing a global movement to end hunger by empowering communities, nourishing lives and responding to emergencies..',
            image: 'https://image.shutterstock.com/image-photo/-260nw-1435184765.jpg',
        },
        {
            title: 'FIGHT AGAINST HUNGER',
            text: 'Support our food bank to help the needy in the community',
            image: 'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
        },
        {
            title: 'Donate for #ZeroHunger',
            text: ' If you cant feed a hundred people, then feed just one',
            image: 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
    ];

    return (
        <Box height={'600px'} width={'full'} overflow={'hidden'}>
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
                top={275}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={50}
                top={275}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${card.image})`}
                    >
                        {/* This is the block you need to change, to customize the caption */}
                        <Container
                            size="container.lg"
                            height="600px"
                            position="relative"
                        >
                            <Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)"
                            >
                                <Heading
                                    fontSize={{
                                        base: '3xl',
                                        md: '4xl',
                                        lg: '5xl',
                                    }}
                                >
                                    {card.title}
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    color="GrayText"
                                >
                                    {card.text}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
