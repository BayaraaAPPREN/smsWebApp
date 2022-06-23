
import CustomNav from "../../components/CustomNav";
import Dashboard from "../../components/Dashboard";
import Dashboard1 from "../../components/Dashboard/dashboard1";
import Dashboard2 from "../../components/Dashboard/dashboard2";
import Dashboard3 from "../../components/Dashboard/dashboard3";
import HeaderCustom from "../../components/HeaderCustom";
import CardTable from "../../components/Table"; 


export default function Customer(){
    return(
        <div className="">
            <div className="grid grid-cols-6">
                <div className="grid col-span-1">
                    <CustomNav/>
                </div>
                <div className="grid col-span-5 bg-slate-200">
                        <div className="w-full overflow-x-auto">
                            <div className="flex flex-wrap justify-center">
                               <Dashboard/>
                               <Dashboard1/>
                               <Dashboard2/>
                               <Dashboard3/>
                            </div>
                          <HeaderCustom/>
                          <CardTable/>
                        </div>
                </div>
            </div>
        </div>
    )
}