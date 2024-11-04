export interface User {
  id: string;
  name: string;
  role: 'admin' | 'manager' | 'staff';
  email: string;
}

export interface Transaction {
  id: string;
  type: 'purchase' | 'production' | 'sale';
  amount: number;
  date: string;
  description: string;
  createdBy: string;
}

export interface FinancialReport {
  id: string;
  type: 'balance' | 'income' | 'cashflow';
  date: string;
  data: Record<string, number>;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  details: string;
}