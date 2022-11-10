import {
  Grid,
  Flex,
  Image,
  Spacer,
  Button,
  Text,
  Input,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { GrSkype } from "react-icons/gr";

export default function Footertwo() {
  return (
    <>
      <Grid w="100%">
        <Flex pt="25px" pl="150px" pr="200px" bg="RGBA(0, 0, 0, .16)">
          <Flex>
            <Image src="https://desktime.com/assets/design/dist/assets/Logo-Dark-Text-Without-Padding.svg" />
          </Flex>
          <Spacer />
          <Flex gap="10px">
            <Image src="https://desktime.com/assets/design/dist/assets/Google-Play.svg" />

            <Image src="https://desktime.com/assets/design/dist/assets/App-Store.svg" />
          </Flex>
        </Flex>
        <Flex bg="RGBA(0, 0, 0, .16)" pb="20px">
          <Flex pt="25px" pl="150px" pr="200px" gap="20px">
            <ImFacebook2 fontSize="30px" color="RGBA(0, 0, 0, .6)" />

            <FaTwitter fontSize="30px" color="RGBA(0, 0, 0, .6)" />

            <SiYoutube fontSize="30px" color="RGBA(0, 0, 0, .6)" />

            <FaLinkedin fontSize="30px" color="RGBA(0, 0, 0, .6)" />

            <GrSkype fontSize="30px" color="RGBA(0, 0, 0, .6)" />

            <BsWhatsapp fontSize="30px" color="RGBA(0, 0, 0, .6)" />
          </Flex>

          <Flex alignItems="center" gap="10px">
            <Text fontSize="16px" w="250px">
              Subscribe to Our Newspaper
            </Text>
            <Input bg="white" placeholder="Type Your Email" w="200px" />
            <Button colorScheme="whatsapp" variant="solid">
              Subscribe
            </Button>
          </Flex>
        </Flex>
      </Grid>
      <Flex h="52px" w="100%" bg="RGBA(0, 0, 0, .3)"></Flex>
    </>
  );
}
