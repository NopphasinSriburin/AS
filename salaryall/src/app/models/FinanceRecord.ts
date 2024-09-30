export interface FinanceRecord {
    id: number;
    amount: number;
    date: string; // Format: YYYY-MM-DD
    type: 'income' | 'expense';
    note: string;
  }
  