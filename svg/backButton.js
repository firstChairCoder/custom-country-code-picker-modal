import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import colors from "../assets/colors/colors";

export const BackButton = (props) => {
  const { color, style } = props;
  return (
    <TouchableOpacity style={[style]}>
      <View>
        <Svg width={12} height={20} fill="none">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.147.353a1.206 1.206 0 011.706 1.706l-7.09 7.088c-.47.471-.47 1.235 0 1.706l7.09 7.089a1.206 1.206 0 11-1.706 1.705L.353 10.853a1.206 1.206 0 010-1.706L9.147.353z"
            fill={color == "" ? colors.white : colors.black}
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

export const CloseButton = (props) => {
  const { style } = props;
  return (
    <TouchableOpacity style={[style]}>
      <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M11.664 10l7.991-7.992A1.175 1.175 0 1017.991.345L10 8.337 2.008.345A1.175 1.175 0 10.345 2.008L8.337 10 .345 17.992a1.175 1.175 0 101.663 1.663L10 11.664l7.991 7.991a1.173 1.173 0 001.664 0c.46-.46.46-1.203 0-1.663L11.663 10z"
          fill={colors.black}
        />
      </Svg>
    </TouchableOpacity>
  );
};
