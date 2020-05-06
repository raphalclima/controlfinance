import React from 'react';

import { SvgPointerWithOpacity } from '../styles';

interface Props {
  handlerClick(): void;
}

const Edit: React.FC<Props> = (props) => (
  <SvgPointerWithOpacity
    onClick={() => props?.handlerClick()}
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 323.97412 335.11221"
    version="1.1"
    id="svg828"
  >
    <g
      id="layer1"
      transform="translate(-6.6029816,-19.676697)"
    >
      <ellipse
        fill="#8C8C8C"
        fillOpacity="1"
        stroke="none"
        strokeWidth="34.27282333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="stroke fill markers"
        id="path1970"
        cx="168.59004"
        cy="187.2328"
        rx="161.98706"
        ry="167.55611"
      />
      <path
        fill="#252627"
        stroke="#252627"
        strokeWidth="10.29199982"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 108.54467,215.10149 75.19681,-134.285876 66.55928,44.062566 -74.18061,139.5314 -60.97034,41.43978 -9.14557,-4.72098 z"
        id="path1945"
        connector-curvature="0"
      />
      <path
        fill="#252627"
        stroke="#8C8C8C"
        strokeWidth="20.89367294"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 150.33188,128.00313 78.18578,52.80401"
        id="path1947"
        connector-curvature="0"
        transform-center-x="3.663015"
        transform-center-y="1.8308472"
      />
    </g>
  </SvgPointerWithOpacity>
);

export default Edit;
