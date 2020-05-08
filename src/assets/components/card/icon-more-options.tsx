import React from 'react';

import { SvgClose } from '../../styles';

interface Props {
  handleClick(): void;
}

const MoreOptions:React.FC<Props> = (props) => (
  <SvgClose
    onClick={() => props?.handleClick()}
    xmlns="http=:// www.w3.org/2000/svg"
    height="1.5em"
    width="1.5em"
    viewBox="0 0 44.377074 179.84953"
    version="1.1"
    id="svg8"
  >
    <g
      id="layer1"
      transform="translate(-62.970596,-13.282313)"
    >
      <g
        id="g969"
      >
        <path
          transform="matrix(0.26458333,0,0,0.26458333,-5.1146126,12.921357)"
          connector-curvature="0"
          id="path960"
          d="M 316.35413,165.63552 C 256.44089,145.1879 237.83648,73.199149 280.63941,27.439351 312.86123,-7.0083745 367.8894,-7.3747899 400.83766,26.638989 445.5128,72.758891 425.626,147.74909 363.73902,166.53252 c -12.4303,3.77274 -34.95132,3.34642 -47.38489,-0.897 z"
          fill="#808080ff"
          fillOpacity="1"
          stroke="#808080ff"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeDasharray="none"
          strokeOpacity="1"
          paintOrder="markers fill stroke"
        />
        <path
          transform="matrix(0.26458333,0,0,0.26458333,-5.1146126,12.921357)"
          connector-curvature="0"
          id="path962"
          d="m 316.35413,421.63552 c -59.91324,-20.44762 -78.51765,-92.43637 -35.71472,-138.19617 32.22182,-34.44772 87.24999,-34.81414 120.19825,-0.80036 44.67514,46.1199 24.78834,121.1101 -37.09864,139.89353 -12.4303,3.77274 -34.95132,3.34641 -47.38489,-0.897 z"
          fill="#808080ff"
          fillOpacity="1"
          stroke="#808080ff"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeDasharray="none"
          strokeOpacity="1"
          paintOrder="markers fill stroke"
        />
        <path
          transform="matrix(0.26458333,0,0,0.26458333,-5.1146126,12.921357)"
          connector-curvature="0"
          id="path964"
          d="m 316.35413,677.63552 c -59.91324,-20.44762 -78.51765,-92.43637 -35.71472,-138.19617 32.22182,-34.44772 87.24999,-34.81414 120.19825,-0.80036 44.67514,46.1199 24.78834,121.1101 -37.09864,139.89353 -12.4303,3.77274 -34.95132,3.34641 -47.38489,-0.897 z"
          fill="#808080ff"
          fillOpacity="1"
          stroke="#808080ff"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeDasharray="none"
          strokeOpacity="1"
          paintOrder="markers fill stroke"
        />
      </g>
    </g>
  </SvgClose>
);

export default MoreOptions;
