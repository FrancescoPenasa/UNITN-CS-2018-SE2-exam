const fetch = require('node-fetch');

const app = require('./api');

const BASE_URL = 'https://penasa-187617-b-dec2018.herokuapp.com/';

test('app module should be defined', () => {
  expect(app).toBeDefined();
});

test('GET /play?=player1=5 should return 200 (using fetch)', () => {
  return fetch(BASE_URL+"play?=player1=5").then(response => {
    expect(response.status).toBe(200);
  });
});

test('GET /play?=player1=6 should return 404 (using fetch)', () => {
  return fetch(BASE_URL+"play?=player1=6").then(response => {
    expect(response.status).toBe(404);
  });
});
