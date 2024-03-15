import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import {Image} from'@mantine/core'
interface carouselProps{
slideItems: string[]
}
import classes from '@/styles/Demo.module.css'
export default function Demo({
    slideItems
}:carouselProps) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const images=["/images/mobileLand.svg","/images/mobileLand2.svg","/images/mobileLand3.svg"]
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  return (
    
    <Carousel 
    withControls={false}
    withIndicators
      classNames={classes}
      height={391}
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
        {
            slideItems?.map((item,i)=>(
                
                <Carousel.Slide key={i}>
                      <Image  src={item} className=" max-w-full rounded-3xl h-[24.47rem]"  />
                     
                    </Carousel.Slide>
            ))
        }

      
      {/* ...other slides */}
    </Carousel>
  );

 

  
}