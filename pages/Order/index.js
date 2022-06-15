import AdminNavbar from "../../components/AdminNavbar";
import HeaderAdmin from "../../components/HeaderAdmin";
import Tables from "../../components/Tables";


export default function Order(){
    return(
        <div className="">
            <div className="grid grid-cols-6">
                <div className="grid col-span-1">
                    <AdminNavbar/>
                </div>
                <div className="grid col-span-5 bg-slate-200">
                    <div>
                        <HeaderAdmin/>
                        <Tables/>
                    </div>
                </div>
            </div>
        </div>
    )
}