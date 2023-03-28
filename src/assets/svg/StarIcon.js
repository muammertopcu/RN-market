import Svg, {Path} from 'react-native-svg';

const StarIcon = ({width = 24, height = 22, isFavorite, outline, focused}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {outline && (
      <Path
        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
        fill={focused ? '#000' : 'transparent'}
        stroke={outline && '#000'}
      />
    )}

    {!outline && (
      <Path
        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
        fill={isFavorite ? '#FFB800' : '#D9D9D9'}
      />
    )}
  </Svg>
);

export default StarIcon;
