import { Badge, Heading, Text, Box } from "@chakra-ui/react";

const Empty = () => {
  return (
    <Box
      boxSize={{ sm: "sm", lg: "lg" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxH={{ sm: "60", md: "none" }}
    >
      <Badge
        borderRadius="lg"
        fontSize="md"
        p="6"
        colorScheme={"cyan"}
        textTransform="None"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        
      </Badge>
    </Box>
  );
};

export default Empty;
