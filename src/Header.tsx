import { GridItem, Box, Grid, Link, Icon } from "@chakra-ui/react"
import { IoLogoNoSmoking } from "react-icons/io5";
import { PiSignInFill } from "react-icons/pi";

function Header() {
    
    return (
        <Box
            display={'flex'}
            fontWeight={'bold'}
            maxWidth={'1280px'}
            margin={'15px 0 10px 0'}
            justifySelf={'center'}
            alignItems={'center'}
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
                        href="#"
                        color='teal'
                        fontSize='20px'
                    >
                        Главная
                    </Link>
                </GridItem>
                <GridItem>
                    <Link
                        variant="plain"
                        href="#"
                        color='teal'
                        fontSize='20px'
                    >
                        Новости
                    </Link>
                </GridItem>
                <GridItem>
                    <Link
                        variant="plain"
                        href="#"
                        color='teal'
                        fontSize='20px'
                    >
                        Миксология
                    </Link>
                </GridItem>
                <GridItem>
                    <Link
                        variant="plain"
                        href="#"
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
  )
}

export default Header