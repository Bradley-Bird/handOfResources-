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
  it('post should return a new alien', async () => {
    const resp = await request(app).post('/aliens').send({
      type: 'Cryptozoological animals',
      description:
        'Some claim that many of the allegedly real creatures from the Fortean archives (see also: Fortean Times and William R. Corliss) and related reports of anomalous phenomena are actually of extraterrestrial or mixed origin, such as in the extraterrestrial hypothesis, the interdimensional hypothesis, or the cryptoterrestrial hypothesis. Sometimes these creatures are associated with the occult or with esotericism, or linked with supernatural or paranormal phenomena. Others dismiss these explanations in favor of skepticism, cultural tracking, or the psychosocial hypothesis such as in cases of mass hysteria. Some of these alleged encounters have turned out to be hoaxes or scams to boost local tourism, sell more newspapers or more fringe science books.',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.type).toEqual('Cryptozoological animals');
    expect(resp.body.description).toEqual(
      'Some claim that many of the allegedly real creatures from the Fortean archives (see also: Fortean Times and William R. Corliss) and related reports of anomalous phenomena are actually of extraterrestrial or mixed origin, such as in the extraterrestrial hypothesis, the interdimensional hypothesis, or the cryptoterrestrial hypothesis. Sometimes these creatures are associated with the occult or with esotericism, or linked with supernatural or paranormal phenomena. Others dismiss these explanations in favor of skepticism, cultural tracking, or the psychosocial hypothesis such as in cases of mass hysteria. Some of these alleged encounters have turned out to be hoaxes or scams to boost local tourism, sell more newspapers or more fringe science books.'
    );
  });
  it('PUT /aliens/:id should update an alien', async () => {
    const resp = await request(app)
      .put('/aliens/1')
      .send({ type: 'The Flatwoods Monster' });
    expect(resp.status).toEqual(200);
    expect(resp.body.type).toEqual('The Flatwoods Monster');
  });
  it('delete /alien/:id should delete an alien', async () => {
    const resp = await request(app).delete('/aliens/1');
    expect(resp.status).toEqual(200);

    const response = await request(app).get('/aliens/1');
    expect(response.body).toEqual({
      status: 500,
      message: "Cannot read properties of undefined (reading 'id')",
    });
  });
  afterAll(() => {
    pool.end();
  });
});
