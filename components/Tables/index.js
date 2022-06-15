import Dialog from "../Dialog/test";


export default function Tables(){
    return(
        <div className="rounded-lg bg-white mx-10">
            <div>
                <div className="py-4 ">
                    <div className="inline-block">
                        <div className="flex">
                           <h1 className="mt-4 ml-10">Card Tables</h1>
                           <div className="">
                             <Dialog/>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 py-2 ">
                    <h1 className="ml-8 uppercase">Жагсаалт</h1>
                </div>
            </div>
        </div>
    )
}