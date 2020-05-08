import React from 'react';

import { SvgSelectBox } from '../../styles';

interface Props {
  handlerClick(): void;
  mini: boolean;
  position: boolean;
}

const Expand: React.FC<Props> = (props) => (
  <SvgSelectBox
    position={props?.position}
    onClick={() => props?.handlerClick()}
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    height={(props?.mini ? '1.0em' : '1.5em')}
    width={(props?.mini ? '1.0em' : '1.5em')}
    viewBox="0 0 840.000000 378.000000"
    preserveAspectRatio="xMidYMid meet"
    stroke="currentColor"
    fill="currentColor"
  >
    <g
      transform="translate(0.000000,378.000000) scale(0.100000,-0.100000)"
      fill="#919191"
      stroke="none"
    >
      <path d="M2175 3344 c-45 -24 -383 -363 -406 -408 -27 -50 -27 -131 -1 -182 21 -40 2269 -2283 2324 -2318 47 -30 109 -38 170 -19 51 15 86 48 848 807 437 435 954 949 1148 1141 230 229 359 364 372 391 24 49 26 121 5 172 -21 49 -356 386 -411 412 -55 27 -130 26 -182 -2 -23 -13 -124 -104 -224 -203 -101 -99 -506 -497 -901 -884 l-718 -704 -197 195 c-897 884 -1610 1577 -1644 1596 -49 26 -137 29 -183 6z" />
    </g>
  </SvgSelectBox>
);

export default Expand;
