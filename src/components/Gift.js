import React, { useEffect, useState } from 'react';
import { extraerData } from '../helpers/extraerData';
import { GiftItem } from './GiftItem';


export const Gift = ({ category }) => {


    const [paginate, setPaginate] = useState(0)


    const [images, setImages] = useState([]);


    useEffect(() => {
        extraerData( category, paginate)
        .then(
             setImages
        )
    }, [category, paginate])


  
    const handleChangePagNext = () => {
        setPaginate(paginate + 1)
    }



    const handleChangePagPrevius = () => {

        if (paginate > 0) {
            setPaginate(paginate - 1)
        } else {
            alert('no puede retoceder mas atras')
        }

    }


    return (

        <div>
            <h3>{category}</h3>


            <div className=" container row mx-auto animate__animated animate__backInUp">

                {images.map((result) => {
                    return (
                        < GiftItem className="col-3 " key={result.id} img={result} />
                    )
                })}

            </div >
            <br />
            <br />
            <div className="row">
                <button className="btn col-4 mx-auto btn-primary " onClick={handleChangePagPrevius}> previus </button>
                <button className="btn col-4 mx-auto btn-primary" onClick={handleChangePagNext}> next</button>
            </div>
            <hr />

        </div>
    )
}
