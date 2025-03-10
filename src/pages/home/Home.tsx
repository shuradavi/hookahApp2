import { Stack, defineTextStyles, Separator } from "@chakra-ui/react"
import About from './ui/About.tsx';
import Footer from './ui/Footer.tsx';
import { content, header } from '../../setings.js';


export const textStyles = defineTextStyles({
    body: {
      description: "The body text style - used in paragraphs",
      value: {
        fontFamily: "SFMono-Regular",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24",
        letterSpacing: "0",
        textDecoration: "None",
        textTransform: "None",
      },
    },
  })

function Home() {
    
    return (
        <>
            <Stack
                display={'grid'}
                maxWidth={'1280px'}
                h={'100%'}
                gridTemplateRows={'auto 20px 180px'}
                justifyContent={'center'}
                overflow={'hidden'}
            >
                <About header={header} body={content} />
                <Separator />
                <Footer />
            </Stack>
        </>
        
  )
}

export default Home;
