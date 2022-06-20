
import { GrCircleInformation, GrDocumentText } from 'react-icons/gr';
import {BsBookmarkPlus} from 'react-icons/bs'
import {BiHelpCircle, BiExit} from 'react-icons/bi'
import {FaPhoneAlt} from 'react-icons/fa'
import Link from 'next/link'
import Dialog from '../Dialog';
export default function AnalysistNavbar(){
    return(
        <div className="">
           <div className="">
              <div className="grid justify-center bg-slate-800 h-screen">
                  <div className=" mt-20">
                    <div className="flex justify-center">
                       <img className=" border-solid border-4 border-lime-500 rounded-full w-28 h-28 " src="/ww.jpg"/>
                    </div>
                    <div className="text-xl mt-6 mb-1  text-center text-white hover:text-lime-500 font-normal hover:font-bold">
                       <h1 class="font-semibold ">Business Analysist</h1>
                    </div>
                    <div className="text-white text-xs mb-20 text-center font-Source Serif Pro underline decoration-white font-normal hover:font-bold">
                       <h1>Ажилтны дугаар: 0349</h1>
                    </div>
                    <div className='mt-2 '>
                        <div className='flex justify-start cursor-pointer hover:bg-slate-700 rounded-md pr-8 '>
                            <div>
                         <img className="  w-6 h-6 "src='/user.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                                <h1 className='text-white'>Хувийн мэдээлэл</h1>
                            </div>
                        </div>

                        <div className='flex justify-start cursor-pointer mt-4 '>
                            <div>
                         <img className='w-6 h-6 'src='/f.png'></img>
                            </div> 
                           
                            <div className='ml-4 mb-2'>
                                <h1 className='text-white '>Захиалгын хянах</h1>
                            </div>
                            
                        </div>

                        <div className='flex justify-start cursor-pointer mt-4'>
                       
                            <div>
                            <img className='w-6 h-6'src='/check-list.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                            <Link href="/Plan">
                                <h1 className='text-white font-normal hover:font-bold'>Төлөвлөгөө</h1>
                               </Link>
                        </div>                           
            </div>
                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                            <img className='w-6 h-6'src='/map.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                                <h1 className=' text-white'>Зааварчилгаа</h1>
                            </div>
                        </div>
                        
                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                            <img className='w-6 h-6'src='/book.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                                <h1 className='text-white'>Тайлан</h1>
                            </div>
                        </div>
                        
                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                            <img className='w-6 h-6'src='/notification-bell.png'></img>
                            </div> 
                            <div className='ml-4 mb-2'>
                                <h1 className='text-white'>Бүх мэдэгдэл</h1>
                            </div>
                        </div>

                        <div className='flex justify-start cursor-pointer  mt-4'>
                            <div>
                            <img className='w-6 h-6'src='/phone-call.png'></img>
                            </div> 
                            <div className='ml-4 mb-8'>
                                <h1 className='text-white'>Холбоо барих</h1>
                            </div>
                        </div>

                        <div className='flex justify-center  cursor-pointer mt-10'>
                            <div className=''>
                            <img className='w-6 h-6'src='/exit.png'></img>
                            </div> 
                            <div className='ml-4'>
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

