import express from 'express';
import http from '../utils/http.js';
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const response = await http.get('/api.xro/2.0/Reports/BalanceSheet');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
