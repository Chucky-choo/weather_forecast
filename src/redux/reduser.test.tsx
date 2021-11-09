import React from 'react';
import weatherReducer, { initialState, setCity, setNumberDays } from './weather-reducer';


test('must change the city in the state', () => {
  expect(weatherReducer(initialState, setCity('Lviv'))).toEqual({
    weatherData: null,
    params: {
      q: 'Lviv',
      cnt: 4,
      units: 'metric',
      lang: 'en'
    }
  })
})

test('should change the number of days', () => {
  expect(weatherReducer(initialState, setNumberDays(25))).toEqual({
    weatherData: null,
    params: {
      q: 'Minsk',
      cnt: 25,
      units: 'metric',
      lang: 'en'
    }
  })
})