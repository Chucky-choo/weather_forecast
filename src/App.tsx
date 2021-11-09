import React, {FC, lazy, Suspense, useEffect} from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Main from "./components/main/Main";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from './AppStyle';
import Navigation from "./components/navigation/Navigation";
import {changeWeatherData, setCity} from './redux/weather-reducer';
import {CircularProgress, Typography} from "@material-ui/core";
import {appStoreType} from "./redux/redux-store";

const Info = lazy(() => import('./components/info/Info'))


const App: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const location = useLocation();

  const cityURL = location.pathname.replace(/\/in\/|\//g, '')
  const CityName = useSelector((store: appStoreType) => store.data.params.q)

  useEffect(() => {
    if (cityURL !== '') {
      dispatch(setCity(cityURL))
      dispatch(changeWeatherData())
    }
  }, [cityURL, dispatch]);

  return (
    <div className={classes.root}>
      <Navigation/>
      <Typography variant='h5' align='center' paragraph>
        Weather in {CityName}
      </Typography>
      <Routes>
        <Route
          path="/:city"
          element={<Main/>}
        />
        <Route
          path={"/in/:city"}
          element={
            <Suspense fallback={<CircularProgress color="secondary"/>}>
              <Info/>
            </Suspense>
          }
        />
        <Route
          path='/'
          element={<Navigate to='/Minsk' replace/>}
        />
      </Routes>
    </div>
  );
}

export default App;
