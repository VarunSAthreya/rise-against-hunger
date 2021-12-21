import { Icon, Link, Text } from '@chakra-ui/react';

const SocialMedia = ({ data }) => {
    const { icon, url, text } = data;
    return (
        <Text
            fontSize="md"
            display="flex"
            alignItems="center"
            _hover={{
                color: '#ffb24f',
                textDecoration: 'none',
            }}
        >
            <Icon boxSize={5} m={{ base: 2 }} as={icon} />
            <Link
                href={url}
                target="_blank"
                rel="noreferrer"
                _hover={{
                    textDecoration: 'none',
                }}
            >
                {text}
            </Link>
        </Text>
    );
};

export default SocialMedia;
