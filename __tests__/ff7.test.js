const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const ff7Data = require('../data/ff7');

describe('ff7 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/ displays a list of ff7 characters', async () => {
    const resp = await request(app).get('/ff7');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual(ff7Data);
  });
}); //end
