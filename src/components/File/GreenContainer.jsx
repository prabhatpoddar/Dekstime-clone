import {
  Grid,
  Input,
  Flex,
  Button,
  GridItem,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";

export default function GreenContainer() {
  return (
    <Grid bg="green" pt={50} pb={50} gap={3}>
      <GridItem>
        <Heading size="lg" color="white">
          {" "}
          Want to get the most out of your time?
        </Heading>
        <Heading size="lg" color="white">
          {" "}
          Try DeskTime for free!
        </Heading>
      </GridItem>
      <GridItem>
        <Flex justifyContent="center" mt={4}>
          <Flex alignItems="center" gap="10px">
            <Input bg="white" placeholder="Your Work Email" w="300px" />
            <Button colorScheme="Green" variant="outline" color="white">
              START A FREE TRIAL
            </Button>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem gap={4}>
        <Text color="white">Try free for 14 days. No credit card required.</Text>
        <Text color="white">By signing up, you agree to our <b><u>terms</u></b> and <b><u>privacy policy</u></b>.</Text>
      </GridItem>
      
    </Grid>
  );
}
