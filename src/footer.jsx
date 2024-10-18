import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import {
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Box,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import image from "./Images/images2.jpeg";
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SiYoutube, SiInstagram, SiFacebook } from 'react-icons/si';

const Footer = () => {
  const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Flex
      justifyContent="space-between"
      className='bg-amber-900'
      px={{ base: '5', md: '50' }}
      py={{ base: '5', md: '35' }}
      color="white"
      flexDirection={columnDirection}
      align="center"
      justify="center"
    >
      <VStack>
        <Fade direction="left" triggerOnce>
          <VStack>
            <HStack mr={{ md: '160px', base: '0' }} spacing="5">
              <Image src={image} w="10" style={{borderRadius:"20px"}} />
              <Text fontSize={{ md: '1.5rem', base: '1.2rem' }} mt="3">
                Saint Leo's Catholic Church
              </Text>
            </HStack>
            <Text fontSize={{ md: '15px', base: '12px' }} mr={{}} className='mr-[20%]'>
              No 4 Arapasowo Street Ikeja Lagos State
            </Text>
          </VStack>
        </Fade>
        <Fade direction="up" triggerOnce>
          <VStack display={{ base: 'none', md: 'flex' }} spacing="3">
            <HStack mr={{ md: '150px', base: '330px' }} spacing="3">
              <ChakraLink
                href="https://www.tiktok.com/@swifdrop.ng?_t=8oAdo37z3if&_r=1"
                isExternal
              >
                <SiYoutube size={28} />
              </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/swif_drop?igsh=MXd6NnJrNWxqY3hqMw=="
                isExternal
              >
                <SiInstagram size={28} />
              </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/swif_drop?igsh=MXd6NnJrNWxqY3hqMw=="
                isExternal
              >
                <SiFacebook size={28} />
              </ChakraLink>
            </HStack>
            <Text
              color="#708870"
              display={{ base: 'none', md: 'flex' }}
              mr={{ md: '12', base: '0' }}
            >
              © Copyright 2024, All Rights Reserved by ST Leo's Catholic Church
            </Text>
          </VStack>
        </Fade>
      </VStack>
      <Fade direction="up" triggerOnce>
        <HStack
          spacing={{ base: '10', md: '20' }}
          mt={{ base: '5', md: '0' }}
          marginLeft={{ base: '0', md: '500' }}
        >
          <VStack>
            <Text textDecoration="underline" color="#216624">
              LINKS
            </Text>
            <ChakraLink as={RouterLink} to="/About">
              About Us
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/Faq">
              FAQ
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/Services">
              Services
            </ChakraLink>
          </VStack>

          <VStack>
            <Text textDecoration="underline" color="#216624">
              POLICY
            </Text>
            <ChakraLink as={RouterLink} to="/Features">
              Features
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/Privacy">
              Privacy
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/Terms">
              Terms of use
            </ChakraLink>
          </VStack>

          <VStack mb="8">
            <Text textDecoration="underline" color="#216624">
              HELP
            </Text>
            <ChakraLink as={RouterLink} to="/Contact">
              Contact Us
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/Career">
              Career
            </ChakraLink>
          </VStack>
        </HStack>
      </Fade>
      <Divider display={{ base: 'flex', md: 'none' }} />
      <Fade direction="right" triggerOnce>
        <VStack
          display={{ md: 'none', base: 'flex' }}
          mt={{ base: '4', md: '0' }}
          align={'center'}
          justify={'center'}
          spacing="5"
        >
          <HStack spacing="3" alignItems={'center'} justifyContent="center">
            <ChakraLink
              href="https://www.tiktok.com/@swifdrop.ng?_t=8oAdo37z3if&_r=1"
              isExternal
            >
              <SiYoutube size={32} />
            </ChakraLink>
            <ChakraLink
              href="https://www.instagram.com/swif_drop?igsh=MXd6NnJrNWxqY3hqMw=="
              isExternal
            >
              <SiInstagram size={32} />
            </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/swif_drop?igsh=MXd6NnJrNWxqY3hqMw=="
                isExternal
              >
                <SiFacebook size={28} />
              </ChakraLink>
          </HStack>
          <Text fontSize={{ md: '0', base: '12px' }} mr={{}}>
          © Copyright 2024, All Rights Reserved by ST Leo's Catholic Church
          </Text>
        </VStack>
      </Fade>
    </Flex>
  );
};

export default Footer;
