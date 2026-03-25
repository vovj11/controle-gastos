// Tipo para transação, incluindo o id gerado pelo backend
export type Transaction = {
  id: number;
  description: string;
  value: number;
  type: number;
  PersonId: number;
  categoryId: number;
};

// Tipo para criação sem id já que é gerado pelo backend
export type CreateTransaction = {
  description: string;
  value: number;
  type: number;
  PersonId: number;
  categoryId: number;
};
