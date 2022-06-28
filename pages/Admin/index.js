import AdminNavbar from "../../components/AdminNavbar";
import Dashboard from "../../components/Dashboard";
import Dashboard1 from "../../components/Dashboard/dashboard1";
import Dashboard2 from "../../components/Dashboard/dashboard2";
import Dashboard3 from "../../components/Dashboard/dashboard3";
import HeaderAdmin from "../../components/HeaderAdmin";
import CardTable from "../../components/Table"; 
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";



export default function Admin(){
    const router = useRouter();
    // const [mydata, setMyData] = useState([])
    // const { id } = router.query;
    // useEffect(() => {
    //     if(id){
    //         axios
    //         .get("http://localhost:8080/hello/" + id)
    //         .then((response) => {
    //             setMyData(response.data);
    //         });
    //     }
    //     else{
    //         router.push("/")
    //     }
    // })
    return(
        <div className="">
            <div className="grid grid-cols-6">
                <div className="grid col-span-1">
                    <AdminNavbar/>
                </div>
                <div className="grid col-span-5 bg-grey-200">
                        <div className="w-full overflow-x-auto">
                            <div className="flex flex-wrap justify-center">
                               <Dashboard/>
                               <Dashboard1/>
                               <Dashboard2/>
                               <Dashboard3/>
                            </div>
                          <HeaderAdmin/>
                          <CardTable/>
                        </div>
                </div>
            </div>
        </div>
    )
}