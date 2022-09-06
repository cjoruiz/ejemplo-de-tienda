import React from 'react';
import '../styles/NotFound.scss';

const NotFound=()=>{
    return(
        <div className='draw-container'>
            <p className='draw-p'>NotFound, ERROR 404,</p>
            <div className='draw-not-found'>
                <div className='draw-eye eye1'>
                    <div className='pupila'></div>
                </div>
                <div className='draw-eye eye2'>
                    <div className='pupila'></div>
                </div>
                <div className='draw-mouth'></div>
            </div>

        </div>
    );
}

export default NotFound;