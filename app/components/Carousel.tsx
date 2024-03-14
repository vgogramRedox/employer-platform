import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import {Image} from'@mantine/core'
interface carouselProps{
slideItems: string[]
}
export default function Demo({
    slideItems
}:carouselProps) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
 
  return (
    <Carousel 
      
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
        {
            slideItems?.map((item,i)=>(
                
                <Carousel.Slide key={i}>
                      <Image src={item} className=" max-w-full rounded-3xl h-[24.47rem]"  />
                    </Carousel.Slide>
            ))
        }

      
      {/* ...other slides */}
    </Carousel>
  );
}