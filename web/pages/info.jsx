import {
    Avatar,
    Flex,
    Heading,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';
import SideBar from '../components/SideBar/sideBar';
import firebase from '../lib/firebase';

const Info = ({ donate }) => {
    // const address = [];
    // Geocode.setApiKey(process.env.NEXT_PUBLIC_MAPS_API);

    // donate.map((don) => {
    //     Geocode.fromLatLng(don.location.latitude, don.location.longitude).then(
    //         (response) => {
    //             const address1 = response.results[0].formatted_address;
    //             address.push(address1);
    //         },
    //         (error) => {
    //             console.error(error);
    //         }
    //     );
    // });

    return (
        <Flex>
            <SideBar />

            {/* Column 2 */}
            <Flex flexDir="row" p={10}>
                <Flex overflow="auto">
                    <Table variant="unstyled" mt={4}>
                        <Thead>
                            <Tr color="gray">
                                <Th>Name of Donatee</Th>
                                <Th>Area</Th>
                                <Th isNumeric>No of People</Th>
                                <Th isNumeric>Phone Number</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {donate.map((don, index) => (
                                <Tr key={index}>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar
                                                size="sm"
                                                mr={2}
                                                src="amazon.jpeg"
                                            />
                                            <Flex flexDir="column">
                                                <Heading
                                                    size="sm"
                                                    letterSpacing="tight"
                                                >
                                                    {don.name}
                                                </Heading>
                                                <Text
                                                    fontSize="sm"
                                                    color="gray"
                                                >
                                                    {format(
                                                        new Date(
                                                            don.timestamp
                                                                .seconds * 1000
                                                        ),
                                                        "MMM dd, yyyy 'at' h:mm a"
                                                    )}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>{'Hebbal'}</Td>
                                    <Td isNumeric>{don.people}</Td>
                                    <Td isNumeric>
                                        <Text
                                            fontWeight="bold"
                                            display="inline-table"
                                        >
                                            {don.phnumber}
                                        </Text>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Info;

export async function getServerSideProps() {
    const querySnapshot = await firebase.firestore().collection('donate').get();
    const donate = [];
    querySnapshot.forEach((doc) => {
        const temp = JSON.stringify(doc.data());

        donate.push(JSON.parse(temp));
    });
    return {
        props: {
            donate,
        },
    };
}
