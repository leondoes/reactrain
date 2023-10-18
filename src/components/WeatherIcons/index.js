import React from 'react';
import { IconContainer } from './styled';

import day_clear_sky from '../../assets/weathericons/01d.png';
import night_clear_sky from '../../assets/weathericons/01n.png';
import day_few_clouds from '../../assets/weathericons/02d.png';
import night_few_clouds from '../../assets/weathericons/02n.png';
import scattered_clouds from '../../assets/weathericons/03.png';
import broken_clouds from '../../assets/weathericons/04.png';
import shower_rain from '../../assets/weathericons/09.png';
import rain from '../../assets/weathericons/10.png';
import thunderstorm from '../../assets/weathericons/11.png';
import snow from '../../assets/weathericons/13.png';
import mist from '../../assets/weathericons/50.png';

const iconMapping = {
  '01d': day_clear_sky,
  '01n': night_clear_sky,
  '02d': day_few_clouds,
  '02n': night_few_clouds,
  '03d': scattered_clouds,
  '03n': scattered_clouds,
  '04d': broken_clouds,
  '04n': broken_clouds,
  '09d': shower_rain,
  '09n': shower_rain,
  '10d': rain,
  '10n': rain,
  '11d': thunderstorm,
  '11n': thunderstorm,
  '13d': snow,
  '13n': snow,
  '50d': mist,
  '50n': mist,
};
const WeatherIcon = ({ iconCode }) => {
  const iconPath = iconMapping[iconCode]
  return <IconContainer src={iconPath} alt="Weather Icon" />;
};

export default WeatherIcon;