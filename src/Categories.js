import React from 'react';

const Categories = ({filterItems, cag}) => {
   
  return (
    <div className='btn-container'>
       {
           cag.map((item, index) =>{
               return(
                <button key={index} type='button' className='filter-btn' onClick={() => filterItems(item)}>{item}</button>
               )
           })
       }
    </div>
  );
};

export default Categories;
