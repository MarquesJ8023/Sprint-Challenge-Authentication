const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('GET /auth', () => {
        it('returns 201 saved', () => {
          return request(server)
          .get('/auth')
          .then(res => {
                expect(res.status).toBe(201);
            });
        });
    });
});

describe('server', () => {
    describe('GET /', () => {
        it('returns 500 error', () => {
          return request(server)
          .get('/jokes')
          .then(res => {
                expect(res.status).toBe(500);
            });
        });
    });
});

describe('server', () => {
    describe('POST /jokes', () => {
        it('returns 200 token', () => {
          return request(server)
          .get('/jokes')
          .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });
});

describe('server', () => {
    describe('POST /jokes', () => {
        it('returns 401 invalid credentials', () => {
          return request(server)
          .get('/jokes')
          .then(res => {
                expect(res.status).toBe(401);
            });
        });
    });
});