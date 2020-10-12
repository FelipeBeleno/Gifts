import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {




    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const formSubmit = (e) => {

        e.preventDefault();

        if(inputValue.trim().length >2){

            setCategories(cat => [inputValue, ...cat])
            setInputValue('')

        }else{
            alert('Error')

        }



    }


    return (
        <>

            <form onSubmit={formSubmit} className="form-group">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className="form-control"
                />
                <br />
                <br />

                <button className="btn btn-warning" type="submit"> Add Cartegory</button>
            </form>
        </>
    )
}

CategoryAdd.propTypes = {
    setCategories : PropTypes.func.isRequired
}