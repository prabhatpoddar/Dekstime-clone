import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
  ButtonGroup,
  Flex,
  Grid,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Slider() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} bg="transparent" onClick={onOpen}>
        <AiOutlineMenu fontSize="30px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src="https://desktime.com/assets/design/dist/assets/Logo-Dark-Text-Without-Padding.svg" />
          </DrawerHeader>

          <DrawerBody>
            <Grid
              gap={4}
              alignItems="center"
              justifyContent="center"
              fontSize="25px"
            >
              <Link to="/">
                <>Demo</>
              </Link>
              <Divider />

              <Link to="/">
                <>Feature</>
              </Link>
              <Divider />

              <Link to="/">
                <>Pricing</>
              </Link>
              <Divider />

              <Link to="/">
                <>About us</>
              </Link>
              <Divider />

              <Link to="/">
                <>FAQ</>
              </Link>
              <Divider />

              <Link to="/">
                <>Blog</>
              </Link>
              <Divider />
            </Grid>
          </DrawerBody>

          <DrawerFooter>
            <Link to="/login">
              <Button variant="outline" mr={3} onClick={onClose}>
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="blue" onClick={onClose}>
                Signup
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
