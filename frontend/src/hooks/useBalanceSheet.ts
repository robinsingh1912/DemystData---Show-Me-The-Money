import type { Report } from '@/types';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

const fetchBalanceSheet = async () => {
  const response = await axios(import.meta.env.VITE_API_URL + '/BalanceSheet');
  return response.data.Reports;
};

export function useBalanceSheet() {
  return useQuery<Report[], AxiosError>({
    queryKey: ['balanceSheet'],
    queryFn: fetchBalanceSheet,
  });
}
