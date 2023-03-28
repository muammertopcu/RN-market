import Svg, {Path} from 'react-native-svg';

const Person = ({focused}) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 31 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M21.9543 7.92308C21.6716 11.7358 18.7812 14.8462 15.6081 14.8462C12.4351 14.8462 9.53962 11.7365 9.26198 7.92308C8.97352 3.95673 11.786 1 15.6081 1C19.4302 1 22.2427 4.02885 21.9543 7.92308Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={focused ? 'black' : 'none'}
    />
    <Path
      d="M15.6081 19.4615C9.3341 19.4615 2.96631 22.9231 1.78795 29.4567C1.64588 30.2442 2.09155 31 2.91583 31H28.3004C29.1254 31 29.5711 30.2442 29.4291 29.4567C28.25 22.9231 21.8822 19.4615 15.6081 19.4615V19.4615Z"
      stroke="black"
      strokeWidth="2"
      strokeMiterlimit="10"
      fill={focused ? 'black' : 'none'}
    />
  </Svg>
);

export default Person;
