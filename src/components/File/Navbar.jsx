import {
  Flex,
  Image,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  ButtonGroup,
  Show,
  Hide,
  Spacer,
 
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BiFootball } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import Slider from "./Slider";

export default function Navbar() {
  
  return (
    <Flex
      h="96px"
      borderTop="4px solid #4EA819"
      bg="white"
      boxShadow="lg"
      zIndex="1000"
    >
      <Flex w="78%" m="auto" h="92px">
        <Flex display="flex" alignItems="center"><Show above="base" below="xl"><Slider/></Show></Flex>
        <Spacer/>
       

        <Flex w="383px" >
          <Image
            w="168px"
            src="https://desktime.com/assets/design/dist/assets/Logo-Dark-Text-Without-Padding.svg"
          />
        </Flex>
        <Hide below="xl">
          <Flex gap={4} alignItems="center">
            <Link to="/">
              <b>Demo</b>
            </Link>
            <Link to="/">
              <b>Feature</b>
            </Link>
            <Link to="/">
              <b>Pricing</b>
            </Link>
            <Link to="/">
              <b>About us</b>
            </Link>
            <Link to="/">
              <b>FAQ</b>
            </Link>
            <Link to="/">
              <b>Blog</b>
            </Link>
            <ButtonGroup gap="2">
              <Button colorScheme="whatsapp" variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button colorScheme="whatsapp" variant="solid">
                <Link to="/signup">Signup</Link>
              </Button>
            </ButtonGroup>

            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    rightIcon={<ChevronDownIcon w="16px" />}
                    leftIcon={<BiFootball w="16px" />}
                  >
                    {isOpen ? "EN" : "EN"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>English</MenuItem>
                    <MenuItem onClick={() => alert("Language Set As Espanol ")}>
                      Espanol
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
        </Hide>
        <Spacer/>
        <Flex display="flex" alignItems="center" ><Show above="base" below="xl"><IoExitOutline fontSize="30px"/></Show></Flex>
      </Flex>
    </Flex>
  );
}


