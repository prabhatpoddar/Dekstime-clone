import {
  Flex,
  Image,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  ButtonGroup,

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

export default function Navbar() {
  return (
    <Flex h="86px" borderTop="4px solid #4EA819" backgroundColor="#FFFFF" boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px">
      <Flex w="75%" m="auto" h="92px">
        <Flex w="383px">
          <Image
            w="168px"
            src="https://desktime.com/assets/design/dist/assets/Logo-Dark-Text-Without-Padding.svg"
          />
        </Flex>
        <Flex gap={4} alignItems="center">
          <Link to="/">Demo</Link>
          <Link to="/">Demo</Link>
          <Link to="/">Demo</Link>
          <Link to="/">Demo</Link>
          <Link to="/">Demo</Link>
          <Link to="/">Demo</Link>
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
                  rightIcon={<ChevronDownIcon />}
                >
                  {isOpen ? "Close" : "Open"}
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Create a Copy
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
