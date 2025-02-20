import './App.css'
import { Stack, StackSeparator, defineTextStyles } from "@chakra-ui/react"
import Header from './Header';
import About from './About';
import Footer from './Footer';
import { content, header  } from './setings.ts';

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

function App() {
    
    return (
        <Stack
            separator={<StackSeparator />}
            display={'grid'}
            w={'100%'}
            h={'100%'}
            gridTemplateRows={'50px auto auto auto auto'}
            justifyContent={'center'}
            overflow={'hidden'}
        >
            <Header />
            <About header={header} body={content}/>
            <Footer />
        </Stack>
  )
}

export default App
