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
  it('/id displays a lpotl host by id', async () => {
    const resp = await request(app).get('/lpotl/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'Ben Kissel',
      about:
        'Podcaster and comedian best known as one of the co-hosts of the popular true crime and paranormal podcast The Last Podcast on the Left. He has also appeared as a political commentator on Fox News and HLN.',
    });
  });
  it('should post and return a new cast member', async () => {
    const resp = await request(app).post('/lpotl').send({
      name: 'Bradley Bird',
      about:
        'Clearly the best host of Last Podcast on the Left and its not even close.',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Bradley Bird');
    expect(resp.body.about).toEqual(
      'Clearly the best host of Last Podcast on the Left and its not even close.'
    );
  });
});
