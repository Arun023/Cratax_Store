import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  User2,
} from "lucide-react";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { Logo } from "@/assets/index";
import { DesktopNav, MobileNav } from "../Components/Nav";

type Props = {};

const Navbar = (props: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <nav className="bg-[#1E212C] px-3 py-2">
        <div className="container text-white flex justify-between flex-col md:flex-row">
          <div className="text-sm font-medium tracking-wider text-slate-300">
            Available 24/7 at
            <span className="font-semibold">(405) 555-0128</span>
          </div>
          <div className="flex flex-col md:flex-row  md:gap-5 text-sm font-medium tracking-wider text-slate-300">
            <p>Delivery & returns</p>
            <p>Track order</p>
            <p>Blog</p>
            <p>Contacts</p>
          </div>
          <div className="flex md:gap-3">
            {isLogin ? (
              <div className="flex md:gap-5 flex-col md:flex-row">
                <div className="flex gap-3">
                  <Heart /> <span>2</span>
                </div>
                <div className="flex gap-3">
                  <ShoppingCart />
                  <span className="bg-green-500 px-2 text-white">4</span>
                </div>
              </div>
            ) : (
              <>
                <User2 size={20} /> <span>Log-in / Register</span>
              </>
            )}
          </div>
        </div>
      </nav>
      <nav className="container flex gap-5 justify-center items-center py-2 px-2">
        <Box>
          <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}>
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}>
              <IconButton
                ref={btnRef}
                colorScheme="teal"
                onClick={onOpen}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color={useColorModeValue("gray.800", "white")}>
                <img src={Logo} />
              </Text>

              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </nav>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <MobileNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <section className="flex gap-3 text-sm justify-center items-center p-2 bg-green-800 text-white">
        <ChevronLeft /> Up to 70% Sale.{" "}
        <Link className="underline" to={""}>
          Shop at our latest sale
        </Link>{" "}
        <ChevronRight />
      </section>
    </>
  );
};

export default Navbar;
