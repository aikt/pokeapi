const request = require('supertest');
const app = require('../app');

describe('GET /pokemons/all', () => {
  it('should response with a 200 status code and json', async () => {
    const response = await request(app)
      .get('/pokemons/all')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe('GET /pokemons/search', () => {
  it('should response with a 200 status if name has value and only letters with json', async () => {
    const response = await request(app)
      .get('/pokemons/search/mew')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
  it('should response with a 404 status if has empty name', async () => {
    const response = await request(app)
      .get('/pokemons/search/')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(404);
  });

  it('should response with a 404 status if name no contains letters', async () => {
    const response = await request(app)
      .get('/pokemons/search/121313$("$)$"()$(')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(404);
  });
});
