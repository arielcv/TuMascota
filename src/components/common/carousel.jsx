import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

class Carousel extends Component {
    render() {
        const {interval: intervalSlide, autoPlay, infinite, autoHeight, autoWidth, width, height, imgsPerSlide } = this.props;
        const imgs = ['https://drscdn.500px.org/photo/1025308974/m%3D900/v2?sig=18014f1c63f675742275d34b473cb8dc6b249c1852e180f1c6a9502d3db7cf6a',
                        'https://drscdn.500px.org/photo/1025308975/m%3D900/v2?sig=852b0c1cbb351fcc6230bcbd531de793a6122090567a96b76eff6d095c7283ef',
                        'https://drscdn.500px.org/photo/1025308976/m%3D900/v2?sig=bcd6c6ea91e95b06b7ae5f78d24dc4229ee2ffc1c8085540b40413eee099590c',
                        'https://drscdn.500px.org/photo/1025308975/m%3D900/v2?sig=852b0c1cbb351fcc6230bcbd531de793a6122090567a96b76eff6d095c7283ef',
                        'https://drscdn.500px.org/photo/1025308975/m%3D900/v2?sig=852b0c1cbb351fcc6230bcbd531de793a6122090567a96b76eff6d095c7283ef'
                    ];

        let config = {
            autoPlay: autoPlay ? this.props.autoPlay : false,
            infinite: infinite ? this.props.infinite : false,
            autoHeight: autoHeight ? this.props.autoHeight : false,
            autoWidth: autoWidth ? this.props.autoWidth : false,
        };

        const responsive = {
            1:{items:imgsPerSlide},
        };

        return (
            <div className="carousel-style">
                <AliceCarousel
                    responsive={responsive}
                    autoPlay={config.autoPlay}
                    infinite={config.infinite}
                    autoHeight = {config.autoHeight}
                    autoWidth = {config.autoWidth}
                    autoPlayInterval={intervalSlide}
                >
                    {imgs.map(path => {
                        return(
                        <img key = {path}
                             width={width}
                             height={height}
                             src={path}
                             alt = "A missing picture"
                             className="sliderimg"/>
                        )
                    })}
                </AliceCarousel>
            </div>
        );
    }
}

export default Carousel;
