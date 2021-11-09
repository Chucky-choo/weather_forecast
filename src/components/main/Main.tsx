import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GroupBtn from "./btnGroup/GroupBtn";
import {appStoreType} from "../../redux/redux-store";
import {CircularProgress} from '@material-ui/core';
import {setNumberDays} from "../../redux/weather-reducer";
import CardDayWeather from '../cardsDayWeather/CardsDayWeather';


const Main: FC = () => {
  const dispatch = useDispatch()

  const weatherData = useSelector((store: appStoreType) => store.data.weatherData)

  useEffect(() => {dispatch(setNumberDays(4))}, [dispatch])


  return (
    <div>
      <GroupBtn/>
      {weatherData
      // if available shows only for 4 days
        ?<CardDayWeather weatherData={ weatherData.slice(0, 4)} />
        : <CircularProgress color="secondary"/>
      }
    </div>
  );
};

export default Main;
