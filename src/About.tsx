import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

interface AboutProp {
    body: string,
    header: string
}

const About = (prop: AboutProp) => {
    return (
        <Box
            w={'50%'}
            h={'70%'}
            minW={'400px'}
            minH={'500px'}
            padding={'40px'}
            overflow={'auto'}
            margin={'auto'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            // top={'0'}
            // right={'0'}
            // bottom={'0'}
            // left={'0'}
        >
            <Stack
                
            >
              <Heading as={"h4"}>
                  {prop.header}
              </Heading> 
              <Text>{prop.body}</Text>
          </Stack>      
    </Box>
  )
};

export default About;
