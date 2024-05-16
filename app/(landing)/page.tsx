import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


const LandingPage = () => {
    return ( 
      
        <div>
          <Link href='/dashboard'>
          <div className="bg-gradient-to-b from-yellow-900 via-yellow-700 to-yellow-500 px-6 sm:py-20 py-10 font-[sans-serif]">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-4">Welcome to Our Premium Service</h1>
        <p className="text-lg mb-8">Experience excellence like never before with our exclusive products and services.</p>
       <div>
       <Link href='/dashboard'>
        <Button type="button" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-semibold px-8 py-2 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</Button>
       </Link>
        </div>
      </div>
    </div>
         
             </Link>
             <div>
           
       <UserButton/>
       </div>
       </div>
     );
}
 
export default LandingPage;