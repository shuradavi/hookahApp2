import { Grid, GridItem } from "@chakra-ui/react"
import CategoryNewsCard from './ui/CategoryNewsCard'


const News = () => {
  return (
      <Grid
          maxW={'1280px'}
          h={'100%'}
          gap={'30px'}
          alignItems={'center'}
          gridTemplateColumns={'repeat(3, 1fr)'}
          gridTemplateRows={'100%'}
      >
          <GridItem>
              <CategoryNewsCard text={'Производители табака'} path={'news/tobaccoCompanies'} />
          </GridItem>  
          <GridItem>
              <CategoryNewsCard text={'Кальяны и аксессуары'} path={'news/hookahManufacturers'} />
          </GridItem>
          <GridItem>
              <CategoryNewsCard text={'События'} path={'news/events'} />
          </GridItem>
    </Grid>
  )
};

export default News;
