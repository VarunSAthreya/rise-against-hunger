import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Chart from '../components/Chart/Chart';
import SideBar from '../components/SideBar/sideBar';

const dashboard = () => {
    return (
        <Flex
            h={[null, null, '100vh']}
            maxW="3000px"
            flexDir={['column', 'column', 'row']}
            overflow="hidden"
        >
            {/* Column 1 */}
            <SideBar />

            {/* Column 2 */}
            <Flex w={'100%'} p="3%" flexDir="column" overflow="auto">
                <Heading mb={4} letterSpacing="tight" fontWeight={'bold'}>
                    Welcome back
                </Heading>
                <Text color="gray" fontSize="sm">
                    My Balance
                </Text>
                <Chart />
            </Flex>
        </Flex>
    );
};

export default dashboard;
