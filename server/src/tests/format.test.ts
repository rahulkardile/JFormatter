import { createServer } from 'http';
import { io as Client } from 'socket.io-client';
import { Server } from 'socket.io';
import request from 'supertest';
import { app } from '../index';

describe('Format Controller', () => {
  it('formats JSON successfully', async () => {
    const response = await request(app)
      .post('/format')
      .send({ json: '{"key":"value"}' })
      .expect(200);
    expect(response.body).toEqual({ formatted: '{\n  "key": "value"\n}' });
  });

  it('returns 400 for invalid JSON', async () => {
    const response = await request(app)
      .post('/format')
      .send({ json: '{invalid}' })
      .expect(400);
    expect(response.body).toHaveProperty('error');
  });
});