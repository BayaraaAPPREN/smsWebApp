
import { GrCircleInformation, GrDocumentText } from 'react-icons/gr';
import {BsBookmarkPlus} from 'react-icons/bs'
import {BiHelpCircle, BiExit} from 'react-icons/bi'
import {FaPhoneAlt} from 'react-icons/fa'
import Link from 'next/link'
import Dialog from '../Dialog';
export default function AdminNavbar(){
    return(
        <div className="">
           <div className="">
              <div className="grid justify-center bg-white h-screen">
                  <div className=" mt-10">
                    <div className="flex justify-center">
                       <img className="rounded-full w-28 h-28" src="/pro.jpg"/>
                    </div>
                    <div className="text-xl mt-4 mb-2 text-center text-slate-700">
                       <h1>Хэрэглэгчийн нэр</h1>
                    </div>
                    <div className="text-slate-600 text-xs text-center">
                       <h1>Хэрэглэгчийн дугаар: 0021</h1>
                    </div>
                    <div className='mt-8'>
                        <div className='flex justify-start cursor-pointer'>
                            <div>
                                <GrCircleInformation size={25}/>
                            </div> 
                            <div className='ml-4'>
                                <h1>Захиалга</h1>
                            </div>
                        </div>

                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                                <GrDocumentText size={25}/>
                            </div> 
                            <Link href="/Plan">
                            <div className='ml-4'>
                                <h1>Төлөвлөгөө</h1>
                            </div>
                            </Link>
                        </div>

                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                                <BsBookmarkPlus size={25}/>
                            </div> 
                            <div className='ml-4'>
                                <h1>Заааварчилгаа</h1>
                            </div>
                        </div>

                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                                <BiHelpCircle size={25}/>
                            </div> 
                            <div className='ml-4'>
                                <h1>Тайлан</h1>
                            </div>
                        </div>

                        <div className='flex justify-center  cursor-pointer mt-20'>
                            <div className=''>
                                <BiExit size={25}/>
                            </div> 
                            <div className='ml-4'>
                                <h1>Гарах</h1>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
           </div>
        </div>
    )
}