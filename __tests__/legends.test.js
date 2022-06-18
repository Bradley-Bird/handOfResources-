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
  it('/id displays a legends detail view ', async () => {
    const resp = await request(app).get('/legends/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: '1',
      name: 'BELVETH',
      role: 'FIGHTER',
      about:
        'A nightmarish empress created from the raw material of an entire devoured city, BelVeth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Voids old masters...',
    });
  });
  it('post inserts a new legend', async () => {
    const resp = await request(app).post('/legends').send({
      name: 'Bradley Bird',
      role: 'Professional sitter downer',
      about: 'Wow so good at sitting',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Bradley Bird');
    expect(resp.body.role).toEqual('Professional sitter downer');
    expect(resp.body.about).toEqual('Wow so good at sitting');
  });
  it('put updates on /legends/id', async () => {
    const resp = await request(app).put('/legends/1').send({ name: 'Belveth' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Belveth');
  });
  it('delete /legends/:id should delete a legends', async () => {
    const resp = await request(app).delete('/legends/1');
    expect(resp.status).toEqual(200);

    const response = await request(app).get('/legends/1');
    expect(response.body).toEqual('');
  });
  afterAll(() => {
    pool.end();
  });
}); //end
