const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const legendsData = require('../data/legendsData');

describe('legends routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/ displays a list of legends', async () => {
    const resp = await request(app).get('/legends');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual(legendsData);
  });
  afterAll(() => {
    pool.end();
  });
}); //end
