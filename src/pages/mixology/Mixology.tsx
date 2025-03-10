import React, { useEffect, useState} from 'react';
// import { getMixesCategory } from './api/API'
// import  Mixes  from '../../entities/mixes/ui/Mixes';

interface ListOfMixes {
    ingredients: []
    category: []
    taste: []
}

const Mixology = () => { 
    const [listOfMixes, setListOfMixes] = useState<ListOfMixes[]>([])
    const URL = 'http://localhost:4002/'
    const getMixes = () => {
        const mixes:[] = []
        fetch(`${URL}mixes`)
            .then((response) => {
                // console.log('response: ', response);
                return response.json()
            })
            .then((json) => {
                json.forEach((m) => {
                    mixes.push(m)
                })
                setListOfMixes(mixes)
            })
            // console.log('data: ', mixes);
            }
    //    getMixes()
    useEffect(() => {
        getMixes()
    }, [])
       
    
  return (
    <div>
          Миксология
          <div></div>
    </div>
  )
};

export default Mixology;
