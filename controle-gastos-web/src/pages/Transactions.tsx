import { useEffect, useState } from "react";
import { getTransactions, createTransaction } from "../services/api";
import type { Transaction, CreateTransaction } from "../types/Transaction";

// Componente principal para exibir e criar transações
export function Transactions() {
  // Estado que armazena e atualiza a lista de transações
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  //Estado que armazena os dados digitados no formulário
  const [form, setForm] = useState<CreateTransaction>({
    description: "",
    value: 0,
    type: 1,
    personId: 1,
    categoryId: 2,
  });

  // Executa a função ao carregar a página para buscar as transações da API
  useEffect(() => {
    loadTransactions();
  }, []);

  // Função que busca as transações da API
  async function loadTransactions() {
    const data = await getTransactions();
    setTransactions(data);
  }

  // Função chamada ao enviar o formulário
  async function handleSubmit(e: React.FormEvent) {
    // Evita recarregar a página enquanto o formulário é enviado
    e.preventDefault();

    try {
      // Envia todos os dados do formulário garantindo que o valor seja um número
      await createTransaction({
        ...form,
        value: Number(form.value),
      });

      // Atualiza a lista após criar a transação
      loadTransactions();

      // Limpa o formulário
      setForm({
        description: "",
        value: 0,
        type: 1,
        personId: 1,
        categoryId: 2,
      });
    } catch (error: any) {
      alert(error?.message || "Erro ao criar transação");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <div>Controle de Transações</div>

      {/* Formulário de criação de transação */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Descrição"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="number"
          placeholder="Valor"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: Number(e.target.value) })}
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: Number(e.target.value) })}
        >
          <option value={1}>Receita</option>
          <option value={2}>Despesa</option>
        </select>

        <button type="submit">Salvar</button>
      </form>

      <hr />

      {/* Lista de transações */}
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.description} - R$ {t.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
