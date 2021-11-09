import React, {FC} from "react";
import CardDay from "./cardDay/CardDay";
import {IDayData} from "../../AppType";
import useStyles from "./CardsDayWeatherStyle";

interface ICardsProps {
  weatherData: IDayData[]
}


const CardsDayWeather: FC<ICardsProps> = React.memo(({weatherData}) => {
    const classes = useStyles()

    return (
      <div className={classes.container}>
        {weatherData.map((deyData, index) => {
          return (
            <CardDay
              key={index}
              deyData={deyData}
            />)
        })}
      </div>
    );
  }
)

export default CardsDayWeather;
