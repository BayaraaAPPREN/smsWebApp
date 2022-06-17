import AdminNavbar from "../../components/AdminNavbar";
import HeaderAdmin from "../../components/HeaderAdmin";
import CardTable from "../../components/Table";


export default function Plan(){
    return(
        <div className="">
            <div className="grid grid-cols-6">
                <div className="grid col-span-1">
                    <AdminNavbar/>
                </div>
                <div className="grid col-span-5 bg-slate-200">
                        <div className="w-full overflow-x-auto">
                        <HeaderAdmin/>
                          <CardTable/>
                        </div>
                </div>
            </div>
        </div>
    )
}