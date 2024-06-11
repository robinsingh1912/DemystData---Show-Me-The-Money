import { describe, expect, it } from 'vitest';
import { BalanceSheetReport } from '@/components';
import { render, screen } from '@testing-library/react';
import mockData from '@/components/BalanceSheet/__mock__/data';

describe('BalanceSheetReport', () => {
  it('should render with the table', () => {
    render(<BalanceSheetReport report={mockData} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
