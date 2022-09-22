import React from 'react';
import Lottie from "lottie-react";
import * as animationData from './lottie/softsite-banner-animation4.json';
import { Autoplay } from 'swiper';

const width_proportion = '75%';
const height_proportion = '75%';

const style = {
    height: height_proportion,
    width: width_proportion,
    display: 'block',
    margin: 'auto',
}

const LottieBannerTest = () => <Lottie animationData={animationData} loop={true} style={style} />;

export default LottieBannerTest;