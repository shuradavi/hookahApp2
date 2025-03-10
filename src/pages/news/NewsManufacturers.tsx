import React from "react"
import { Button } from "@chakra-ui/react";
import {CurrentNewsItem} from './index'

const NewsManufacturers = () => {
    const obj = {
        alt: 'nash-apple.jpg',
        cName: 'main-new',
        src: '../src/img/Nash-apple.jpg',
        text: 'Some text',
    }
    const obj2 = {
        alt: 'nash-apple.jpg',
        cName: 'item1',
        src: '../src/img/Nash-apple.jpg',
        text: 'Some text',
    }
    const obj3 = {
        alt: 'nash-apple.jpg',
        cName: 'item2',
        src: '../src/img/Nash-apple.jpg',
        text: 'Some text',
    }
    const obj4 = {
        alt: 'nash-apple.jpg',
        cName: 'item3',
        src: '../src/img/Nash-apple.jpg',
        text: 'Some text',
    }
    const obj5 = {
        alt: 'nash-apple.jpg',
        cName: 'item4',
        src: '../src/img/Nash-apple.jpg',
        text: 'Some text',
    }
    const data = [obj, obj2, obj3, obj4, obj5]

    return (
        <div className="news-grid-wrapper">
            {/* {data.forEach(obj => <CurrentNewsItem content={obj} />)} */}
            {/* <CurrentNewsItem content={obj}/>
            <CurrentNewsItem content={obj2}/>
            <CurrentNewsItem content={obj3}/>
            <CurrentNewsItem content={obj4}/>
            <CurrentNewsItem content={obj5}/> */}
            <div className="item5">
            <Button colorPalette="teal" variant="solid">
                <span style={{fontWeight: '700'}}>Больше новостей</span>
            </Button>
            </div>
        </div>
  )
};

export default NewsManufacturers;
