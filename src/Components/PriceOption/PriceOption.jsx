import React from 'react';
import Features from '../Fearures/Features';

const PriceOption = ({option}) => {


    const {name, price, features} = option;
    return (
        <div className='flex flex-col bg-white text-black rounded-md p-4'>
            <h2>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                features.map(feature =><Features feature={feature}></Features>)
            }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:'>Buy Now</button>
        </div>
    );
};

export default PriceOption;