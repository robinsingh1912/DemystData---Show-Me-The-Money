import request from 'supertest';
import { app } from '../server';

describe('GET /api/v1/BalanceSheet', () => {
  const agent = request.agent(app);

  it('responds with JSON containing balance sheet data', async () => {
    const response = await agent.get('/api/v1/BalanceSheet');

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
