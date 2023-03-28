import Svg, {Path} from 'react-native-svg';

const ArrowBackIcon = ({width = 26, height = 24, color = '#FFF'}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M12 22L2 12L12 2"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.38889 12H23.6667"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowBackIcon;
