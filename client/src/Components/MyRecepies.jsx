import React from 'react'
import { projectIcons } from '../assets/icons'

function MyRecepies() {
    return (
        <div>
            <ul>
                <li className='flex border p-3 justify-between rounded-md cursor-pointer hover:bg-slate-50 my-4'>
                    <div className="myrecepie__info flex items-center">
                        <div className="myrecepie__img">
                            <div  className='h-[40px] w-[40px] bg-slate-400 rounded-full mr-3' ></div>
                        </div>
                        <div className="myrecepie__title">
                            <h1>recepie</h1>
                        </div>
                    </div>
                    <button className='px-3 py-2 bg-red-400 text-white rounded-md'>
                        Delete
                    </button>
                </li>
                <li className='flex border p-3 justify-between rounded-md cursor-pointer hover:bg-slate-50'>
                    <div className="myrecepie__info flex items-center">
                        <div className="myrecepie__img">
                            <div  className='h-[40px] w-[40px] bg-slate-400 rounded-full mr-3' ></div>
                        </div>
                        <div className="myrecepie__title">
                            <h1>recepie</h1>
                        </div>
                    </div>
                    <button className='px-3 py-2 bg-red-400 text-white rounded-md'>
                        Delete
                    </button>
                </li>
            </ul>






        </div>
    )
}

export default MyRecepies