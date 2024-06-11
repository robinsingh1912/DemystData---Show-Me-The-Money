import { Report } from '@/types';

const data: Report = {
  ReportID: 'BalanceSheet',
  ReportName: 'Balance Sheet',
  ReportType: 'BalanceSheet',
  ReportTitles: [
    'Balance Sheet',
    'Demo Company (AU)',
    'As at 28 February 2018',
  ],
  ReportDate: '23 February 2018',
  UpdatedDateUTC: '/Date(1519358515899)/',
  Rows: [
    {
      RowType: 'Header',
      Cells: [
        { Value: '' },
        { Value: '28 Feb 2018' },
        { Value: '28 Feb 2017' },
      ],
    },
    {
      RowType: 'Section',
      Title: 'Assets',
    },
    {
      RowType: 'Section',
      Title: 'Bank',
      Rows: [
        {
          RowType: 'Row',
          Cells: [
            {
              Value: 'Business Bank Account',
              Attributes: [
                {
                  Value: '13918178-849a-4823-9a31-57b7eac713d7',
                  Id: 'account',
                },
              ],
            },
            {
              Value: '-2894.08',
              Attributes: [
                {
                  Value: '13918178-849a-4823-9a31-57b7eac713d7',
                  Id: 'account',
                },
              ],
            },
            {
              Value: '0.00',
              Attributes: [
                {
                  Value: '13918178-849a-4823-9a31-57b7eac713d7',
                  Id: 'account',
                },
              ],
            },
          ],
        },
        {
          RowType: 'Row',
          Cells: [
            {
              Value: 'Business Savings Account',
              Attributes: [
                {
                  Value: '26028d3a-f981-44d6-a9ed-a522198870f8',
                  Id: 'account',
                },
              ],
            },
            {
              Value: '6878.28',
              Attributes: [
                {
                  Value: '26028d3a-f981-44d6-a9ed-a522198870f8',
                  Id: 'account',
                },
              ],
            },
            {
              Value: '0.00',
              Attributes: [
                {
                  Value: '26028d3a-f981-44d6-a9ed-a522198870f8',
                  Id: 'account',
                },
              ],
            },
          ],
        },
        {
          RowType: 'SummaryRow',
          Cells: [
            { Value: 'Total Bank' },
            { Value: '3984.20' },
            { Value: '0.00' },
          ],
        },
      ],
    },
  ],
  Fields: [],
};

export default data;
