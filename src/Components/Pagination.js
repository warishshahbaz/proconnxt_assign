import React from 'react'
import { useGlobalContext } from './ContextApi';

const Pagination = () => {
    const {showPerPage,totalPage,paginate} = useGlobalContext();
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPage / showPerPage); i++) {
        pageNumber.push(i);
    }
  return (
   <>
    <nav>
                <ul className=' d-flex justify-content-center'>
                    {pageNumber.map((number) => {
                     return  <li key={number} className='p-2 list-unstyled border-3 pagination_li'>
                            <a className="text-decoration-none border-1  " onClick={() => paginate(number)} >
                                {number}
                            </a>
                        </li>
                    })}
                   
                </ul>
            </nav>
   </>
  )
}

export default Pagination;