import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


const DashboardPage = () => {
  return (
    <div>
      this is DashboardPage
     {/* <UserButton/> */}
     <div>
          <Link href='/'>
          <Button>Go to Home Page</Button>
         
             </Link>
             </div>
      
    </div>
  )
}

export default DashboardPage;

