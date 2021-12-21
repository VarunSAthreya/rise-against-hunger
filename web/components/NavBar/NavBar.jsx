import React from 'react';
import {
    Box,
    Flex,
    Button,
    useDisclosure,
    Stack,
    useColorMode,
    IconButton,
    Text,
    HStack,
} from '@chakra-ui/react';
import {} from '@chakra-ui/icons';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavLink from './NavLink/NavLink';

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const Links = ['About', 'Login'];
    return (
        <>
            <Box
                px={20}
                py={12}
                position={'absolute'}
                top={0}
                zIndex={20}
                right={0}
                left={0}
            >
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Text>LOGO</Text>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={8}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>
                        </HStack>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

export default NavBar;
