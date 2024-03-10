import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
// import { Menu } from "lucide-react";
import Mobilesidebar from "@/components/mobile-sidebar";


const Navbar = () => {
    return ( 
        <div className="flex items-center p-4">
         <Button variant='destructive' size='icon' className="md:hidden">
            <Mobilesidebar/>
         </Button>
         <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/"/>
         </div>
        </div>
     );
}
 
export default Navbar;