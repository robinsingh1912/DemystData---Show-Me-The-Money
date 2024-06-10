import express from 'express';
import 'dotenv/config';
import cors from 'cors'; // Import the cors middleware

import balanceSheetRoutes from './routes/balanceSheet.js';

const app = express();
const port = process.env.PORT || 5000;

const origin = process.env.ORIGIN || 'http://localhost:3000';
app.use(cors({ origin, methods: ['GET'] }));

app.use('/api/v1/BalanceSheet', balanceSheetRoutes);

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
