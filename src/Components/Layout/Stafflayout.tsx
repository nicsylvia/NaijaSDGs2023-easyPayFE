import { Outlet } from "react-router-dom"
import { Staffdashboardhead, Staffsidebar } from ".."
import TabletHeader from "../blocks/staffDashbord/tabletHeader"
import {useLocation} from "react-router-dom"


const Stafflayout = () => {

  const location = useLocation()



  return (
    <div className="w-full min-h-screen flex  ">
      <div className="h-full sticky top-0 z-20">
     <Staffsidebar />
     <TabletHeader/>
     </div>

    <> 
   

<div className="w-full bg-slate-50">
{
   location.pathname.includes("payments") ? null : <Staffdashboardhead title={`${location.pathname.includes("staff/transactions") ? "Transaction History" : location.pathname.includes("staff/savings") ? "savings" : location.pathname.includes("staff/financials") ? "Financials": location.pathname.includes("staff/settings") ? "Settings" : "Dashboard"}`}/>
   }

<div className="w-full px-5 max-md:px-3 py-3 max-md:mb-16">
   <Outlet/>
</div>
 

</div>
    </>

    </div>
  )
}

export default Stafflayout