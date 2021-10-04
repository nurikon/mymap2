import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMenu(props) {
  return (
    <Svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      {...props}>
      <Path
        d="M19 11H1a1 1 0 010-2h18a1 1 0 110 2zm0-7H1a1 1 0 010-2h18a1 1 0 110 2zm0 14H1a1 1 0 010-2h18a1 1 0 010 2z"
        fill={props.fill ? props.fill : 'black'}
      />
    </Svg>
  );
}

export default SvgMenu;
