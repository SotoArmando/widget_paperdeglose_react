import React from 'react';
import { render, screen } from '@testing-library/react';
import Randomnumbers from '../Brain'

test('Return 10 different arrays using 5 as N', () => {
  let arrays:Array<Array<Number>> = [];
  for (let i = 1; i <= 10; i ++) {
    arrays.push(Randomnumbers(5))
  }
  let anyofthearraysisequall:boolean = false;
  for (let i = 0; i <= 9; i++) {
    anyofthearraysisequall = arrays[i].every((e,i) => arrays[5 - i][i] == e);
    if (anyofthearraysisequall) {break }
  }
  expect(anyofthearraysisequall).toBeFalsy();
});

test('Return 25 different arrays using 10 as N', () => {
  let arrays:Array<Array<Number>> = [];
  for (let i = 1; i <= 25; i ++) {
    arrays.push(Randomnumbers(25))
  }
  let anyofthearraysisequall:boolean = false;
  for (let i = 0; i <= 24; i++) {
    anyofthearraysisequall = arrays[i].every((e,i) => arrays[24 - i][i] == e);
    if (anyofthearraysisequall) {break }
  }
  expect(anyofthearraysisequall).toBeFalsy();
});