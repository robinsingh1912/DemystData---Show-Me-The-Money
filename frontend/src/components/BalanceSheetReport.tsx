import type { HeaderRow, Report, SectionRow } from '@/types';
import React, { useMemo } from 'react';

type Props = {
  report: Report;
};

export function BalanceSheetReport({ report }: Props) {
  const header = useMemo(
    () =>
      (
        report.Rows.find((row) => row.RowType === 'Header') as HeaderRow
      ).Cells.map((cell) => cell.Value),
    [report.Rows]
  );

  const sections = useMemo(
    () =>
      report.Rows.filter((row) => row.RowType === 'Section') as SectionRow[],
    [report.Rows]
  );

  console.log(sections);
  return (
    <div className='shadow-sm overflow-hidden my-8'>
      <div className='flex justify-between gap-4'>
        {report.ReportTitles.map((title) => (
          <h3 key={title}>{title}</h3>
        ))}
      </div>
      <table className='border-collapse border rounded table-auto w-full text-sm'>
        <thead>
          <tr
            className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'
            data-type='Header'
          >
            {header.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-slate-800'>
          {sections.map((section, index) => (
            <React.Fragment key={section.Title + index}>
              {
                <tr data-type={section.RowType} className={'bg-slate-200'}>
                  <td
                    className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'
                    colSpan={header.length}
                  >
                    {section.Title}
                  </td>
                </tr>
              }
              {section.Rows.map((subRow, index) => (
                <tr
                  key={index}
                  data-type={subRow.RowType}
                  className={
                    subRow.RowType === 'SummaryRow'
                      ? 'font-bold border-t border-b border-black'
                      : ''
                  }
                >
                  {subRow.Cells.map((cell) => (
                    <td
                      className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'
                      key={cell.Value}
                    >
                      {cell.Value}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
