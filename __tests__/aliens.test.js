const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const alienData = require('../data/alienData');

describe('alien routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('displays a list of aliens and their details', async () => {
    const resp = await request(app).get('/aliens');
    expect(resp.body).toEqual(alienData);
  });
  it('/id display and alien by id', async () => {
    const resp = await request(app).get('/aliens/1');
    expect(resp.body).toEqual({
      id: '1',
      type: 'Flatwoods monster',
      description: 'Tall humanoid with a spade-shaped head',
    });
  });
  afterAll(() => {
    pool.end();
  });
});
