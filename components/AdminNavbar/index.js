


import Link from 'next/link'
import Dialog from '../Dialog';



export default function AnalysistNavbar(){

    return(
        <div className="">
           <div className="">
              <div className="grid justify-center bg-slate-800 h-screen relative">
                
                  <div className=" mt-20">
                    <div className="flex justify-center">
                       <img className=" border-solid border-4 border-lime-500 rounded-full w-28 h-28 " src="/ww.jpg"/>
                    </div>
                    <div className="text-xl mt-8 mb-1  text-center text-white hover:text-lime-500 font-normal hover:font-bold cursor-pointer duration-100 transition ease-in-out delay-50  hover:-translate-y-1 ">
                       <h1 className="font-semibold ">Business Analysist</h1>
                    </div>
                    <div className="text-white text-xs mb-20 text-center font-Source Serif Pro underline decoration-white font-normal hover:font-bold">
                       <h1>Ажилтны дугаар: 0349</h1>
                    </div> 

                       <div className='mt-2'>
<<<<<<< HEAD
                        <Link href="/Admin">
                        <div className='flex justify-start cursor-pointer mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700'>
=======
                        <button className=' w-60  flex justify-start cursor-pointer  mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700  active:bg-slate-500 active:duration-75 focus:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600 '>
>>>>>>> a1387a6d8482b99ece9404f4a9bad54b7092da31
                            <div>
                         <img className="  w-6 h-6 "src='/user.png'></img>
                            </div> 
                            <div className='ml-4 mb-2 text-white'>
                                <h1 className='text-white'>Захиалгын мэдээлэл</h1>
                            </div>
<<<<<<< HEAD
                        </div>
                        </Link>
                        <Link href="/Admin">
                        <div className='flex justify-start cursor-pointer mt-2 p-1 mb-3 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700'>
=======
                        </button>
                        

                        <button className='w-60  flex justify-start cursor-pointer  mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700  active:bg-slate-500 active:duration-75 focus:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600 '>
>>>>>>> a1387a6d8482b99ece9404f4a9bad54b7092da31
                            <div>
                         <img className='w-6 h-6 'src='/f.png'></img>
                            </div> 
                           
                            <div className='ml-4 mb-2'>
                                <h1 className='text-white '>Зааварчилгаа</h1>
                            </div>
                            
<<<<<<< HEAD
                        </div>
                        </Link>
=======
                        </button>
>>>>>>> a1387a6d8482b99ece9404f4a9bad54b7092da31

                        <button className='w-60  flex justify-start cursor-pointer  mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700  active:bg-slate-500 active:duration-75 focus:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600'>
                       
                            <div>
                            <img className='w-6 h-6'src='/check-list.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                            <Link href="/Plan">
                                <h1 className='text-white'>Хэрэглэгч нэмэх</h1>
                               </Link>
                        </div>                           
            </button>
                        <button className='w-60  flex justify-start cursor-pointer  mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700  active:bg-slate-500 active:duration-75 focus:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600'>
                            <div>
                            <img className='w-6 h-6'src='/map.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
<<<<<<< HEAD
                                <h1 className='text-white'>Тайлан</h1>
                            </div>
                        </div>
=======
                                <h1 className='text-white'>Зааварчилгаа</h1>
                            </div>
                        </button>
                        
                        <button className='w-60  flex justify-start cursor-pointer  mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700  active:bg-slate-500 active:duration-75 focus:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600'>
                            <div>
                            <img className='w-6 h-6'src='/book.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                                <h1 className='text-white'>Тайлан</h1>
                            </div>
                        </button>
                        
                        <button className='w-60  flex justify-start cursor-pointer  mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700  active:bg-slate-500 active:duration-75 focus:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600'>
                            <div>
                            <img className='w-6 h-6'src='/notification-bell.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                                <h1 className='text-white'>Бүх мэдэгдэл</h1>
                            </div>
                        </button>

                        <button className='w-60  flex justify-start cursor-pointer  mt-2 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700  active:bg-slate-500 active:duration-75 focus:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600'>
                            <div>
                            <img className='w-6 h-6'src='/phone-call.png'></img>
                            </div> 
                            <div className='ml-4 mb-1 '>
                                <h1 className='text-white'>Холбоо барих</h1>
                            </div>
                        </button>
>>>>>>> a1387a6d8482b99ece9404f4a9bad54b7092da31

                        <button className='w-60  flex justify-start cursor-pointer  mt-20 mb-3 p-1 px-1 items-center rounded-md  duration-100  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700  active:bg-slate-500 active:duration-75 focus:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600'>
                            <div className=''>
                            <img className='w-6 h-6'src='/exit.png'></img>
                            </div> 
                            <div className='ml-4 '>
                                <h1 className='text-white'>Гарах</h1>
                            </div>

                        </button>
                        
                    </div>
                  </div>
              </div>
           </div>
        </div>
    )
}
