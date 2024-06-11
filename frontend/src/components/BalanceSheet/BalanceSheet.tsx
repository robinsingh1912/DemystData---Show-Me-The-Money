import { useBalanceSheet } from '@/hooks';
import { BalanceSheetReport } from './BalanceSheetReport';

export function BalanceSheet() {
  const { data: reports, error, isLoading } = useBalanceSheet();
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred';

  return (
    <>
      {reports?.map((report) => (
        <BalanceSheetReport key={report.ReportID} report={report} />
      ))}
    </>
  );
}
