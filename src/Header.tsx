import { GridItem, Box, Grid, Link, Icon } from "@chakra-ui/react"
import { IoLogoNoSmoking } from "react-icons/io5";
import { PiSignInFill } from "react-icons/pi";

function Header() {
    
    return (
        <Box marginBottom={5} width={1000}>
            <Grid templateColumns='repeat(6, 1fr)' gap='' alignContent='center' alignItems='center'>
                <GridItem colSpan={1}>
                    <Icon color='teal' fontSize='30px'>
                        <IoLogoNoSmoking/>
                    </Icon>
                </GridItem>
                <GridItem colSpan={4} spaceX={10}> 
                    <Link variant="plain" href="#" color='teal' fontSize='20px'>
                        Главная
                    </Link>
                    <Link variant="plain" href="#" color='teal' fontSize='20px'>
                        Новости
                    </Link>
                    <Link variant="plain" href="#" color='teal' fontSize='20px'>
                        Миксология
                    </Link>
                    <Link variant="plain" href="#" color='teal' fontSize='20px'>
                        Справочная
                    </Link>
                </GridItem>
                <GridItem colSpan={1}>
                    <Link variant='plain' href='#' color='teal' fontSize='25px' display='grid' alignContent='center' alignItems='center' justifyContent='center'>
                        <PiSignInFill />
                    </Link>
                </GridItem>
            </Grid>
        </Box>
  )
}

export default Header