import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Chart from '../components/Chart/Chart';
import SideBar from '../components/SideBar/sideBar';
import BarChart from '../components/Chart/BarChart';

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
                    Our Distribution
                </Text>
                <Chart />
            </Flex>
            <Flex w={'100%'} p="3%" flexDir="column" overflow="auto">
                <Heading mb={4} letterSpacing="tight" fontWeight={'bold'}>
                    How Many People We Help
                </Heading>
                <Text color="gray" fontSize="sm">
                    People
                </Text>
                <BarChart />
            </Flex>
        </Flex>
    );
};

export default dashboard;
