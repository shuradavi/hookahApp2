import { GridItem, Box, Grid, Link, Icon, Separator } from "@chakra-ui/react"
import { IoLogoNoSmoking } from "react-icons/io5";
import { PiSignInFill } from "react-icons/pi";
import { Outlet } from 'react-router-dom';


function NavBar() {
    
    return (
    <>
        <div className="nav-wrap">
            <Box
                display={'flex'}
                alignSelf={'center'}    
                fontWeight={'bold'}
                maxWidth={'1280px'}
                margin={'10px 0 10px 0'}
             >
                 <Grid
                templateColumns='repeat(6, auto)'
                justifyContent={'center'}
                gap={'50px'}
            >
                <GridItem display={'grid'}>
                    <Icon
                        color='teal'
                        fontSize='30px'
                    >
                        <IoLogoNoSmoking/>
                    </Icon>
                </GridItem>
                <GridItem >
                    <Link
                        variant="plain"
                        href="/"
                        color='teal'
                        fontSize='20px'
                    >
                        Главная
                    </Link>
                </GridItem>
                <GridItem>
                    <Link
                        variant="plain"
                        href="/news"
                        color='teal'
                        fontSize='20px'
                    >
                        Новости
                    </Link>
                </GridItem>
                <GridItem>
                    <Link
                        variant="plain"
                        href="/mixology"
                        color='teal'
                        fontSize='20px'
                    >
                        Миксология
                    </Link>
                </GridItem>
                <GridItem>
                    <Link
                        variant="plain"
                        href="/learning"
                        color='teal'
                        fontSize='20px'
                    >
                        Справочная
                    </Link>
                </GridItem>
                <GridItem>
                    <Link
                        variant='plain'
                        href='#'
                        color='teal'
                        fontSize='25px'
                        display={'flex'}
                        alignContent={'center'}
                        justifyContent={'center'}
                    >
                        <PiSignInFill/>
                    </Link>
                </GridItem>
                     </Grid>
            </Box>
            <Separator maxW={'1280px'} />
        </div>
        <Outlet/>
    </>
  )
}

export default NavBar