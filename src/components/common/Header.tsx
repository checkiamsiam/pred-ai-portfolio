"use client";
import Image from "next/image";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Drawer from "react-modern-drawer";
import Button from "../ui/Button";
import Container from "./Container";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Container>
      <div>
        <nav className="flex justify-between items-center py-5">
          <img src="/img/logo.png" alt="logo" />
          <div className="xl:flex gap-3 hidden ">
            <Button href="#our-vision">Our Vision</Button>
            <Button href="#the-product">The Product</Button>
            <Button href="#why-spredai">WHY $PREDAI</Button>
            <Button href="#roadmap"> ROADMAP</Button>
            <Button transparent>INVESTOR INQUIERIES</Button>
            <button className="h-11 w-11 bg-foreground rounded-full flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Image src="/svg/telegram.svg" alt="send" width={24} height={24} />
            </button>
            <button className="h-11 w-11 bg-foreground rounded-full flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Image src="/svg/twitter.svg" alt="send" width={24} height={24} />
            </button>
          </div>
          <div className="xl:hidden flex">
            <button onClick={toggleDrawer} className="p-2">
              <MdMenu className="text-2xl" />
            </button>
          </div>
        </nav>
        <div className="h-[1px] bg-foreground" />
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div className="bg-background">
          <DrawerMenu toggle={toggleDrawer} />
        </div>
      </Drawer>
    </Container>
  );
};

export default Header;
