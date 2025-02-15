// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";

// export default function Home() {
//   return (
//     <div
//       className=" text-center min-h-screen  bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/bg.png')", // Replace with your image path
//       }}
//     ><div className="bg-[#002E5BE5] min-h-screen">
//         <Header />
//         <div className="justify-items-left ml-[80px]">

//           <h1 className="text-left text-[50px] w-[600px] font-bold mb-6 text-white">Explore Open Career
//             Opportunities
//           </h1>

//           <div className="flex">

//             <input className="h-[50px] w-[600px] rounded-md p-2 m-2" type="search" placeholder="Find the job that best suits you" name=" " id="" />

//           </div>

//         </div>

//         <div className="space-x-4">
//           <Button asChild>
//             <Link href="/register">Register</Link>
//           </Button>
//           <Button asChild variant="outline">
//             <Link href="/login">Login</Link>
//           </Button>
//         </div>
//       </div>


//     </div>

//   );
// }
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  const jobs = [
    { title: "Software Engineer", type: "Tech & Engineering", time: "Full Time", location: "Accra", image: "/job1.png" },
    { title: "Sales Executive", type: "Sales", time: "Part Time", location: "Kumasi", image: "/job2.png" },
    { title: "HR Manager", type: "People & HR", time: "Full Time", location: "Tamale", image: "/job3.png" },
  ];

  const categories = [
    { name: "Engineering", image: "/team1.png", description: "Build innovative solutions." },
    { name: "Marketing", image: "/team2.png", description: "Drive business growth." },
    { name: "Design", image: "/team3.png", description: "Create stunning visuals." },
  ];

  const locations = [
    { city: "Accra", image: "/accra.png", jobs: "120+ Jobs" },
    { city: "Kumasi", image: "/kumasi.png", jobs: "80+ Jobs" },
    { city: "Tamale", image: "/tamale.png", jobs: "50+ Jobs" },
    { city: "Takoradi", image: "/takoradi.png", jobs: "30+ Jobs" },
  ];

  return (
    <div className="text-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="bg-[#002E5BE5] min-h-screen">
        <Header />
        <div className="ml-[80px]">
          <h1 className="text-left text-[50px] w-[600px] font-bold mb-6 text-white border-b-4 border-blue-500 inline-block">Explore Open Career Opportunities</h1>
          <div className="flex">
            <input className="h-[50px] w-[600px] rounded-md p-2 m-2" type="search" placeholder="Find the job that best suits you" />
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
        
        {/* Featured Jobs */}
        <div className="p-10">
          <h1 className="text-[40px] font-bold border-b-4 border-blue-500 inline-block">Latest Featured Jobs</h1>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {jobs.map((job, index) => (
              <div key={index} className="p-4 shadow-lg rounded-md bg-white">
                <img src={job.image} alt={job.title} className="w-full h-[200px] object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-4">{job.title}</h2>
                <p className="text-gray-600">{job.type}</p>
                <div className="flex items-center gap-4 text-gray-500 mt-2">
                  <FaClock /> {job.time} <FaMapMarkerAlt /> {job.location}
                </div>
                <Button className="mt-4 bg-blue-600 text-white">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>

        {/* Find Your Team */}
        <div className="p-10">
          <h1 className="text-[40px] font-bold border-b-4 border-blue-500 inline-block">Find Your Team</h1>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {categories.map((team, index) => (
              <div key={index} className="p-4 shadow-lg rounded-md bg-white">
                <img src={team.image} alt={team.name} className="w-full h-[200px] object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-4">{team.name}</h2>
                <p className="text-gray-600">{team.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Locations */}
        <div className="p-10">
          <h1 className="text-[40px] font-bold border-b-4 border-blue-500 inline-block">Explore Locations</h1>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {locations.map((loc, index) => (
              <div key={index} className="p-4 shadow-lg rounded-md bg-white">
                <img src={loc.image} alt={loc.city} className="w-full h-[200px] object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-4">{loc.city}</h2>
                <p className="text-gray-600">{loc.jobs}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}
