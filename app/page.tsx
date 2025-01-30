// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <div className="container mx-auto text-center">
//       <h1 className="text-4xl font-bold mb-6">Welcome to Clino</h1>
//       <p className="text-xl mb-8">Find hourly jobs for students in Ghanaian Universities</p>
//       <div className="space-x-4">
//         <Button asChild>
//           <Link href="/register">Register</Link>
//         </Button>
//         <Button asChild variant="outline">
//           <Link href="/login">Login</Link>
//         </Button>
//       </div>
//     </div>
//   )
// }


import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className=" text-center min-h-screen  bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.png')", // Replace with your image path
      }}
    ><div className="bg-[#002E5BE5] min-h-screen">
        <Header />
        <div className="justify-items-left ml-[80px]">

          <h1 className="text-left text-[50px] w-[600px] font-bold mb-6 text-white">Explore Open Career
            Opportunities
          </h1>

          <div className="flex">

            <input className="h-[50px] w-[600px] rounded-md p-2 m-2" type="search" placeholder="Find the job that best suits you" name=" " id="" />

          </div>

        </div>

        <div className="space-x-4">
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>


    </div>

  );
}
