import React from "react";

const Svg = () => {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#F78DA7"></stop>
          <stop offset="95%" stop-color="#8ED1FC"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,333 0,333 C 72.05084163517691,376.07523187907935 144.10168327035382,419.1504637581587 211,394 C 277.8983167296462,368.8495362418413 339.64410855376167,275.4733768464445 412,270 C 484.35589144623833,264.5266231535555 567.3218825145997,346.9560288560632 630,385 C 692.6781174854003,423.0439711439368 735.0683613878393,416.7025077293026 808,382 C 880.9316386121607,347.2974922706974 984.4046719340433,284.23394022672613 1050,283 C 1115.5953280659567,281.76605977327387 1143.3129508759876,342.36173136379256 1202,361 C 1260.6870491240124,379.63826863620744 1350.3435245620062,356.3191343181037 1440,333 C 1440,333 1440,500 1440,500 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        fill-opacity="1"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
    </svg>
  );
};

export default Svg;
