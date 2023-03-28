import Svg, {Path} from 'react-native-svg';

const CloseIcon = () => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M21 21L1 1"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 1L1 21"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CloseIcon;
