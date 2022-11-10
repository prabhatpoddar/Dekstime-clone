import { Grid, Flex, Image, Spacer, Button } from "@chakra-ui/react";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { GrSkype } from "react-icons/gr";

export default function Footertwo() {
  return (
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
      <Flex>
        <Flex>
          <Button>
            <ImFacebook2 />
          </Button>
          <Button>
            <FaTwitter />
          </Button>
          <Button>
            <SiYoutube />{" "}
          </Button>
          <Button>
            <FaLinkedin />
          </Button>
          <Button>
            <GrSkype />
          </Button>
          <Button>
            <BsWhatsapp />
          </Button>
        </Flex>

        <Flex></Flex>
      </Flex>
    </Grid>
  );
}
