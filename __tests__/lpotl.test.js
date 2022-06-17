const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const lpotlData = require('../data/lpotlData');

describe('lpotl routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('displays a list of lpotl members and their details', async () => {
    const resp = await request(app).get('/lpotl');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual(lpotlData);
  });
});
