import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Calendar from './calendar'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)


  const [order, setOrder] = useState({ code: "", type: "", number: "", text: "", date: "", time: "", textaera: ""});
  const [ text, setText ] = useState('')
  const [ textaera, setTextaera ] = useState('255')
  console.log(order)

  // function Submit(){
  //   if()
  // }

  function TextConnect (e){
    const a = 1
    const b = text
    let len = e.target.value.length
    setText(e.target.value)
    setTextaera(255 - len )
    if(textaera == 0){
      alert("Дүүрсэн")
    }
  }
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex justify-end ml-40">
        <button
          type="button"
          onClick={openModal}
          className="bg-lime-500 rounded-lg py-2 px-8 text-white hover:bg-lime-700 cursor-pointer modal-button"
        >
          Захиалга өгөх
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" xs:w-full md:w-1/2 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-10"
                  >
                    Захиалгын хүсэлт
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className='mx-10'>
                        <div className='flex justify-start items-center'>
                            <h1 className='w-40'>Нөхцлийн код :</h1>
                            <select className='bg-lime-200 px-4 rounded-lg py-1 mx-10  '
                              value={order.code}
                              onChange={ e => setOrder({...order, code:e.target.value})}
                            > 
                                <option value="0" className=''selected>Сонгох</option>
                                <option value="Нөхцөлтэй">Нөхцөлтэй</option>
                                <option value="Нөхцөлгүй">Нөхцөлгүй</option>
                            </select>
                            <input className='w-10 bg-lime-200 border placeholder:text-center mr-2' placeholder='../..'/>
                            <input className='w-10 bg-lime-200 border placeholder:text-center' placeholder='../..'/>
                            <h1 className='text-xs text-blue-600 cursor-pointer mx-2'>Заавар</h1>
                        </div>
                        <div className='mt-4 flex justify-start items-center    '>
                            <h1 className='w-40'>Төрөл :</h1>
                            <select className='bg-lime-200 px-4 rounded-lg py-1 mx-10'
                             value={order.type}
                             onChange={ e => setOrder({...order, type:e.target.value})}
                            > 
                                <option value="0" selected>Сонгох</option>
                                <option value="Unitel">Unitel</option>
                                <option value="Toki">Toki</option>
                                <option value="Univision">Univision</option>
                                <option value="Voice BC">Voice BC</option>
                                <option value="Other operator">Other operator</option>
                            </select>
                            <h1 className='text-xs text-blue-600 cursor-pointer'>Заавар</h1>
                        </div>
                        <div className='mt-4 flex justify-start items-center'>
                            <h1 className='w-40'>Тусгай дугаар :</h1>
                            <input className='bg-lime-200 px-2 rounded-lg py-1 mx-10' type="number"
                            value={order.number}
                            onChange={ e => setOrder({...order, number:e.target.value})}
                            />
                            <h1 className='text-xs text-blue-600 cursor-pointer'>Заавар</h1>
                        </div>
                        <div className='mt-4 flex justify-start items-center    '>
                            <h1 className='w-42'>Сегментийн шалгуур :</h1>
                            <select className='bg-lime-200 px-4 rounded-lg py-1 mx-10'> 
                                <option>Сонгох</option>
                                <option>Сонгох</option>
                                <option>Сонгох</option>
                                <option>Сонгох</option>
                            </select>
                            <h1 className='text-xs text-blue-600 cursor-pointer'>Заавар</h1>
                        </div>
                        <div className='mt-4 flex justify-start items-center'>
                            <h1 className='w-40'>Текст :</h1>
                            <textarea className='bg-lime-200 mx-10 rounded-lg px-10'
                            value={order.textaera}
                            onChange={ e => setOrder({...order, type:e.target.value})}
                            />
                            <h1 className='text-xs text-blue-600 cursor-pointer'>Заавар</h1>
                        </div>
                        <div className='mt-4 flex justify-start items-center    '>
                            <h1 className='w-40'>Огноо :</h1>
                            <input className='bg-lime-200 rounded-lg py-2 px-4 mx-10' type="date"
                             value={order.date}
                             onChange={ e => setOrder({...order, date:e.target.value})}
                            />
                            <h1 className='text-xs text-blue-600 cursor-pointer mr-4'>Заавар</h1>
                            <input className=' w-6  h-6 mr-2' type="checkbox"/>
                            <input className='bg-lime-200 rounded-lg py-2 px-4 ' type="time"
                             value={order.time}
                             onChange={ e => setOrder({...order, time:e.target.value})}
                            />
                            <h1 className='text-xs text-blue-600 cursor-pointer'>Заавар</h1>
                        </div>
                        <div className='mt-4 flex justify-start items-center'>
                            <h1 className='w-40'>Нэмэлт тайлбар :</h1>
                            <textarea  className='bg-lime-200 mx-10 rounded-lg px-10'
                               value={text}
                               onChange={TextConnect}
                            >
                            </textarea>
                            <h1 className='text-xs text-blue-600 cursor-pointer'>Заавар</h1>
                        </div>
                        <div className=' flex justify-center mr-40'>
                          <h1 className=' text-center text-xs mt-2 mr-4'>Бичих боломжтой утгын тоо </h1>
                           <h1 className=' text-center text-xs mt-2 text-red-400'> {textaera}</h1>
                        </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end mx-20">
                    <button
                      onClick={closeModal}
                      className="bg-gray-700 hover:bg-gray-500 text-white rounded-lg px-4 py-2"
                    >
                      Хаах
                    </button>
                     
                    <button
                      onClick={closeModal}
                      className="bg-blue-700 hover:bg-blue-500 text-white rounded-lg px-4 py-2 ml-16"
                    >
                      Хадгалах
                    </button>

                    <button
                      onClick={closeModal}
                      className="bg-blue-700 hover:bg-blue-500 text-white rounded-lg px-4 py-2 mx-2"
                    >
                      Захиалга илгээх
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
