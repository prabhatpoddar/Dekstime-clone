import {
  Flex,
  Image,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  ButtonGroup,
  SimpleGrid,

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { BiFootball } from "react-icons/bi";

export default function Navbar() {
  const theme = {
    fontSizes: {
      lg: '18px',
    },
    colors: {
      gray: {
        100: '#fafafa',
        200: '#f7f7f7',
      },
    },
  }
  return (
    <Flex h="96px" borderTop="4px solid #4EA819" backgroundColor="#FFFFF" boxShadow="md">
      <Flex w="78%" m="auto" h="92px">
        <Flex w="383px">
          <Image
            w="168px"
            src="https://desktime.com/assets/design/dist/assets/Logo-Dark-Text-Without-Padding.svg"
          />
        </Flex>
        <Flex gap={4} alignItems="center">
          <Link to="/" ><b>Demo</b></Link>
          <Link to="/"><b>Feature</b></Link>
          <Link to="/"><b>Pricing</b></Link>
          <Link to="/"><b>About us</b></Link>
          <Link to="/"><b>FAQ</b></Link>
          <Link to="/"><b>Blog</b></Link>
          <ButtonGroup gap="2">
            <Button colorScheme="whatsapp" variant="outline">
              Login
            </Button>
            <Button colorScheme="whatsapp" variant="solid">
              Signup
            </Button>
          </ButtonGroup>

          <Menu>
            {({ isOpen }) => (
              <>
              
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon w="16px"/>}
                  leftIcon={<BiFootball w="16px"/>}
                 

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
      </Flex>
    </Flex>
  );
}
