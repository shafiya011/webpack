import React from 'react';

const Nigel = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_i_4679_3407)">
        <circle cx="24" cy="24" r="24" fill="url(#pattern0)" />
      </g>
      <defs>
        <filter
          id="filter0_i_4679_3407"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4679_3407"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_4679_3407"
            transform="translate(0 -0.251073) scale(0.00429185)"
          />
        </pattern>
        <image
          id="image0_4679_3407"
          width="233"
          height="350"
          xlinkHref="data:image/jpeg;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Nigel;
