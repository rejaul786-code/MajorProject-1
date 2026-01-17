// import React, { useState } from "react";
// import { dummyTrailers } from "../assets/assets";
// import ReactPlayer from "react-player";
// import BlurCircle from "./BlurCircle";
// function TrailersSection() {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden ">
//       <p className="text-gray-300 font-medium text-lg max-w-960px mx-auto">
//         Trailers
//       </p>

//       <div className="max-w-960px mx-auto aspect-video">
        
//         <ReactPlayer
//           url={currentTrailer.videoUrl}
//           width="100%"
//           height="100%"
//           controls
//         />
//       </div>
//     </div>
//   );
// }

// export default TrailersSection;





import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircle } from "lucide-react";


function TrailersSection() {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  // Convert YouTube watch URL → embed URL
  const getEmbedUrl = (url) => {
    if (url.includes("embed")) return url;
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg mb-8 text-center">
        Trailers
      </p>

      <div className="relative max-w-240 mx-auto">
        {/* Blur background */}
        <BlurCircle top="-80px" right="-80px" />
        <BlurCircle bottom="-80px" left="-80px" />

        {/* Responsive iframe container */}
        <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
          <iframe
            src={getEmbedUrl(currentTrailer.videoUrl)}
            title="Movie Trailer"
            className="absolute top-0 left-0 w-full h-full"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>



        {/* Optional trailer switch buttons */}
        <div className="group grid  grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
          {dummyTrailers.map((trailer) => (
            <div key={trailer.image} className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer" onClick={() => setCurrentTrailer(trailer)}>
              
              <img src={trailer.image} alt="trailer" className="rounded-lg w-full h-full object-cover brightness-75" />
              <PlayCircle strokeWidth={1.6} className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2'/>
            </div>
          ))}
        </div>






      </div>
    </div>
  );
}

export default TrailersSection;
