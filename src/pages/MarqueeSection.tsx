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

const firstRow = reviews.slice(0, reviews.length )

const ReviewCard = ({
  img,
 
}: {
  img: string;
  
}) => {
  return (
   <figure
  className={cn(
    "relative h-[20rem] w-[14rem] cursor-pointer overflow-hidden p-4",
    " "
  )}
>
  <div className="flex flex-row items-center gap-4 h-full">
    <img 
      className="w-28 h-28 filter brightness-0 invert hover:scale-105 transition-all duration-300" 
      alt="logos" 
      src={img} 
    />
  </div>
</figure>
  )
}

export function MarqueeSection() {
  return (
    <div className="max-w-full mx-auto w-full bg-[#00020F]">
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-[#00020F] max-w-7xl mx-auto">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((company) => (
          <ReviewCard  {...company} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#00020F] to-transparent "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#00020F] to-transparent"></div>
    </div>

    </div>
  )
}