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
  Center,
  Collapse,
  Box
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Header = (props) => {
  const btnRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState("xs")
  const changeStatus = () => setSize(size === 'xs' ? 'lg' : 'xs');
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  const genrecount = [ "KPOP", "POP", "ROCK", "ELEC", "RAP", "RNB"]

  const KPOP = [
    {
      key: 1,
      genre: "K-POP"
    },
    {
      key: 2,
      genre: [
        "발라드",
        "뭐",
        "왜"
      ]
    },
    {
      key: 3,
      genre: "댄스"
    }
  ]
  const POP = [
    {
      key: 1,
      genre: "POP"
    },
    {
      key: 2,
      genre: "얼터너티브팝"
    },
    {
      key: 3,
      genre: "올디스"
    }
  ]
  const ROCK = [
    {
      key: 1,
      genre: "록 / 메탈"
    },
    {
      key: 2,
      genre: "모던록"
    },
    {
      key: 3,
      genre: "얼터너티브록"
    },
    {
      key: 4,
      genre: "프로그레시브/아트록"
    },
    {
      key: 5,
      genre: "하드록"
    },
    {
      key: 6,
      genre: "헤비메탈"
    },
    {
      key: 7,
      genre: "뉴메탈/하드코어"
    },
    {
      key: 8,
      genre: "포스트록"
    }
  ]
  const ELEC = [
    {
      key: 1,
      genre: "일렉트로니카"
    },
    {
      key: 2,
      genre: "하우스"
    },
    {
      key: 3,
      genre: "클럽뮤직"
    }
  ]
  const RAP = [
    {
      key: 1,
      genre: "랩 / 힙합"
    },
    {
      key: 2,
      genre: "팝랩"
    },
    {
      key: 3,
      genre: "얼터너티브힙합"
    },
    {
      key: 4,
      genre: "갱스터/하드코어랩"
    },
    {
      key: 6,
      genre: "East&West"
    }
  ]
  const RNB = [
    {
      key: 1,
      genre: "R&B / SOUL"
    },
    {
      key: 2,
      genre: "R&B"
    },
    {
      key: 3,
      genre: "SOUL"
    },
    {
      key: 4,
      genre: "URBAN"
    }
  ]
  const FOLK = [
    {
      key: 1,
      genre: "포크"
    },
    {
      key: 2,
      genre: "블루스"
    },
    {
      key: 3,
      genre: "컨트리"
    }
  ]
  return (
    <Flex
      pos="fixed"
      padding="11.5px"
      w="100%"
      bg={props.bgColor}
      backdropFilter={props.bgblur}
      t="0" l="0" r="0"
      color="white"
      align="center"
      transition="all ease 1s 0s"
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
                    <SimpleGrid columns={1} spacingX="100px">
                      <Center>
                      {
                        KPOP.map(Items => (
                          {
                            KPOP.map(Items => (
                              <SimpleGrid columns={1} width="100%" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="lg" bg="#fbfbfb;">
                                <Flex>
                                  <Link color="teal.500" width="100%" height="60px" w="100%" href="/editor">
                                    {Items.genre}
                                  </Link>
                                  <Button size="sm" onClick={handleToggle} mt="1rem">
                                    {show ? <ChevronDownIcon /> : <ChevronUpIcon />}
                                  </Button>
                                </Flex>
                              </SimpleGrid>
                            ))
                          }
                        ))
                    }
                      </Center>
                    </SimpleGrid>
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
