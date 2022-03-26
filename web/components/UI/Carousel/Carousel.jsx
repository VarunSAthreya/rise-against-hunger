import {
    Box,
    Container,
    Heading,
    IconButton,
    Stack,
    Text,
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
            image: 'https://miro.medium.com/max/1200/1*nbGhfrzP5fI-nWj3RAaWRA.jpeg',
        },
        {
            title: 'FIGHT AGAINST HUNGER',
            text: 'Support our food bank to help the needy in the community',
            image: 'https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/24/file76pdj37q7h4124n542bf-1595576932.jpg',
        },
        {
            title: 'Donate for #ZeroHunger',
            text: ' If you cant feed a hundred people, then feed just one',
            image: 'https://www.freudenberg.com/fileadmin/images/responsibility/2020-09-08_Foodbank_Southafrica_01.jpg',
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
                top={275}
                transform={'translate(0%, -50%)'}
                zIndex={2}
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
                top={275}
                transform={'translate(0%, -50%)'}
                zIndex={2}
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
                        backgroundImage={`url(${card.image})`}
                    >
                        {/* This is the block you need to change, to customize the caption */}
                        <Container
                            size="container.lg"
                            maxW={'100ch'}
                            height="675px"
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
                                    color="#ffbf24"
                                >
                                    {card.title}
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    color="white"
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
