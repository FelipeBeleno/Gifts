import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { Gift } from './components/Gift';

export const GiftExpertApp = () => {





    const [categories, setCategories] = useState([]);



    return (
        <div className="container mt-5">
            <h1>Gift Expert App de Sergio Bernal</h1>




            <CategoryAdd setCategories={setCategories} />

            <hr />


            {
                categories.length === 0
                    ? <h1>Ingresa un valor</h1>
                    : <ul>
                        {categories.map(cat => <Gift key={cat} category={cat} />)}
                    </ul>
            }


        </div>
    )
}
