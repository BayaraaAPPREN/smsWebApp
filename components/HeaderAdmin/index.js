import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'



export default function HeaderAdmin(){

    let [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }


    return(
        <div className="px-10 mt-4">
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" 
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0 ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-mono text-sm " 
                }
              >
                <input className="mx-10" type="date"/>
                <button className=" bg-blue-500 rounded-lg px-8 py-2 mr-4 text-slate-100 hover:bg-blue-400 hover:text-slate-700" onClick={openModal}>Батлах</button>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"s
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                   Та батлахдаа итгэлтэй байна уу ?
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                     Та хийсэн үйлдлээ сайтар нягталж байж хийнэ үү
                                    </p>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-lime-300 px-10 py-2 text-sm font-medium text-slate-700 hover:bg-lime-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                    >
                                    За
                                    </button>
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition>
                <button className="bg-blue-500 rounded-lg px-8 py-2 mr-2 text-slate-100 hover:bg-blue-400 hover:text-slate-700">Буцаах</button>
              </h3>
            </div>
            <div>
              <div>
              <div date-rangepicker class="flex items-center">
                <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                           <input name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
                        </div>
                <span class="mx-4 text-gray-500">to</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                       <input name="end" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
                    </div>
                    <div className="mx-4">
                        <button className="bg-slate-200 hover:bg-blue-300 rounded-lg px-4 py-1">Шүүх</button>
                    </div>
                    <div>
                    <button className="bg-green-900 hover:bg-green-700 rounded-lg px-4 py-1 border-2 border-green-200 text-white">Excel to file</button>
                    </div>
                </div>
              </div>
          </div>
          </div>
        </div>
            </div>
        </div>
    )
}