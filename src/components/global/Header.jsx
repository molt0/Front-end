import React from "react";
import {
  Stack,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Input,
  Spacer,
  Link,
  Image,
  SimpleGrid,
  Center
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
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

    const NavList = [
      {
        key : 1,
        genre : "발라드"
      },
      {
        key : 2,
        genre : "댄스"
      },
      {
        key : 3,
        genre : "POP"
      },
      {
        key : 4,
        genre : "R & B / Soul"
      },
      {
        key : 5,
        genre : "록 / 메탈"
      }
    ]
  return (
    <Flex
      pos= "fixed"
      padding="11.5px"
      w="100%"
      bg= {props.bgColor}
      backdropFilter= {props.bgblur}  
      t= "0" l= "0" r= "0"
      color="white"
      align="center"
      transition= "all ease 1s 0s"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" fontSize="30px" letterSpacing={"tighter"} ml="100px">
          Molto
        </Heading>
      </Flex>
      
      <Spacer />
      <Stack w="500px" mr="10" spacing={3}>
        <Input ml="60px" h="35px" w="430px" borderRadius="7px" variant="outline" color="black" fontSize="14px" bg="white" placeholder="검색" />
      </Stack>
      
      <Button position="fix" size="sm" mr="40px" ref={btnRef} colorScheme="teal" onClick={onOpen}>
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
                {
                  NavList.map(Items => (
                    <Center>
                      <SimpleGrid columns={1} width="100%" height="60px" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="lg" bg="#fbfbfb;">
                      <Link color="teal.500" href="/editor">
                        {Items.genre}
                      </Link>  
                    </SimpleGrid>
                    </Center>
                    
                  ))
                }  
                </DrawerBody>
              )
            }
          </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
