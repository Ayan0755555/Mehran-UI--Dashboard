"use client";

import { cn } from "@/lib/utils";
import { Code2, ImagesIcon, LayoutDashboard, MessageSquare, MessageSquareCode, Music, Music2, Settings2, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat=Montserrat({weight:"600",subsets:["latin"] 
})

const routes =  [
    {
        label:"Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label:"conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-green-500"
    },
    {
        label:"Image Genaration",
        icon: ImagesIcon,
        href: "/image",
        color: "text-pink-500"
    },
    {
        label:"Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-purple-500"
    },
    {
        label:"Music Generation",
        icon: Music2,
        href: "/music",
        color: "text-green-500"
    },
    {
        label:"Code Generation",
        icon: Code2,
        href: "/code",
        color: "text-orange-700"
    },
    {
        label:"Settings",
        icon: Settings2,
        href: "/settings",
        color: "text-yellow-500"
    },
]

const SideBar = () => {
    const pathname = usePathname
    return ( 
        <div className="spac-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
           <div className="px-3 py-2 flex-1">
            <Link href='/dashboard' className="flex items-center pl-3 mb-14">
           <div className="relative w-8 h-8 mr-4">
             <Image fill alt='logo'src='/logo.png'/>
           </div>
           <h1 className={cn("text-2xl font-bold" , montserrat.className)}>
            ASUSKAZ AI
           </h1>
            </Link>
            <div className="space-y-1">
              {routes.map((route)=>(
                 <Link
                 href={route.href}
                 key={route.href}
                 className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-black/100 rounded-lg transition",
                  pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
                 >
                    <div className="flex items-center flex-1">
                       <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                      {route.label}
                    </div>
                 
                 </Link>

              ))}
            </div>
           </div>
        </div>
     );
}
 
export default SideBar;