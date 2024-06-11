export interface HeaderRow {
  RowType: 'Header';
  Cells: Record<'Value', string>[];
}

export interface Row {
  Cells: {
    Attributes: {
      Id: string; // "account"
      Value: string;
    }[];
    Value: string;
  }[];
  RowType: 'Row';
}

export interface SummaryRow {
  Cells: {
    Value: string;
  }[];
  RowType: 'SummaryRow';
}

export interface SectionRow {
  RowType: 'Section';
  Rows?: (Row | SummaryRow)[];
  Title: string;
}
export interface Report {
  Fields: unknown[];
  ReportDate: string;
  ReportID: string;
  ReportName: string;
  ReportTitles: string[];
  ReportType: 'BalanceSheet';
  Rows: (HeaderRow | SectionRow)[];
  UpdatedDateUTC: string;
}
