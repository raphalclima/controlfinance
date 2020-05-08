import React from 'react';

import { SvgClose } from '../../styles';

interface Props {
  handlerClick(): void;
}

const CloseCircle: React.FC<Props> = (props) => (
  <SvgClose
    onClick={() => props?.handlerClick()}
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    height="1.5em"
    width="1.5em"
    viewBox="0 0 980.000000 980.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
      fill="rgb(255, 255, 255)"
      stroke="none"
    >
      <path d="M4560 9789 c-1035 -75 -1998 -463 -2800 -1128 -150 -123 -501 -475 -622 -621 -881 -1068 -1270 -2403 -1098 -3765 119 -934 501 -1801 1124 -2545 98 -117 370 -393 496 -504 1328 -1166 3158 -1531 4825 -962 895 305 1700 879 2281 1627 735 946 1100 2126 1024 3314 -70 1094 -491 2109 -1216 2935 -112 128 -386 398 -509 501 -763 642 -1665 1026 -2665 1134 -174 19 -664 27 -840 14z m-523 -2751 l863 -863 865 865 865 865 647 -648 648 -647 -865 -865 -865 -865 865 -865 865 -865 -648 -647 -647 -648 -865 865 -865 865 -865 -865 -865 -865 -647 648 -648 647 865 865 865 865 -865 865 -865 865 645 645 c355 355 647 645 650 645 3 0 393 -388 867 -862z" />
    </g>
  </SvgClose>
);

export default CloseCircle;
