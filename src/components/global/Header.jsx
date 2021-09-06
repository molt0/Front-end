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
  Collapse,
  Box,
  IconButton,
  AddIcon
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

import IdInput from "../../components/UserPage/IdInput";
import PsInput from "../../components/UserPage/PsInput";
import PsChInput from "../../components/UserPage/PsChInput";
import PsChInput2 from "../../components/UserPage/PsChInput2";
import NameInput from "../../components/UserPage/NameInput";
import EmailInput from "../../components/UserPage/EmailInput";

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
      genre: [
        "발라드",
      ]
    },
    {
      genre: "댄스"
    }
  ]
  const POP = [
    {
      key: 1,
      genre: "POP"
    },
    {
      genre: "얼터너티브팝"
    },
    {
      genre: "올디스"
    }
  ]
  const ROCK = [
    {
      key: 1,
      genre: "록 / 메탈"
    },
    {
      genre: "모던록"
    },
    {
      genre: "얼터너티브록"
    },
    {
      genre: "프로그레시브/아트록"
    },
    {
      genre: "하드록"
    },
    {
      genre: "헤비메탈"
    },
    {
      genre: "뉴메탈/하드코어"
    },
    {
      genre: "포스트록"
    }
  ]
  const ELEC = [
    {
      key: 1,
      genre: "일렉트로니카"
    },
    {
      genre: "하우스"
    },
    {
      genre: "클럽뮤직"
    }
  ]
  const RAP = [
    {
      key: 1,
      genre: "랩 / 힙합"
    },
    {
      genre: "팝랩"
    },
    {
      genre: "얼터너티브힙합"
    },
    {
      genre: "갱스터/하드코어랩"
    },
    {
      genre: "East&West"
    }
  ]
  const RNB = [
    {
      key: 1,
      genre: "R&B / SOUL"
    },
    {
      genre: "R&B"
    },
    {
      genre: "SOUL"
    },
    {
      genre: "URBAN"
    }
  ]
  const FOLK = [
    {
      key: 1,
      genre: "포크"
    },
    {
      genre: "블루스"
    },
    {
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
                  <Box width="600px" height="900px">
                  <Heading width="600px" pl="220px" mt="200px">프로필 수정</Heading>
                    <Box width="150px" height="600px" float="left">
                      <Image
                        boxSize="125px"
                        borderRadius="full"
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                        mt="150px"
                      />
                      <Button width="50px" height="50px" top="-40px" left="85px" bg="teal.300" color="#fff" borderRadius="25px" pb="10px" fontSize="xxx-large">+</Button>
                    </Box>
                    <Box width="350px" height="600px" float="left">
                      
                      <IdInput />
                      <PsChInput />
                      <PsChInput2 />
                      <NameInput />
                      <Button variant="outline" width="50px" height="50px" left="350px" mb="0" mt="-10px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
                        수정
                      </Button>
                      <EmailInput />
                      <Button variant="outline" width="50px" height="50px" left="350px" mb="0" mt="-60px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
                        수정
                      </Button>
                      <PsInput />
                      <Button variant="outline" width="250px" height="50px" left="50px" top="50px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold" onClick={() => changeStatus()}>
                        정보변경
                      </Button>
                      <Button  variant="outline" width="100px" height="50px" left="50px" top="50px" borderRadius="lg" bg="gray" color="#fff" fontSize="xl" fontWeight="extrabold" onClick={() => changeStatus()}>
                        취소
                      </Button>
                    </Box>
                  </Box>
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
                      {/* {
                        genrecount.map(Items => (   */}
                          <SimpleGrid columns={1} width="100%" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="sm" bg="#fafafa;">
                            <Collapse startingHeight={60} in={show}>
                            {
                              KPOP.map(Items => (
                                  <Flex>
                                    <Link color="teal.500" width="100%" height="60px" w="100%" href="/editor">
                                      {Items.genre}
                                    </Link>
                                    {Items.key == 1 ? <Button size="sm" onClick={handleToggle} mt="1rem" mr="10px" bg="none">
                                      {show ? <ChevronDownIcon size="lg"/> : <ChevronUpIcon />}
                                      </Button> : ""
                                      }
                                  </Flex>
                              ))
                            }
                            </Collapse>
                          </SimpleGrid>
                          <SimpleGrid columns={1} width="100%" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="sm" bg="#fafafa;">
                            <Collapse startingHeight={60} in={show}>
                            {
                              POP.map(Items => (
                                  <Flex>
                                    <Link color="teal.500" width="100%" height="60px" w="100%" href="/editor">
                                      {Items.genre}
                                    </Link>
                                    {Items.key == 1 ? <Button size="sm" onClick={handleToggle} mt="1rem" mr="10px" bg="none">
                                      {show ? <ChevronDownIcon size="lg"/> : <ChevronUpIcon />}
                                      </Button> : ""
                                      }
                                  </Flex>
                              ))
                            }
                            </Collapse>
                          </SimpleGrid>
                          <SimpleGrid columns={1} width="100%" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="sm" bg="#fafafa;">
                            <Collapse startingHeight={60} in={show}>
                            {
                              ROCK.map(Items => (
                                  <Flex>
                                    <Link color="teal.500" width="100%" height="60px" w="100%" href="/editor">
                                      {Items.genre}
                                    </Link>
                                    {Items.key == 1 ? <Button size="sm" onClick={handleToggle} mt="1rem" mr="10px" bg="none">
                                      {show ? <ChevronDownIcon size="lg"/> : <ChevronUpIcon />}
                                      </Button> : ""
                                      }
                                  </Flex>
                              ))
                            }
                            </Collapse>
                          </SimpleGrid>
                          <SimpleGrid columns={1} width="100%" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="sm" bg="#fafafa;">
                            <Collapse startingHeight={60} in={show}>
                            {
                              ELEC.map(Items => (
                                  <Flex>
                                    <Link color="teal.500" width="100%" height="60px" w="100%" href="/editor">
                                      {Items.genre}
                                    </Link>
                                    {Items.key == 1 ? <Button size="sm" onClick={handleToggle} mt="1rem" mr="10px" bg="none">
                                      {show ? <ChevronDownIcon size="lg"/> : <ChevronUpIcon />}
                                      </Button> : ""
                                      }
                                  </Flex>
                              ))
                            }
                            </Collapse>
                          </SimpleGrid>
                          <SimpleGrid columns={1} width="100%" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="sm" bg="#fafafa;">
                            <Collapse startingHeight={60} in={show}>
                            {
                              RAP.map(Items => (
                                  <Flex>
                                    <Link color="teal.500" width="100%" height="60px" w="100%" href="/editor">
                                      {Items.genre}
                                    </Link>
                                    {Items.key == 1 ? <Button size="sm" onClick={handleToggle} mt="1rem" mr="10px" bg="none">
                                      {show ? <ChevronDownIcon size="lg"/> : <ChevronUpIcon />}
                                      </Button> : ""
                                      }
                                  </Flex>
                              ))
                            }
                            </Collapse>
                          </SimpleGrid>
                          <SimpleGrid columns={1} width="100%" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="sm" bg="#fafafa;">
                            <Collapse startingHeight={60} in={show}>
                            {
                              RNB.map(Items => (
                                  <Flex>
                                    <Link color="teal.500" width="100%" height="60px" w="100%" href="/editor">
                                      {Items.genre}
                                    </Link>
                                    {Items.key == 1 ? <Button size="sm" onClick={handleToggle} mt="1rem" mr="10px" bg="none">
                                      {show ? <ChevronDownIcon size="lg"/> : <ChevronUpIcon />}
                                      </Button> : ""
                                      }
                                  </Flex>
                              ))
                            }
                            </Collapse>
                          </SimpleGrid>
                          <SimpleGrid columns={1} width="100%" textAlign="center" mt="10px" ml="10px" lineHeight="60px" fontSize="20px" fontWeight="extrabold" borderRadius="lg" boxShadow="sm" bg="#fafafa;">
                            <Collapse startingHeight={60} in={show}>
                            {
                              FOLK.map(Items => (
                                  <Flex>
                                    <Link color="teal.500" width="100%" height="60px" w="100%" href="/editor">
                                      {Items.genre}
                                    </Link>
                                    {Items.key == 1 ? <Button size="sm" onClick={handleToggle} mt="1rem" mr="10px" bg="none">
                                      {show ? <ChevronDownIcon size="lg"/> : <ChevronUpIcon />}
                                      </Button> : ""
                                      }
                                  </Flex>
                              ))
                            }
                            </Collapse>
                          </SimpleGrid>
                        {/* ))
                      } */}
                     
                </DrawerBody>
              )
          }
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
