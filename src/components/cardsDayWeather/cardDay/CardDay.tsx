import React, {FC} from 'react';
import {IDayData} from "../../../AppType";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './CardDayStyle';



interface ICardDay {
  deyData: IDayData
}


const CardDay: FC<ICardDay> = ({deyData}) => {
  const classes = useStyles();

  const {temp, speed, weather, humidity, dayMonth, feels_like} = deyData


  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2" paragraph>
          {dayMonth}
        </Typography>
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
