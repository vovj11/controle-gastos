import { useEffect, useState } from "react";
import { getTransactions, createTransaction } from "../../services/api";
import type { Transaction, CreateTransaction } from "../../types/Transaction";
import "./Transactions.css";

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

  // Função que busca as transações da API
  const loadTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  // Executa apenas na montagem do componente para carregar as transações iniciais
  // Criei a função loadTransactions fora do useEffect para poder reutilizar
  useEffect(() => {
    loadTransactions();
  }, []);

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
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro ao criar transação");
      }
    }
  }

  function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function getTypeLabel(type: number) {
    return type === 1 ? "Receita" : "Despesa";
  }

  return (
    <div className="container">
      <div className="title">Controle de Transações</div>

      {/* Formulário de criação de transação */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Descrição"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          className="input"
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

        <button className="button" type="submit">
          Salvar
        </button>
      </form>

      <hr />

      {/* Lista de transações */}
      <ul className="list">
        {transactions.map((t) => (
          <li key={t.id} className="card">
            <div className="card-header">
              <span className="person">{t.person?.name}</span>
              <span className={`type ${t.type === 1 ? "revenue" : "expense"}`}>
                {getTypeLabel(t.type)}
              </span>
            </div>

            <div className="card-body">
              <p className="description">{t.description}</p>
              <span className={`value ${t.type === 1 ? "revenue" : "expense"}`}>
                {formatCurrency(t.value)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
