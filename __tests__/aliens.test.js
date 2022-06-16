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
  afterAll(() => {
    pool.end();
  });
});
