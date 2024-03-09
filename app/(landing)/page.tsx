import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


const LandingPage = () => {
    return ( 
      
        <div>
          <Link href='/dashboard'>
          <h1>Landing Page</h1>
         
             </Link>
             <div>
           
       <UserButton/>

       <Link href='/dashboard'>
       <Button>Get started</Button>
       </Link>
       </div>
       </div>
     );
}
 
export default LandingPage;