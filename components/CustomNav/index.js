


import Link from 'next/link'
import axios from "axios";
import Dialog from '../Dialog';
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useAppContext } from '../../pages/context';


export default function CustomNav(){
    const mycontext = useAppContext();
    const [mydata, setData] =  useState([]);
    const [cookie, setCookie] = useCookies(["user"]);
    const id = cookie.id

    useEffect(() => {
            axios.get('http://localhost:8080/hello/user/' + id)
            .then(response => {
                setData(response.data)
              });
    })

    return(
        <div className="">
           <div className="">
              <div className="grid justify-center bg-slate-800 h-screen relative">
                <img src='/lefta.png' className='absolute cursor-pointer rounded-full top-7 left-60  border-2 border-slate-800  w-9 h-9'></img>
                  <div className=" mt-20">
                    <div className="flex justify-center">
                       <img className=" border-solid border-4 border-lime-500 rounded-full w-28 h-28 " src="/ww.jpg"/>
                    </div>
                    <div className="text-xl mt-8 mb-1  text-center text-white hover:text-lime-500 font-normal hover:font-bold cursor-pointer duration-100 transition ease-in-out delay-50  hover:-translate-y-1 ">
                       <h1 className="font-semibold ">{mydata.username}</h1>
                    </div>
                    <div className="text-white text-xs mb-4 text-center font-Source Serif Pro underline decoration-white font-normal hover:font-bold">
                       <h1>{mydata.email}</h1>
                    </div>
                    <div className="text-white flex justify-center">
                        <h1>ID: </h1>
                       <h1>{mydata.id}</h1>
                    </div>
                       
                       <div className='mt-2'>
                       <Link href="/Customer">
                        <div className='flex justify-start cursor-pointer mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700'>
                            <div>
                         <img className="  w-6 h-6 "src='/user.png'></img>
                            </div> 
                            <div className='ml-4 mb-2 text-white'>
                                <h1 className='text-white'>Захиалгын мэдээлэл</h1>
                            </div>
                        </div>
                        </Link>

                        <Link href="/Instructions">
                        <div className='flex justify-start cursor-pointer mt-2 p-1 mb-3 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700'>
                            <div>
                         <img className='w-6 h-6 'src='/f.png'></img>
                            </div> 
                           
                            <div className='ml-4 mb-2'>
                                <h1 className='text-white '>Зааварчилгаа</h1>
                            </div>
                            
                        </div>
                        </Link>
                           <Link href="/Plan">
                        <div className='flex justify-start cursor-pointer mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700'>
                            <div>
                            <img className='w-6 h-6'src='/check-list.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                            
                                <h1 className='text-white'>Тайлан</h1>
                            </div>                           
                            </div>
                            </Link>
                            <Link href="/Contactus">
                                <div className='flex justify-start cursor-pointer mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700'>
                                    <div>
                                    <img className='w-6 h-6'src='/phone-call.png'></img>
                                    </div> 
                                    <div className='ml-4 mb-1 '>
                                        <h1 className='text-white'>Холбоо барих</h1>
                                    </div>
                                </div>
                            </Link>

                        <div className='flex justify-start cursor-pointer mt-20 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700'>
                            <div className=''>
                            <img className='w-6 h-6'src='/exit.png'></img>
                            </div> 
                            <div className='ml-4 '>
                                <h1 className='text-white'>Гарах</h1>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
           </div>
        </div>
    )
}
