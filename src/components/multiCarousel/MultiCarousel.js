import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = (props) => {

    let responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: props.totalItems,
          slidesToSlide: props.slidesToSlide ? props.slidesToSlide : 1
        },
    }; 

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            ssr={false}
            deviceType={'desktop'}
            autoPlay={props.noAutoPlay ? false : true}
            autoPlaySpeed={3000}
            infinite={true}
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass={props.itemClass}
            >
             {props.children}
        </Carousel>
    )
}

export default MultiCarousel
