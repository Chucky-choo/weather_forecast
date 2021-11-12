import React, {FC} from 'react';
import {IDayData} from "../../../AppType";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './CardDayStyle';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import GrainIcon from '@material-ui/icons/Grain';

interface ICardDay {
  deyData: IDayData
}


const CardDay: FC<ICardDay> = ({deyData}) => {
  const classes = useStyles();

  const {temp, speed, weather, humidity, dayMonth, feels_like} = deyData


  const renderSwitch = (param: string) => {
    switch (param) {
      case 'Clear':return <WbSunnyIcon fontSize={'large'}/>
      case 'Snow':return <AcUnitIcon fontSize={'large'}/>
      case 'Clouds':return <CloudQueueIcon fontSize={'large'}/>
      case "Rain":return <GrainIcon fontSize={'large'}/>
      default:return <WbSunnyIcon fontSize={'large'}/>
    }
  }


  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2" paragraph>
          {dayMonth}
        </Typography>
        {renderSwitch(weather[0].main)}
        <Typography className={classes.title} gutterBottom>
          {weather[0].description}
        </Typography>
        <Typography variant="h5" component="h2" paragraph>
          {Math.round(temp.day)} ℃
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          humidity: {humidity}%
        </Typography>
        <Typography className={classes.title} color="textSecondary" component="p">
          speed wind: {speed} km/h
        </Typography>
        <Typography className={classes.title} color="textSecondary" component="p">
          feels like: {Math.round(feels_like.day)} ℃
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDay;
