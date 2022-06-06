import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Jorge Eder</Text>
                <Text color="gray.300" fontSize="small">
                    jorgeeder.dev@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Jorge Eder" src="https://github.com/jorgeeder.png" />
        </Flex>
    );
}