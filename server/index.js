import express from 'express';
import 'dotenv/config';
import balanceSheetRoutes from './routes/balanceSheet.js';

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/v1/BalanceSheet', balanceSheetRoutes);

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
