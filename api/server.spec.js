const request = require('supertest');
const db = require('../database/dbConfig.js');
const server = require('./server.js');
const bcrypt = require('bcryptjs');

describe('server', () => {
    describe('POST /api/jokes', () => {
        it('returns 401 error', () => {
          return request(server)
          .get('/api/jokes')
          .then(res => {
                expect(res.status).toBe(401);
            });
        });

    });
});

beforeEach(async () => {
    await db('users').truncate();
  });
  
describe('server', () => {
    describe('POST /register', () => {
        it('creates user', () => {
          return request(server)
          .post('/api/auth/register').send({username: 'miami', password: 'test'})
          .then(res => {
                expect(res.status).toBe(201);
            });
        });
        it('should return error', () => {
            return request(server)
            .get('/register')
            .then(res => {
                expect(res.status).toBe(404)
            })
            
        })
    });
});

describe('server', () => {
    describe('POST /login', () => {
        it('returns 401 invalid credentials', () => {
          return request(server)
          .get('/login')
          .then(res => {
                expect(res.status).toBe(404);
            });
        });
        it('should return 200 OK', async () => {
            await db('users').insert({username: 'miami', password: bcrypt.hashSync('test')})
            const res = await request(server).post('/api/auth/login').send({username: 'miami', password: 'test'});
            expect(res.status).toBe(200);
        });
    });
});