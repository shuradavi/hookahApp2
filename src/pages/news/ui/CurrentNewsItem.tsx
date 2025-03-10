// import React, { ReactNode } from "react"
import { Card, Image, Link, LinkBox } from "@chakra-ui/react"

interface NewCardProp {
    content: {
        src: string
        alt: string
        cName: string
        text: string
    }
}

const CurrentNewsItem = (prop: NewCardProp) => {
    const { text, src, alt, cName } = prop.content
    console.log(prop.content );
    
  return (
    <LinkBox as='article' className={cName}>
          <Link href={'#'}
              h={'100%'}
          >
              <Card.Root overflow="hidden"
                  h={'100%'}
              >
                <Image
                    src={src}
                    alt={alt}
                />
                <Card.Footer display={'flex'} justifyContent={'center'} p={'10px 0 10px 0'}>
                    <span style={{alignSelf: 'center'}}>
                          <p>{text}</p>
                    </span>
                </Card.Footer>
            </Card.Root>
            </Link>   
        </LinkBox>
  )
};

export default CurrentNewsItem;
