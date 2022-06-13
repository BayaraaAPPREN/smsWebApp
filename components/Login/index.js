
import { useRouter } from 'next/router'

export default function Login(){
    const router = useRouter()
    function Login(){
        router.push("/Admin")
    }

    return(
        <div>
             <div className="grid grid-cols-6">
              <div className="grid col-span-4 ">
                 <div className=" h-screen bg-[url('/loginback.jpeg')]">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h1 className="text-5xl font-sans text-white">З</h1>
                            </div>
                        </div>
                 </div>
             </div>

                 <div className="grid col-span-2">
                 <div className="">
                    <div className="mt-10">
                         <img className="px-20 py-4" src="/logo/uni.png"/>
                         <div>
                            <h1 className="text-center mt-10 text-3xl mb-20 font-roboto">Нэвтрэх</h1>
                            <div className="px-10 flex justify-cente">
                                <input className="bg-gray-50 border px-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                placeholder="Нэвтрэх нэр"/>
                            </div>
                            <div className="flex justify-center px-10 mt-5">
                                <input className="bg-gray-50 border px-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                placeholder="Нууц үг"/>
                            </div>
                            <div className="px-12 mt-2">
                               <h1 className="text-xs text-blue-500 cursor-pointer">Та нууц үгээ мартсан уу ?</h1>
                            </div>
                            <div className="flex justify-center mt-10 px-10">
                                <button className="bg-lime-500 px-40 text-white hover:bg-lime-600 font-roboto py-2 rounded-lg" onClick={Login}>Нэвтрэх</button>
                            </div>
                         </div>
                     </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}