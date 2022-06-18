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
  it('/:id displays a detail view of a ff7 character', async () => {
    const resp = await request(app).get('/ff7/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: '1',
      name: 'Cloud Strife',
      about:
        'Former First Class SOLDIER. After defecting from Shinra, Cloud began work as a mercenary for hire in Midgar. With his trusty broadsword in hand, he always gets the job done.',
    });
  });
  it('post inserts a new ff7 character', async () => {
    const resp = await request(app).post('/ff7').send({
      name: 'Sephiroth',
      about: 'evil bad one wing angel',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Sephiroth');
    expect(resp.body.about).toEqual('evil bad one wing angel');
  });
  it('put updates on /ff7/id', async () => {
    const resp = await request(app)
      .put('/ff7/1')
      .send({ name: 'Cloudy mcCloudCloud' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Cloudy mcCloudCloud');
  });
  it('delete /ff7/:id should delete a character', async () => {
    const resp = await request(app).delete('/ff7/1');
    expect(resp.status).toEqual(200);

    const response = await request(app).get('/ff7/1');
    expect(response.body).toEqual('');
  });
  afterAll(() => {
    pool.end();
  });
}); //end
