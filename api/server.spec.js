const request = require('supertest');

const auth = require('../auth/auth-router.js');

describe('auth-router.js', () => {
    describe('POST /register', () => {
        it('returns 201 saved', () => {
          return request(auth)
          .post('/register')
          .then(res => {
                expect(res.status).toBe(201);
            });
        });
    });
});

describe('auth-router.js', () => {
    describe('POST /register', () => {
        it('returns 500 error', () => {
          return request(auth)
          .post('/register')
          .then(res => {
                expect(res.status).toBe(500);
            });
        });
    });
});

describe('auth-router.js', () => {
    describe('POST /login', () => {
        it('returns 200 token', () => {
          return request(auth)
          .post('/register')
          .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });
});

describe('auth-router.js', () => {
    describe('POST /login', () => {
        it('returns 401 invalid credentials', () => {
          return request(auth)
          .post('/register')
          .then(res => {
                expect(res.status).toBe(401);
            });
        });
    });
});