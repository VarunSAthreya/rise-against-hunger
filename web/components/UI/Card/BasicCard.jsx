import {
    Box,
    Center,
    Heading,
    Icon,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

const BasicCard = ({ data }) => {
    const { title, description, icon } = data;
    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Icon as={icon} boxSize={12} m={{ base: 2 }} color="#ffbf24" />
                <Heading fontSize={'2xl'}>{title}</Heading>
                <Text color={'gray.500'} my={4}>
                    {description}
                </Text>
            </Box>
        </Center>
    );
};

export default BasicCard;
