import React from 'react';
import { render, screen } from '@testing-library/react';
import Desglosenumber from '../Brain'

test('Return Precise number of paper used to return to cash in case number 17984 RD$', () => {
  let expectedanswer = [
    8, 1, 1, 2, 0,
    1, 1, 0, 1, 4
    ]
  
  expect(Desglosenumber(17984).every((e,i) => expectedanswer[i] === e))
});

test('Return Precise number of paper used to return to cash in case number 59984 RD$', () => {
  let expectedanswer = [
      29, 1, 1, 2, 0,
       1, 1, 0, 1, 4
  ]
  expect(Desglosenumber(59984).every((e,i) => expectedanswer[i] === e))
});