import * as React from "react";
import Svg, { G, Path, Circle, Mask } from "react-native-svg";

export const DZ = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#496e2d" d="M0 0h256l45.3 251.8L256 512H0z" />
      <Path fill="#eee" d="M256 0h256v512H256z" />
      <G fill="#d80027">
        <Path d="M311 206.9l-21 29-34-11 21 28.8-21 29 34-11.1 21 29v-35.8l34-11.1-34-11z" />
        <Path d="M277.2 328.3a72.3 72.3 0 1134.5-136 89 89 0 100 127.3 72 72 0 01-34.5 8.7z" />
      </G>
    </G>
  </Svg>
);

export const AO = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#d80027" d="M0 0h512v256l-253 36.6L0 256z" />
      <Path fill="#333" d="M0 256h512v256H0z" />
      <G fill="#ffda44">
        <Path d="M220.9 203.6l21.7 15.8-8.3 25.5L256 229l21.7 15.7-8.3-25.5 21.7-15.7h-26.8L256 178l-8.3 25.5z" />
        <Path d="M320 145.1a127.2 127.2 0 00-64-17v33.3a94 94 0 0147.3 12.7 94.7 94.7 0 01-94.6 163.8 94 94 0 01-31.6-29.8l-27.9 18.4a128.1 128.1 0 00217.7-6.5A128.1 128.1 0 00320 145.1z" />
        <Path d="M182.2 233.7a33.4 33.4 0 0013.3 45.4l108.4 59.2c-7.4 13.5-3.4 30 10 37.3l29.3 16a27.8 27.8 0 0037.8-11l16-29.3z" />
      </G>
    </G>
  </Svg>
);

export const BF = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#d80027" d="M0 0h512v256l-255.2 48L0 256z" />
      <Path fill="#6da544" d="M0 256h512v256H0z" />
      <Path
        fill="#ffda44"
        d="M256 167l19.3 59.5H338l-50.6 36.8 19.3 59.5L256 286l-50.6 36.8 19.3-59.5-50.6-36.8h62.6z"
      />
    </G>
  </Svg>
);

export const BJ = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#6da544" d="M0 0h189.2l54 257.6-54 254.4H0z" />
      <Path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z" />
      <Path fill="#d80027" d="M189.2 256H512v256H189.2z" />
    </G>
  </Svg>
);

export const BW = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#338af3"
        d="M0 0h512v178l-31 76.9 31 79.1v178H0V334l37-80.7L0 178z"
      />
      <Path
        fill="#333"
        d="M0 211.5l256-19.2 256 19.2v89l-254.6 20.7L0 300.5z"
      />
      <Path fill="#eee" d="M0 178h512v33.5H0zm0 122.5h512V334H0z" />
    </G>
  </Svg>
);

export const BI = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 0h47.2l207.5 30L464.8 0H512v47.2L477.4 256 512 464.8V512h-47.2l-209.1-35.8L47.2 512H0v-47.2l32.8-202.7L0 47.2z"
      />
      <Path
        fill="#d80027"
        d="M47.2 0L256 208.8 464.8 0H47.2zM256 303.2L47.2 512h417.6L256 303.2z"
      />
      <Path
        fill="#6da544"
        d="M0 47.2v417.6L208.8 256 0 47.2zm512 0L303.2 256 512 464.8V47.2z"
      />
      <Circle cx={256} cy={256} r={111.3} fill="#eee" />
      <Path
        fill="#d80027"
        d="M256 178l9.6 16.8H285l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H227l9.6-16.7-9.6-16.7h19.3zm-49 78l9.6 16.7H236l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H178l9.6-16.7-9.6-16.7h19.3zm98 0l9.6 16.7H334l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H276l9.6-16.7-9.6-16.7h19.3z"
      />
    </G>
  </Svg>
);

export const CM = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#d80027" d="M144.8 0h222.4l32 260-32 252H144.8l-32.1-256z" />
      <Path
        fill="#ffda44"
        d="M256.1 167l22.1 68h71.5L292 277l22 68-57.8-42-57.9 42 22.1-68-57.8-42H234z"
      />
      <Path fill="#496e2d" d="M0 0h144.8v512H0z" />
      <Path fill="#ffda44" d="M367.2 0H512v512H367.2z" />
    </G>
  </Svg>
);

export const CV = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#0052b4"
        d="M0 0h512v256.2l-41.9 64.3 41.9 63.7V512H0V384.2L41.3 320 0 256.2z"
      />
      <Path
        fill="#eee"
        d="M0 256.2h512v42.9l-15.7 21.6 15.7 21v42.5H0v-42.5l15.1-21.5L0 299z"
      />
      <Path fill="#d80027" d="M0 299.1h512v42.6H0z" />
      <Path
        fill="#ffda44"
        d="M182.8 190.4l5.2 16.4h17.1l-13.8 10 5.3 16.3-13.8-10-14 10 5.4-16.3-13.9-10h17.1zm0 213.3L188 420h17.1l-13.8 10 5.3 16.2-13.8-10-14 10L174 430l-14-10h17.2zm-99.2-72.1l5.2 16.2h17.1L92.1 358l5.2 16.2-13.7-10-14 10L75 358l-14-10.1h17.2zm37.9-119.8l5 16h17.2l-13.8 10.3 5.2 16.2-13.7-10-14 10 5.4-16.3-14-10.1H116zm-60.4 67h17l5.5-16.2 5.2 16.2h17.1L92.1 289l5.2 16.4L83.6 295l-14 10.3 5.4-16.4zm46.5 143l5.3-16.2L99 395.4h17.1l5.4-16.2 5.2 16.3h17.1L130 405.6l5.3 16.2-13.8-10zM282 331.6l-5.4 16.2h-17l13.8 10.2-5.3 16.2 13.9-10 13.8 10-5.2-16.3 13.7-10.1h-17zm-38-119.8l-5.3 16.2h-17.1l14 10.2-5.4 16.2 13.9-10 13.8 10-5.3-16.3 13.8-10.1h-17zm60.3 67h-17l-5.3-16.2-5.4 16.2h-17l13.8 10.1-5.3 16.4L282 295l13.8 10.3-5.2-16.4zm-46.4 143l-5.3-16.2 13.8-10.2h-17l-5.3-16.2-5.4 16.3h-17.1l14 10.1-5.4 16.2 13.9-10z"
      />
    </G>
  </Svg>
);

export const CF = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#ffda44"
        d="M0 378.4l252.9-28.8L512 378.4V512H322.8L256 481l-66.8 31H0z"
      />
      <Path fill="#6da544" d="M0 256l249.8-28L512 256v122.4H0z" />
      <Path fill="#eee" d="M0 133.6l255.3-28.3L512 133.6V256H0z" />
      <Path fill="#0052b4" d="M0 0h189.2L256 30l66.8-30H512v133.6H0z" />
      <Path
        fill="#ffda44"
        d="M137.7 55.7l6.9 21.2H167L148.9 90l6.9 21.3-18.1-13.1-18 13.1 6.8-21.3-18-13h22.3z"
      />
      <Path fill="#d80027" d="M189.2 0h133.6v512H189.2z" />
    </G>
  </Svg>
);

export const TD = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#ffda44" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
      <Path fill="#026" d="M0 0h167v512H0z" />
      <Path fill="#d80027" d="M345 0h167v512H345z" />
    </G>
  </Svg>
);

export const KM = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#ffda44" d="M124.4 149.7L512 132.8V0H0z" />
      <Path fill="#eee" d="M112.5 132.8H512v122.4l-294.2 16.6z" />
      <Path fill="#d80027" d="M512 255.3H234.5l-136 139.8L512 377.7V256z" />
      <Path fill="#0052b4" d="M108.2 377.7L0 511.2l512 .8V377.7z" />
      <Path fill="#6da544" d="M.8 0L0 511.2l256-256z" />
      <G fill="#eee">
        <Path d="M67.5 255.3a78 78 0 0161.2-76 78.2 78.2 0 00-16.7-2 78 78 0 1016.7 154 78 78 0 01-61.2-76z" />
        <Path d="M127.9 188.5l4.1 12.7h13.4l-10.8 8 4.1 12.7-10.8-8-10.9 8 4.2-12.8-10.9-7.9h13.4zm0 33.4l4.1 12.7h13.4l-10.8 8 4.1 12.7-10.8-8-10.9 8 4.2-12.8-10.9-7.9h13.4zm0 33.4L132 268h13.4l-10.8 8 4.1 12.6-10.8-7.8-10.9 7.8 4.2-12.7-10.9-7.9h13.4zm0 33.3l4.1 12.8h13.4l-10.8 8 4.1 12.6-10.8-7.8L117 322l4.2-12.7-10.9-7.9h13.4z" />
      </G>
    </G>
  </Svg>
);

export const CG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#ffda44"
        d="M401.9 0l-234 172.8L0 401.8V512h110.5L339 336.9l173-226.4V0z"
      />
      <Path fill="#d80027" d="M512 110.3L110.3 512H512V110.3z" />
      <Path fill="#6da544" d="M0 0v401.9L401.9 0H0z" />
    </G>
  </Svg>
);

export const CD = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#ffda44"
        d="M401.9 0l-234 172.8L0 401.8V512h110.5L339 336.9l173-226.4V0z"
      />
      <Path fill="#d80027" d="M512 110.3L110.3 512H512V110.3z" />
      <Path fill="#6da544" d="M0 0v401.9L401.9 0H0z" />
    </G>
  </Svg>
);

export const CI = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#eee" d="M167 0h178l31 253.2L345 512H167l-33.4-257.4z" />
      <Path fill="#ff9811" d="M0 0h167v512H0z" />
      <Path fill="#6da544" d="M345 0h167v512H345z" />
    </G>
  </Svg>
);

export const DJ = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#338af3" d="M0 0h512v256l-153.2 35.7L210 256z" />
      <Path fill="#6da544" d="M210 256h302v256H0z" />
      <Path fill="#eee" d="M0 0v512l256-256z" />
      <Path
        fill="#d80027"
        d="M103.6 189.2l16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6H87z"
      />
    </G>
  </Svg>
);

export const EG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 167l254.6-36.6L512 166.9v178l-254.6 36.4L0 344.9z"
      />
      <Path fill="#d80027" d="M0 0h512v166.9H0z" />
      <Path fill="#333" d="M0 344.9h512V512H0z" />
      <Path
        fill="#ff9811"
        d="M345 228.2h-66.7a22.3 22.3 0 00-44.6 0H167a23 23 0 0023 22.2h-.8c0 12.3 10 22.3 22.3 22.3 0 12.3 10 22.3 22.2 22.3h44.6c12.3 0 22.2-10 22.2-22.3 12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0023-22.2z"
      />
    </G>
  </Svg>
);

export const GQ = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#eee" d="M41.3 121.9L512 167v178L43.8 391.3z" />
      <Path fill="#6da544" d="M0 0h512v167H111z" />
      <Path fill="#d80027" d="M111 345h401v167H0z" />
      <Path fill="#0052b4" d="M0 0v512l256-256z" />
      <Path fill="#ff9811" d="M334 257.1h22.2v32.3h-22.3z" />
      <Path
        fill="#6da544"
        d="M367.3 245a22.3 22.3 0 10-44.5 0 11.1 11.1 0 100 22.1h44.5a11.1 11.1 0 100-22.2z"
      />
    </G>
  </Svg>
);

export const ER = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#6da544" d="M0 0h512v256H62z" />
      <Path fill="#338af3" d="M62 256h450v256H0z" />
      <Path fill="#d80027" d="M0 0v512l512-256z" />
      <Path
        fill="#ffda44"
        d="M133.6 150.3c-49.1 0-89 40-89 89v33.4a89.1 89.1 0 00178 0v-33.4c0-49-40-89-89-89zm55.6 122.4c0 24.9-16.4 46-39 53v-36.3l23.7-23.6-23.6-23.6v-19.6h-33.4V256l-23.6 23.6 23.6 23.6v22.6a55.7 55.7 0 01-39-53.1v-33.4a55.7 55.7 0 01111.3 0z"
      />
    </G>
  </Svg>
);

export const ET = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#d80027" d="M0 345l255.7-31L512 345v167H0z" />
      <Path fill="#ffda44" d="M0 167l258-40.7L512 167v178H0z" />
      <Path fill="#6da544" d="M0 0h512v167H0z" />
      <Circle cx={256} cy={256} r={122.4} fill="#0052b4" />
      <G fill="#ffda44">
        <Path d="M256 161.2l22 68h71.7l-58 42 22.3 68.3-58-42.3-58 42.2 22.2-68.1-58-42H234z" />
        <Path d="M344.1 273l-70-22.9 43.2-59.6-18-13L256 237l-43.3-59.7-18 13.1 43.3 59.7-70.1 22.7 6.9 21.2 70-22.8V345h22.3v-73.7l70.1 22.8z" />
      </G>
    </G>
  </Svg>
);

export const GA = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#ffda44"
        d="M0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <Path fill="#6da544" d="M0 0h512v167H0z" />
      <Path fill="#0052b4" d="M0 345h512v167H0z" />
    </G>
  </Svg>
);

export const GM = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 155.8l255-30.6 257 30.6v33.4l-27.7 67.2 27.7 66.4v33.4l-256 32.4L0 356.2v-33.4l28.8-68.5L0 189.2z"
      />
      <Path fill="#a2001d" d="M0 0h512v155.8H0z" />
      <Path fill="#0052b4" d="M0 189.2h512v133.6H0z" />
      <Path fill="#496e2d" d="M0 356.2h512V512H0z" />
    </G>
  </Svg>
);

export const GH = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#ffda44" d="M0 167l257.3-31.9L512 167v178l-256.3 29L0 345z" />
      <Path fill="#d80027" d="M0 0h512v167H0z" />
      <Path fill="#496e2d" d="M0 345h512v167H0z" />
      <Path
        fill="#333"
        d="M256 167l22.1 68h71.5l-57.8 42 22 68-57.8-42-57.9 42 22.1-68-57.8-42h71.5z"
      />
    </G>
  </Svg>
);
export const GN = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#ffda44" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
      <Path fill="#d80027" d="M0 0h167v512H0z" />
      <Path fill="#6da544" d="M345 0h167v512H345z" />
    </G>
  </Svg>
);

export const GW = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#d80027" d="M0 0h189.2l54 257.6-54 254.4H0z" />
      <Path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z" />
      <Path fill="#6da544" d="M189.2 256H512v256H189.2z" />
      <Path
        fill="#333"
        d="M96.7 189.2l16.6 51H167l-43.4 31.6 16.5 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6h53.7z"
      />
    </G>
  </Svg>
);

export const KE = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 144.7l253.4-28.2L512 144.7V178l-36 76.4 36 79.6v33.3L254.7 400 0 367.3V334l39-78-39-78z"
      />
      <Path fill="#333" d="M0 0h512v144.7H0z" />
      <Path fill="#a2001d" d="M0 178h512v156H0z" />
      <Path fill="#496e2d" d="M0 367.3h512V512H0z" />
      <Path
        fill="#eee"
        d="M335.9 118.3l-30.3-14-49.4 111.9-49.4-111.9-30.3 14L237.8 256l-61.3 137.7 30.3 14 49.4-111.9 49.4 111.9 30.3-14L274.6 256z"
      />
      <Path
        fill="#eee"
        d="M256.2 111.3s-7 5.8-16.7 16l-16 127.6 16 129.8c9.7 10.2 16.7 16 16.7 16s7-5.8 16.7-16l15-130.7-15-126.7c-9.7-10.2-16.7-16-16.7-16z"
      />
      <Path
        fill="#333"
        d="M311.9 179.2l-10 75.5 10 78.1A158.6 158.6 0 00334 256c0-28.2-9.7-54.5-22.2-76.8zm-111.4 0l8.9 74.3-9 79.3a158.6 158.6 0 01-22.1-76.8c0-28.2 9.7-54.5 22.2-76.8z"
      />
      <Path
        fill="#a2001d"
        d="M200.5 179.2v153.6a269 269 0 0039 51.9V127.3c-11.4 12-26.6 30-39 52zm111.4 0a269 269 0 00-39-51.9v257.4c11.4-12 26.5-30 39-52V179.3z"
      />
    </G>
  </Svg>
);

export const LS = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 144.7l255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"
      />
      <Path fill="#0052b4" d="M0 0h512v144.7H0z" />
      <Path fill="#6da544" d="M0 367.3h512V512H0z" />
      <Path
        fill="#333"
        d="M272.7 250.4v-61.2h-33.4v61.2L199 290.8a66.7 66.7 0 00114 0z"
      />
    </G>
  </Svg>
);

export const LR = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 232.7L256 0h256l-19.2 24L512 46.4v46.7l-19.6 22.6 19.6 23.9v46.5L493.8 209l18.2 23.7v46.6L493 304l19 21.8v46.6l-18 23.5 18 23v46.6l-253.3 21L0 465.5v-46.6l18.8-21.6L0 372.4v-46.6l19.6-21.9L0 279.3z"
      />
      <Path
        fill="#d80027"
        d="M256 0l-22 46.5h278V0zm-17.1 93.2v46.5H512V93.2zm-4.9 93l22 46.5h256v-46.5zM0 279.3v46.5h512v-46.5zm0 93.1v46.5h512v-46.5zm0 93.1V512h512v-46.5z"
      />
      <Path fill="#0052b4" d="M0 0h256v232.7H0z" />
      <Path
        fill="#eee"
        d="M152.4 66.8l16.6 51h53.6l-43.4 31.5 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.5h53.6z"
      />
    </G>
  </Svg>
);

export const LY = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#333"
        d="M0 144.7l257-22.4 255 22.4v222.6l-254.9 31L0 367.3z"
      />
      <Path fill="#d80027" d="M0 0h512v144.7H0z" />
      <Path fill="#496e2d" d="M0 367.3h512V512H0z" />
      <G fill="#eee">
        <Path d="M315.6 209.3l21 29 34-11-21 29 21 28.8-34-11-21 29v-36l-34-11 34-11z" />
        <Path d="M258.3 328.4a72.3 72.3 0 1134.4-136 89 89 0 100 127.3 72 72 0 01-34.4 8.7z" />
      </G>
    </G>
  </Svg>
);

export const MG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#eee" d="M0 0h167l45.6 257.6L167.1 512H0z" />
      <Path fill="#d80027" d="M167 0h345v256l-176.7 53.5L166.9 256z" />
      <Path fill="#6da544" d="M167 256h345v256H167z" />
    </G>
  </Svg>
);

export const MW = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#d80027"
        d="M0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <Path fill="#333" d="M0 0h512v167H0z" />
      <Path fill="#496e2d" d="M0 345h512v167H0z" />
      <Path
        fill="#d80027"
        d="M332.5 122.4l-31.2-14.7 16.6-30.3-34 6.5-4.3-34.3L256 75l-23.6-25.3L228 84l-34-6.5 16.7 30.3-31.3 14.7z"
      />
    </G>
  </Svg>
);

export const ML = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#ffda44" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
      <Path fill="#6da544" d="M0 0h167v512H0z" />
      <Path fill="#d80027" d="M345 0h167v512H345z" />
    </G>
  </Svg>
);
export const MR = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#496e2d" d="M0 0h512v512H0z" />
      <G fill="#ffda44">
        <Path d="M256 295.8a89 89 0 01-87-70 89.4 89.4 0 00-2 19 89 89 0 10178 0 89.4 89.4 0 00-2-19 89 89 0 01-87 70z" />
        <Path d="M256 178l8.3 25.6H291l-21.7 15.8 8.3 25.5L256 229l-21.7 15.8 8.3-25.5-21.7-15.8h26.8z" />
      </G>
    </G>
  </Svg>
);

export const MU = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#6da544" d="M0 378.3l254-37.1 258 37V512H0z" />
      <Path fill="#ffda44" d="M0 256.1l252.2-33.3L512 256v122.4H0z" />
      <Path fill="#0052b4" d="M0 133.7L249.7 97 512 133.7v122.4H0z" />
      <Path fill="#d80027" d="M0 0h512v133.7H0z" />
    </G>
  </Svg>
);

export const MA = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#d80027" d="M0 0h512v512H0z" />
      <Path
        fill="#496e2d"
        d="M407.3 210H291.7L256 100.3 220.3 210H104.7l93.5 68-35.7 109.8L256 320l93.5 68-35.7-110zm-183 59.5l12.2-37.1h39l12.1 37.1-31.6 23-31.6-23zm44-59.4h-24.6l12.3-37.9zm38.3 45.7l-7.7-23.4h39.9zM213 232.4l-7.7 23.4-32.2-23.4zm-8.3 97.3l12.3-38 20 14.5zm70.1-23.4l20-14.5 12.3 37.9z"
      />
    </G>
  </Svg>
);

export const MZ = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M99 136.8l413 20v31.5l-35.9 66.1 36.2 68.4-.3 32.4-413 22z"
      />
      <Path fill="#496e2d" d="M512 156.8V0H0l122 156.8z" />
      <Path fill="#333" d="M167 188.3v134.5h345.3l-.3-134.5z" />
      <Path fill="#ffda44" d="M512 355.2V512H0l122-156.8z" />
      <Path fill="#a2001d" d="M0 0v512l256-256z" />
      <Path
        fill="#ffda44"
        d="M103.6 189.2l16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6H87z"
      />
      <Path fill="#eee" d="M55.1 256h97v44.5h-97z" />
      <Path
        fill="#333"
        d="M170.5 205l-15.7-15.8-51.2 51.2-51.1-51.2L36.7 205 88 256l-51.2 51.3 15.8 15.5 51.1-51 51.2 51 15.7-15.5-51.2-51.2z"
      />
    </G>
  </Svg>
);

export const NA = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 401.9l160.6-237.1L401.9 0H449l63 63v47.3L350.3 339.2 110.3 512H63L0 449z"
      />
      <Path fill="#a2001d" d="M0 512h63L512 63V0h-63L0 449z" />
      <Path fill="#0052b4" d="M0 0v401.9L401.9 0z" />
      <Path fill="#496e2d" d="M512 512V110.3L110.3 512z" />
      <Path
        fill="#ffda44"
        d="M211.5 144.7l-28.7 13.5L198 186l-31.2-6-4 31.5-21.6-23.2-21.7 23.2-4-31.5-31 6 15.2-27.8L71 144.7l28.7-13.5-15.3-27.8 31.1 6 4-31.5 21.7 23.2L163 78l4 31.5 31-6-15.2 27.8z"
      />
    </G>
  </Svg>
);

export const NE = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 144.7l255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"
      />
      <Path fill="#ff9811" d="M0 0h512v144.7H0z" />
      <Path fill="#6da544" d="M0 367.3h512V512H0z" />
      <Circle cx={256} cy={256.1} r={89} fill="#ff9811" />
    </G>
  </Svg>
);

export const NG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#6da544"
        d="M0 0h167l86 41.2L345 0h167v512H345l-87.9-41.4L167 512H0z"
      />
      <Path fill="#eee" d="M167 0h178v512H167z" />
    </G>
  </Svg>
);

export const RW = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#496e2d" d="M0 378.5l254.1-22.1L512 378.5V512H0z" />
      <Path fill="#ffda44" d="M0 256.1l255-30.3 257 30.3v122.4H0z" />
      <Path fill="#338af3" d="M0 0h512v256H0z" />
      <Path
        fill="#ffda44"
        d="M289.4 150l31.3 14.6L304 195l34-6.5 4.3 34.3 23.6-25.2 23.7 25.2 4.3-34.3 34 6.5-16.7-30.3 31.2-14.7-31.2-14.7 16.6-30.3-34 6.5-4.2-34.3-23.7 25.3-23.6-25.3-4.3 34.3-34-6.5 16.7 30.3z"
      />
    </G>
  </Svg>
);

export const ST = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#6da544"
        d="M0 0h512v167l-52.6 83.8L512 345v167H0l72-264.3z"
      />
      <Path fill="#ffda44" d="M114.9 166.9H512v178H114.9z" />
      <Path fill="#d80027" d="M0 0v512l256-256z" />
      <Path
        fill="#333"
        d="M325 211.5l11.1 34H372l-29 21 11.1 34-29-21-28.9 21 11-34-28.8-21H314zm111.4 0l11 34h35.8l-29 21 11.1 34-29-21-28.9 21 11.1-34-29-21h35.8z"
      />
    </G>
  </Svg>
);

export const SN = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#ffda44" d="M144.8 0h222.4l32 260-32 252H144.8l-32.1-256z" />
      <Path fill="#496e2d" d="M0 0h144.8v512H0z" />
      <Path fill="#d80027" d="M367.2 0H512v512H367.2z" />
      <Path
        fill="#496e2d"
        d="M256.1 167l22.1 68h71.5L292 277l22 68-57.8-42-57.9 42 22.1-68-57.8-42H234z"
      />
    </G>
  </Svg>
);
export const SC = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#0052b4" d="M0 0v332l150.9-138.5L225.2 0z" />
      <Path fill="#ffda44" d="M273.1 253.3L512 0H225.2L0 332v80.2z" />
      <Path fill="#d80027" d="M512 0L0 412.2v50.4L277.9 390 512 256z" />
      <Path fill="#eee" d="M0 462.6L512 256v133.5l-223.9 78.8L0 488.4z" />
      <Path fill="#6da544" d="M512 389.5l-512 99V512h512z" />
    </G>
  </Svg>
);

export const SL = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#eee" d="M0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z" />
      <Path fill="#6da544" d="M0 0h512v167H0z" />
      <Path fill="#338af3" d="M0 345h512v167H0z" />
    </G>
  </Svg>
);

export const SO = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#338af3" d="M0 0h512v512H0z" />
      <Path
        fill="#eee"
        d="M256 133.6l27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"
      />
    </G>
  </Svg>
);

export const ZA = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#eee"
        d="M0 0l219.4 257.8L0 512h47.2L512 322.7v-33.3l-28.5-34 28.5-32.8v-33.3L47.2 0z"
      />
      <Path fill="#333" d="M0 141.8v228.4l139.5-114.7z" />
      <Path fill="#ffda44" d="M199.6 255.5L0 94.5v47.3L114 256 0 370.2v47.3z" />
      <Path
        fill="#6da544"
        d="M512 222.6H222.6L0 0v94.4L161.2 256 0 417.5V512l222.7-222.6H512z"
      />
      <Path fill="#d80027" d="M512 0H47.2l189.2 189.3H512z" />
      <Path fill="#0052b4" d="M512 512H47.2l189.2-189.3H512z" />
    </G>
  </Svg>
);

export const SS = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#f2f2f2"
        d="M74.1 115L512 156.9v31.5l-42.4 70.3 42.4 64.2v31.5L74.1 386.8z"
      />
      <Path fill="#333" d="M0 0h512v156.8H50z" />
      <Path fill="#a2001d" d="M150.6 188.3H512v134.5H150.6z" />
      <Path fill="#496e2d" d="M50 354.3h462V512H0z" />
      <Path fill="#0052b4" d="M0 0v512l256-256z" />
      <Path
        fill="#ffda44"
        d="M83.4 192.4l31.2 43.6 51.2-16.3-31.9 43.2 31.3 43.6-51-16.9-31.7 43.2.3-53.7L32 262.2 83 246z"
      />
    </G>
  </Svg>
);

export const SD = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#eee" d="M43.6 109.4L512 144.7v222.6L43.8 397.2z" />
      <Path fill="#d80027" d="M0 0h512v144.7H111z" />
      <Path fill="#333" d="M111 367.3h401V512H0z" />
      <Path fill="#496e2d" d="M0 0v512l256-256z" />
    </G>
  </Svg>
);

export const SZ = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#ffda44"
        d="M0 144.7l256-20.5 256 20.5V178l-37.4 79 37.4 77v33.3l-256 24.1L0 367.3V334l37.7-77.3L0 178z"
      />
      <Path fill="#333" d="M0 0h512v144.7H0z" />
      <Path fill="#0052b4" d="M0 367.3h512V512H0z" />
      <Path fill="#a2001d" d="M0 178h512v156H0z" />
      <Path
        fill="#ffda44"
        d="M89.2 244.9h334V267h-334zm44.6-44.6h244.8v22.3H133.8z"
      />
      <Path
        fill="#eee"
        d="M256.2 189.2l-18 65.2 18 68.4c66.8 0 124-66.8 124-66.8s-57.2-66.8-124-66.8z"
      />
      <Path
        fill="#333"
        d="M256.2 322.8c-66.8 0-124-66.8-124-66.8s57.2-66.8 124-66.8"
      />
      <Path fill="#eee" d="M211.7 233.7h22.2v44.6h-22.2z" />
      <Path fill="#333" d="M278.5 233.7h22.2v44.6h-22.2z" />
      <G fill="#0052b4" transform="translate(.2)">
        <Circle cx={89} cy={256} r={22.3} />
        <Circle cx={423} cy={256} r={22.3} />
      </G>
    </G>
  </Svg>
);

export const TZ = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#ffda44"
        d="M401.8 0H449l63 63v47.2L347.7 336.3 110.2 512H63L0 449v-47.2l167.1-238.6z"
      />
      <Path fill="#333" d="M0 512v-63L449 0h63v63L63 512z" />
      <Path fill="#338af3" d="M110.2 512L512 110.2V512z" />
      <Path fill="#6da544" d="M0 401.8L401.8 0H0z" />
    </G>
  </Svg>
);

export const TG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fill="#496e2d"
        d="M256 0h256v102.4L483.8 151l28.2 53.8v102.4l-30.5 50.7 30.5 51.7V512H0V409.6l34.7-51L0 307.1z"
      />
      <Path fill="#ff9811" d="M0 44.5v423V256z" />
      <Path
        fill="#ffda44"
        d="M231.7 102.4v102.4H512V102.4zM0 307.2v102.4h512V307.2H256l-128.2-26.4z"
      />
      <Path fill="#d80027" d="M256 307.2V0H0v307.2z" />
      <Path
        fill="#eee"
        d="M141.4 122.4l16.5 51h53.7L168 205l16.6 51-43.4-31.5L98 256l16.5-51L71 173.5h53.7z"
      />
    </G>
  </Svg>
);

export const TN = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#d80027" d="M0 0h512v512H0z" />
      <Circle cx={256} cy={256} r={122.4} fill="#eee" />
      <G fill="#d80027">
        <Path d="M271 209.2l21 29 34.1-11.1-21 29 21 28.9-34-11.1-21 29V267L237 256l34-11z" />
        <Path d="M283.8 328.3a72.3 72.3 0 1134.4-136 89 89 0 100 127.3 72 72 0 01-34.4 8.7z" />
      </G>
    </G>
  </Svg>
);

export const UG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#ececec" d="M0 0h512v512H0z" />
      <Path
        fill="#ffda44"
        d="M512 426.7V85.3L256 66.8 0 85.3v341.4l256 18.5z"
      />
      <Path fill="#d80027" d="M0 255.9l256 22.3 256-22.3v-85.3H0z" />
      <Path fill="#333" d="M0 85.3h512V0H0zm0 255.9h512v-85.3H0z" />
      <Path fill="#d80027" d="M512 426.7H0V512h512z" />
      <Path
        fill="#eee"
        d="M341.4 256a85.4 85.4 0 11-170.8 0 85.4 85.4 0 01170.8 0z"
      />
      <Path
        fill="#333"
        d="M287.3 260.4L256 246.8l7.7-26a16.6 16.6 0 00-4.4-15.6l7.8-7.8a27.7 27.7 0 00-19.6-8.2 27.7 27.7 0 00-19.7 8.2l7.8 7.8a16.6 16.6 0 00-4.8 11.8c0 1.7.2 3.4.7 4.9l-11.9 11.8h21.6s-9 13.4-13.8 24.4c-4.9 11 0 24.4 11.3 29.4l6.5 2.9 10.8 10.1v11.2l-11.1 11H267v-22.2l10.2-10.1h21l.3-.7a22 22 0 00-11.3-29.3z"
      />
    </G>
  </Svg>
);

export const ZM = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#496e2d" d="M0 0h512v256L256 512H0z" />
      <Path
        fill="#ff9811"
        d="M473 167h-66.7a22.3 22.3 0 00-44.6 0H295a23 23 0 0023 22.2h-.8c0 12.3 10 22.3 22.3 22.3 0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2 12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0023-22.2z"
      />
      <Path
        fill="#333"
        d="M341.3 256h85.4l21.1 126.3L426.7 512h-85.4l-23.5-128z"
      />
      <Path fill="#d80027" d="M256 256h85.3v256H256z" />
      <Path fill="#ff9811" d="M426.7 256H512v256h-85.3z" />
    </G>
  </Svg>
);

export const ZW = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
    preserveAspectRatio="none"
  >
    <Mask id="prefix__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#6da544" d="M31.4 0H512v512H31.4z" />
      <Path
        fill="#ffda44"
        d="M57.8 73.3H512v73.3l-65.1 110 65.1 110v73.3H57.8z"
      />
      <Path fill="#d80027" d="M132 146.6h380v73.3l-27 36 27 37.3v73.3H132z" />
      <Path fill="#eee" d="M0 0v512l279.8-256z" />
      <Path
        fill="#d80027"
        d="M103 189.2l16.5 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6h53.6z"
      />
      <Path
        fill="#ffda44"
        d="M148.5 260.2l-43.2-15.3-3.4-31a16.7 16.7 0 10-32.5 7.6l-12 12.1h21.5c0 22.4-16.7 22.4-16.7 44.7l9.2 22.2h55.7l9.3-22.2a22.2 22.2 0 001.7-6.6c8-3.2 10.4-11.5 10.4-11.5z"
      />
      <Path
        fill="#333"
        d="M31.4 0l220 220H512v73.2H250.2L31.4 512H0l256-256L0 0z"
      />
    </G>
  </Svg>
);
