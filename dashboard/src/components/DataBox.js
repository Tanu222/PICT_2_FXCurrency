import React from 'react';
import '../css/DataBox.css';
const DataBox = ({title,price,color,date}) => {
    return(
        <div className='data-box m-3 col-3'>
            <div className='p-3' style={{backgroundColor:color}}>
            <div className='title mt-3'>{title}</div>
            <div className='price'>
                <span>${price}</span>.00
            </div>
                <div className='date'>{date}</div>
            </div>
        </div>
    )
}

export default DataBox;