

import React, { useState ,useEffect} from 'react'
import Image from 'next/image'
import course1 from '../../../../public/Courses/course1.png'
import course2 from '../../../../public/Courses/course2.png'
import course3 from '../../../../public/Courses/course3.png'
import course4 from '../../../../public/Courses/course4.png'



export default function Prolearn() {

    const [coursecard,setcoursecard]=useState([
        {Title:'Prompt Engineering for GEN AI',
            Code:"GKT012",
            Duration:"6 hrs",
            Imageurl:course1,
        }, {Title:'Building AI Application With Large Language Model',
            Code:"GKT012",
            Duration:"6 hrs",
            Imageurl:course2,
        }, {Title:'Langchain for Business',
            Code:"GKT012",
            Duration:"6 hrs",
            Imageurl:course3,
        }, {Title:'Empowering Semantic Search with LLM',
            Code:"GKT012",
            Duration:"6 hrs",
            Imageurl:course4,
        }, {Title:'Building AI Application With Large Language Model',
            Code:"GKT012",
            Duration:"6 hrs",
            Imageurl:course2,
        }, {Title:'Empowering Semantic Search with LLM',
            Code:"GKT012",
            Duration:"6 hrs",
            Imageurl:course4,
        }, {Title:'Prompt Engineering for GEN AI',
            Code:"GKT012",
            Duration:"6 hrs",
            Imageurl:course1,
        }, {Title:'Langchain for Business',
            Code:"GKT012",
            Duration:"6 hrs",
            Imageurl:course3,
        }
    ])
useEffect(()=>{
console.log(coursecard);

},[])
  return (
    <div className="relative   w-full bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccc_0px,transparent_1px),linear-gradient(to_bottom,#ccc_0px,transparent_1px)] bg-[size:14px_24px] opacity-50 pointer-events-none z-0" />
      <div className="relative z-10 p-8">
        <h1 className="text-[#003663] text-3xl font-bold w-full text-center">Pro Learn</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8 px-10">
  {coursecard.map((card, i) => (
    <div
      key={i}
      className="flex flex-col items-center bg-white  rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition"
    >
    <div className="w-full h-32 relative">
  <Image
    src={card.Imageurl}
    alt={card.Title}
    fill
    className="object-fill rounded-t"
  />
</div>
      <div className="flex justify-between w-full mt-2 p-4 text-sm text-gray-700">
        <span>{card.Code}</span>
        <span className='flex gap-2'><Image src='/duration.svg' height={20} width={20} alt='duration_icon'/>{card.Duration}</span>
      </div>
      <div className="text-start  w-full p-4 text-black text-sm">
        {card.Title}
      </div>
    </div>
  ))}
</div>

          


      </div>
    </div>
  )
}
