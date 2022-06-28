

import Head from 'next/head'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Input, Button } from "@material-tailwind/react";
import { createContext, useContext } from 'react';


 const AppContext = createContext();

 export function Loginn({ children }) {
  const router = useRouter()  
  let [isOpen, setIsOpen] = useState(true)
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);
  const [myid, setMyId ]  = useState('');
  
  
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
            email: email,
            password: password,
       })
      });
      return response.json(); 
    }
   


   async function Login (){
      postData('http://localhost:8080/hello/login', { answer: 42 })
      .then(data => {
          setMyId(data.id);
          if(data.type == 3 ){
            router.push(`/Admin/`+ data.id)
          } else if(data.type == 1){
            router.push("/Test")
          } else {
            alert("Таны нэвтрэх мэдээлэл буруу байна.")
            router.push("/")
          }
      });
    }


  function closeModal() {
    setIsOpen(true)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div >
      <Head>
        <title>Sms app </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo/logo.webp" />
      </Head>
          <AppContext.Provider value={myid}>
             {children}
          </AppContext.Provider>
       {/* <Login/> */}
            <div className='bg-back bg-cover bg-center h-screen'>
                  <div className="fixed inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Нэвтрэх
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
                          className="mt-8 text-xl font-bold leading-6 text-gray-900 text-center uppercase"
                        >
                         Нэвтрэх
                        </Dialog.Title>
                        <div className="mt-12 px-16">
                          <Input label="Нэвтрэх нэр" type="text" success size="md" className='px-6' 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mt-6 px-16">
                          <Input label="Нууц үг" success size="md" type="password" className='px-6' 
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className='ml-16 mt-2 mb-10 '>
                          <h1 className='text-xs hover:border-b hover:border-blue-500 w-28 transition delay-75 text-blue-500 cursor-pointer'>Нууц үг мартсан ?</h1>
                        </div>

                        <div className="mt-4 flex justify-center mb-10">
                          <Button className='px-24' color="green" onClick={Login} >НЭВТРЭХ</Button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
       </div>
    </div>
  )
}
export default Loginn

export function useAppContext() {
  return useContext(AppContext);
}
