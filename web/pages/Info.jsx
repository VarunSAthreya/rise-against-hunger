import React from 'react';
import {
    Flex,
    Heading,
    Avatar,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import SideBar from '../components/SideBar/sideBar';

const Info = () => {
    return (
        <Flex>
            <SideBar />

            {/* Column 2 */}
            <Flex flexDir="row" p={10}>
                <Flex overflow="auto">
                    <Table variant="unstyled" mt={4}>
                        <Thead>
                            <Tr color="gray">
                                <Th>Name of transaction</Th>
                                <Th>Category</Th>
                                <Th isNumeric>Cashback</Th>
                                <Th isNumeric>Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
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
                                                Amazon
                                            </Heading>
                                            <Text fontSize="sm" color="gray">
                                                Apr 24, 2021 at 1:40pm
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                                <Td>Electronic Devices</Td>
                                <Td isNumeric>+$2</Td>
                                <Td isNumeric>
                                    <Text
                                        fontWeight="bold"
                                        display="inline-table"
                                    >
                                        -$242
                                    </Text>
                                    .00
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Flex align="center">
                                        <Avatar
                                            size="sm"
                                            mr={2}
                                            src="starbucks.png"
                                        />
                                        <Flex flexDir="column">
                                            <Heading
                                                size="sm"
                                                letterSpacing="tight"
                                            >
                                                Starbucks
                                            </Heading>
                                            <Text fontSize="sm" color="gray">
                                                Apr 22, 2021 at 2:43pm
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                                <Td>Cafe and restaurant</Td>
                                <Td isNumeric>+$23</Td>
                                <Td isNumeric>
                                    <Text
                                        fontWeight="bold"
                                        display="inline-table"
                                    >
                                        -$32
                                    </Text>
                                    .00
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Flex align="center">
                                        <Avatar
                                            size="sm"
                                            mr={2}
                                            src="youtube.png"
                                        />
                                        <Flex flexDir="column">
                                            <Heading
                                                size="sm"
                                                letterSpacing="tight"
                                            >
                                                YouTube
                                            </Heading>
                                            <Text fontSize="sm" color="gray">
                                                Apr 13, 2021 at 11:23am
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                                <Td>Social Media</Td>
                                <Td isNumeric>+$4</Td>
                                <Td isNumeric>
                                    <Text
                                        fontWeight="bold"
                                        display="inline-table"
                                    >
                                        -$112
                                    </Text>
                                    .00
                                </Td>
                            </Tr>
                            <Tr>
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
                                                Amazon
                                            </Heading>
                                            <Text fontSize="sm" color="gray">
                                                Apr 12, 2021 at 9:40pm
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                                <Td>Electronic Devices</Td>
                                <Td isNumeric>+$2</Td>
                                <Td isNumeric>
                                    <Text
                                        fontWeight="bold"
                                        display="inline-table"
                                    >
                                        -$242
                                    </Text>
                                    .00
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Flex align="center">
                                        <Avatar
                                            size="sm"
                                            mr={2}
                                            src="starbucks.png"
                                        />
                                        <Flex flexDir="column">
                                            <Heading
                                                size="sm"
                                                letterSpacing="tight"
                                            >
                                                Starbucks
                                            </Heading>
                                            <Text fontSize="sm" color="gray">
                                                Apr 10, 2021 at 2:10pm
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                                <Td>Cafe and restaurant</Td>
                                <Td isNumeric>+$23</Td>
                                <Td isNumeric>
                                    <Text
                                        fontWeight="bold"
                                        display="inline-table"
                                    >
                                        -$32
                                    </Text>
                                    .00
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Flex align="center">
                                        <Avatar
                                            size="sm"
                                            mr={2}
                                            src="youtube.png"
                                        />
                                        <Flex flexDir="column">
                                            <Heading
                                                size="sm"
                                                letterSpacing="tight"
                                            >
                                                YouTube
                                            </Heading>
                                            <Text fontSize="sm" color="gray">
                                                Apr 7, 2021 at 9:03am
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                                <Td>Social Media</Td>
                                <Td isNumeric>+$4</Td>
                                <Td isNumeric>
                                    <Text
                                        fontWeight="bold"
                                        display="inline-table"
                                    >
                                        -$112
                                    </Text>
                                    .00
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Info;
