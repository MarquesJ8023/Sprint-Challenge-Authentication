const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('POST /api/auth', () => {
        it('returns 201 saved', () => {
          return request(server)
          .get('/api/auth')
          .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });
});

describe('server', () => {
    describe('POST /api/jokes', () => {
        it('returns 500 error', () => {
          return request(server)
          .get('/api/jokes')
          .then(res => {
                expect(res.status).toBe(500);
            });
        });
    });
});

describe('server', () => {
    describe('POST /api/jokes', () => {
        it('returns token', () => {
          return request(server)
          .get('/api/jokes')
          .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });
});

describe('server', () => {
    describe('POST /api/jokes', () => {
        it('returns 401 invalid credentials', () => {
          return request(server)
          .get('/api/jokes')
          .then(res => {
                expect(res.status).toBe(401);
            });
        });
    });
});