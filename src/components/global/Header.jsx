import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Input,
  Spacer,
  Link,
  Image
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props) => {
    const btnRef = React.useRef()
    const {isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState("xs")
    const changeStatus = () => setSize(size === 'xs' ? 'lg' : 'xs');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.300"
      color="white"
      {...props}
      >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Molto
        </Heading>
      </Flex>

      <Spacer />
      <Stack w="500px" mr="10" spacing={3}>
        <Input variant="filled" color="black" placeholder="검색" />
      </Stack>
      
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      
      {/* sidebar */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
            {
              size === "lg" ?
              (                 
                <DrawerFooter>
                    <Button variant="outline" m="30px" onClick={() => changeStatus()}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue" onClick={() => changeStatus()}>Save</Button>
                </DrawerFooter>
              ) :
              (
                <DrawerBody>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  m="12px"
                />
                <Button variant="outline" onClick={() => changeStatus()}>
                    프로필 수정
                </Button>
                
                  <Link color="teal.500" href="#">
                    도움말
                  </Link>
                </DrawerBody>
              )
            }
          </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
