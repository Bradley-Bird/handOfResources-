const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const foodData = require('../data/foodData');

describe('food routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/ displays a list of food', async () => {
    const resp = await request(app).get('/food');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual(foodData);
  });
  it('/id displays a food detail view ', async () => {
    const resp = await request(app).get('/food/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({ id: '1', name: 'Tonkatsu', region: 'Japan' });
  });
  afterAll(() => {
    pool.end();
  });
}); //end
