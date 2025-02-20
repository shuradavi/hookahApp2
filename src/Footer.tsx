import React from "react"
import { Box, Text, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
      <Box
          h={'100%'}
          marginTop={'10px'}
          display={'grid'}
          gridTemplateRows={'auto auto'}
          justifyContent={'center'}
          gap={'20px'}
      >
          <Text>Отдельная благодарность</Text>
          <Box
              w={'600px'}
              display={'grid'}
              gridTemplateColumns={'repeat(auto-fit, 100px)'}
              justifyContent={'center'}
              alignContent={'center'}
              marginBottom={'10px'}
          >
              <Image src={'/src/logo/KMTM.png'} alt="KMTM.logo"/>
              <Image src={'/src/logo/Trexa.png'} alt="Trexa.logo"/>
              <Image src={'/src/logo/Murzilka.png'} alt="Murzilka.logo"/>
          </Box>
    </Box>
  )
};

export default Footer;

