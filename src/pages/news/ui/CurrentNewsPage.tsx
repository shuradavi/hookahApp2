// import React from "react"
// import NewsItemCard from "./CurrentNewsItem";
import { Button } from "@chakra-ui/react";


const CurrentNewsPage = () => {
    // const obj = {
    //     alt: 'nash-apple.jpg',
    //     cName: 'main-new',
    //     src: '../src/img/Nash-apple.jpg',
    //     text: 'Some text',
    // }
    // const obj2 = {
    //     alt: 'nash-apple.jpg',
    //     cName: 'item1',
    //     src: '../src/img/Nash-apple.jpg',
    //     text: 'Some text',
    // }
    // const obj3 = {
    //     alt: 'nash-apple.jpg',
    //     cName: 'item2',
    //     src: '../src/img/Nash-apple.jpg',
    //     text: 'Some text',
    // }
    // const obj4 = {
    //     alt: 'nash-apple.jpg',
    //     cName: 'item3',
    //     src: '../src/img/Nash-apple.jpg',
    //     text: 'Some text',
    // }
    // const obj5 = {
    //     alt: 'nash-apple.jpg',
    //     cName: 'item4',
    //     src: '../src/img/Nash-apple.jpg',
    //     text: 'Some text',
    // }


    return (
        <div className="news-grid-wrapper">
            {/* <NewsItemCard content={obj}/>
            <NewsItemCard content={obj2}/>
            <NewsItemCard content={obj3}/>
            <NewsItemCard content={obj4}/>
            <NewsItemCard content={obj5}/> */}
            <div className="item5">
            <Button colorPalette="teal" variant="solid">
                <span style={{fontWeight: '700'}}>Больше новостей</span>
            </Button>
            </div>
        </div>
  )
};

export default CurrentNewsPage;
