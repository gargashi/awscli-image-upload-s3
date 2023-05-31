import { Box, Text, VStack } from "@chakra-ui/react";
import Posts from "./Posts";

const Profile = () => {
  return (
    <Box>
      <VStack p={7} m="auto" width="fit-content" borderRadius={6} bg="gray.700">
        
        <Text>Hello</Text>
        
      </VStack>

      <Posts />
    </Box>
  );
};
export default Profile;
