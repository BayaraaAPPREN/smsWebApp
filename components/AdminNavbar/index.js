
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
                    <div className="text-xl mt-4 mb-2 text-center text-white">
                       <h1>Хэрэглэгчийн нэр</h1>
                    </div>
                    <div className="text-white text-xs text-center">
                       <h1>Хэрэглэгчийн дугаар: 0021</h1>
                    </div>
                    <div className='mt-2'>
                        <div className='flex justify-start cursor-pointer'>
                            <div>
                                <GrCircleInformation size={25}/>
                            </div> 
                            <div className='ml-4'>
                                <h1>Хувийн мэдээлэл</h1>
                            </div>
                        </div>

                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                                <GrDocumentText size={25}/>
                            </div> 
                            <Link href="/Order">
                            <div className='ml-4'>
                                <h1>Захиалгын жагсаалт</h1>
                            </div>
                            </Link>
                        </div>

                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                                <BsBookmarkPlus size={25}/>
                            </div> 
                            <div className='ml-4'>
                                <h1>Захиалгын хуудас</h1>
                            </div>
                        </div>

                        <div className='flex justify-start cursor-pointer mt-4'>
                            <div>
                                <BiHelpCircle size={25}/>
                            </div> 
                            <div className='ml-4'>
                                <h1>Тусламж</h1>
                            </div>
                        </div>

                        <div className='flex justify-start cursor-pointer  mt-4'>
                            <div>
                                <FaPhoneAlt size={25}/>
                            </div> 
                            <div className='ml-4'>
                                <h1>Холбоо барих</h1>
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