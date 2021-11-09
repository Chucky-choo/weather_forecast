import React from 'react';
import { ApiRequest } from './API';


test('check API for the correct length of the array', async () => {
  const data = await ApiRequest({q: 'Kyiv', cnt: 1,  units: 'metric',
    lang: 'en' });
  expect(data.length).toEqual(1);
});

test('check API to be truthy response', async () => {
  const data = await ApiRequest({q: 'Kyiv', cnt: 1,  units: 'metric',
    lang: 'en' });
  expect(data).toBeTruthy();
});