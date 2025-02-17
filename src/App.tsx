import './App.css'
import { VStack, StackSeparator, Box } from "@chakra-ui/react"
import Header from './Header';
import MainContent from './MainContent';




function App() {
    
    return (
        <VStack separator={<StackSeparator />} display={'flex'}>
            <Header />
            <MainContent />
            <Box>

            </Box>
        </VStack>
  )
}

export default App
