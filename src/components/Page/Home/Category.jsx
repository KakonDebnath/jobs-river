import React, { useEffect, useState } from 'react';
const Category = () => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch("category.json")
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [])

    return (
        <div className='md:mx-72 p-10 md:py-32 space-y-7'>
            <h2 className='text-dark-1 text-3xl md:text-5xl text-center font-bold'>Jobs Category List</h2>
            <p className='text-dark-3 mb-8 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6'>
                {
                    categoryData.map(category => 
                    <div key={category?.id} className='rounded-lg shadow-lg p-10 space-y-2 transition-all duration-300 relative top-0 hover:-top-3 '>

                            <img className='bg-my-color-2 bg-opacity-20 w-20 py-3 px-4 rounded-lg' src={category?.picture} alt="" />

                        <h2 className='text-dark-2 text-xl'>{category?.name}</h2>
                        <p className='text-dark-4'>300 Jobs Available</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Category;