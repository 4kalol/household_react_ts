export type TransactionType = "income" | "expense";
export type IncomeCategory = "給与" | "副収入" | "お小遣い";
export type ExpenseCategory =
  | "食費"
  | "日用品"
  | "家賃"
  | "光熱費"
  | "娯楽"
  | "交際費"
  | "健康"
  | "交通費"
  | "その他";

export interface Transaction {
  id: string;
  amount: number;
  content: string;
  type: TransactionType;
  category: IncomeCategory | ExpenseCategory;
  date: string;
}
