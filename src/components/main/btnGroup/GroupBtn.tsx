import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {setCity} from "../../../redux/weather-reducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useStyles} from "./GroupBtnStyle";


const GroupBtn: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 const classes = useStyles()

  const setNewCity = (city: string): void => {
    navigate('/' + city)
    dispatch(setCity(city))
  }

  return (
    <div className={classes.container}>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => {setNewCity('Warszawa')}}>
          Minsk
        </Button>
        <Button onClick={() => {setNewCity('Moscow')}}>
          Moscow
        </Button>
        <Button onClick={() => {setNewCity('Bratislava')}}>
          Bratislava
        </Button>
      </ButtonGroup>
    </div>

  );
};

export default GroupBtn