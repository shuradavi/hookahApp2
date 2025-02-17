import { VStack, StackSeparator, Box, Blockquote } from "@chakra-ui/react"




function MainContent() {
    
    return (
            <Box
                // m={10}
                w={600}
                borderWidth="1px"
                borderColor="border.disabled"
                color="fg.disabled"
                position={'absolute'}
                top={'50%'}
                left={'50%'}
                transform={'translate(-50%, -50%)'}
                backgroundColor={'#1f1f1f'}>
                {/* <Text p={4} fontSize={20} color={''}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates repellat nostrum libero illum at mollitia, ad rem dolorem nulla eos ipsum, dignissimos tempora impedit rerum tenetur quaerat dicta repellendus quis.
                </Text> */}
                <Blockquote.Root>
                    <Blockquote.Content p={4} fontSize={20}>
                        If anyone thinks he is something when he is nothing, he deceives
                        himself. Each one should test his own actions. Then he can take pride in
                        himself, without comparing himself to anyone else.
                    </Blockquote.Content>
                </Blockquote.Root>
            </Box>
  )
}

export default MainContent;