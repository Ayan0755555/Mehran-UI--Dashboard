"use client"

import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/sidebar";

const Mobilesidebar = () => {
    return ( 
        <Sheet>
            <SheetTrigger>
        <Button variant='destructive' size='icon' className="md:hidden">
            <Menu/>
         </Button>
         </SheetTrigger>
         <SheetContent side='left' className="p-0">
           <SideBar/>
         </SheetContent>
         </Sheet>
     );
}
 
export default Mobilesidebar;