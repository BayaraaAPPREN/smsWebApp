import AdminNavbar from "../../components/AdminNavbar";


export default function Order(){
    return(
        <div className="">
            <div className="grid grid-cols-6">
                <div className="grid col-span-1">
                    <AdminNavbar/>
                </div>
                <div className="grid col-span-4">
                    admin
                </div>
            </div>
        </div>
    )
}