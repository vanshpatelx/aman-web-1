import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    img: "/logos/AE.png",
  },
  {
    img: "/logos/ASML.png",
  },
  {
    img: "/logos/Lam.png",
  },
  {
    img: "/logos/MKS.png",
  },
  {
    img: "/logos/Nikon.png",
  },
  
  {
    img: "/logos/TEL.png",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
 
}: {
  img: string;
  
}) => {
  return (
   <figure
      className={cn(
        "relative h-[20rem] w-[10rem] cursor-pointer overflow-hidden p-4",
        // Base styles matching the dark theme
        " "
      )}
    >
      <div className="flex flex-row items-center gap-4 h-full">
        <img className="w-28 h-28 " alt="logos" src={img} />
        
      </div>
    </figure>
  )
}

export function MarqueeSection() {
  return (
    <div className="relative flex w-full max-w-[1600px] flex-col items-center justify-center overflow-hidden py-10">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((company) => (
          <ReviewCard  {...company} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  )
}
