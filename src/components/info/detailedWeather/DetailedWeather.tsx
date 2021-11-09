import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {appStoreType} from "../../../redux/redux-store";
import {useFlexCenter} from "./DetailedWeatherStyle";

const DetailedWeather: FC = () => {
const classes = useFlexCenter();

  const {weatherData} = useSelector((store: appStoreType) => store.data)

  if (!weatherData) {
    return null
  }
  const {temp} = weatherData[0]

  const arrDeyData = Object.entries(temp)


  return (
    <div className={classes.wrapper}>
      {arrDeyData.map((periodDay, index) => {
        return <p key={index} >
          {periodDay[0]}: {periodDay[1]} ℃
        </p>
      })}
    </div>
  );
};

export default DetailedWeather;

