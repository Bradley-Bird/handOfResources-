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
  it('post inserts a new food', async () => {
    const resp = await request(app).post('/food').send({
      name: 'Borger',
      region: 'Borger Town',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Borger');
    expect(resp.body.region).toEqual('Borger Town');
  });
  it('put updates on /food/id', async () => {
    const resp = await request(app).put('/food/1').send({ name: 'LARGE FOOD' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('LARGE FOOD');
  });
  it('delete /food/:id should delete a food', async () => {
    const resp = await request(app).delete('/food/1');
    expect(resp.status).toEqual(200);

    const response = await request(app).get('/food/1');
    expect(response.body).toEqual('');
  });
  afterAll(() => {
    pool.end();
  });
}); //end
