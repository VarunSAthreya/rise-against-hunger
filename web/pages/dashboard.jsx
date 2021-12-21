import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import BarChart from '../components/Chart/BarChart';
import Chart from '../components/Chart/Chart';
import SideBar from '../components/SideBar/sideBar';
import firebase from '../lib/firebase';

const dashboard = ({ survey }) => {
    console.log(survey);
    const labels = [];
    survey.map(() => labels.push('Hebbal'));
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'My Balance',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#db86b2',
                borderColor: '#ffb24f',
                borderCapStyle: 'butt',
                borderDashOffset: 0.0,
                borderJoinStyle: '#B57295',
                pointBorderColor: '#B57295',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#B57295',
                pointHoverBorderColor: '#B57295',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [0, 700, 400, 800, 1000, 900, 1500, 410, 110],
            },
        ],
    };
    return (
        <Flex
            h={'auto'}
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
                <Chart data={data} />
                <Flex
                    w={'100%'}
                    p="3%"
                    flexDir="column"
                    overflow="auto"
                    marginTop={'20px'}
                >
                    <Heading mb={4} letterSpacing="tight" fontWeight={'bold'}>
                        How Many People We Help
                    </Heading>
                    <Text color="gray" fontSize="sm">
                        People
                    </Text>
                    <BarChart />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default dashboard;

export async function getServerSideProps() {
    const querySnapshot = await firebase.firestore().collection('survey').get();
    const survey = [];
    querySnapshot.forEach((doc) => {
        const temp = JSON.stringify(doc.data());

        survey.push(JSON.parse(temp));
    });
    return {
        props: {
            survey,
        },
    };
}
