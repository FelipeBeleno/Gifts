import React from 'react'

export const GiftItem = ({ img }) => {


    const { title, url } = img;



    return (
        <div className="card">
            <img className="card-img-top img-thumbnail" style={{ width: '300px', height: '150px' }} src={url} alt={title}></img>
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    )
}
