import { useState, useEffect } from "react";
import { createCategory, getCategories } from "../../services/api";
import type { Category } from "../../types/Category";
import "./Categories.css";

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [form, setForm] = useState({
    description: "",
    purpose: 1,
  });

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      console.log("Categorias carregadas:", data);
      setCategories(data);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await createCategory({
        description: form.description,
        purpose: Number(form.purpose),
      });

      await loadCategories();

      setForm({
        description: "",
        purpose: 1,
      });
    } catch (error: unknown) {
      console.error(error);
    }
  }

  const getPurposeLabel = (purpose: number) => {
    if (purpose === 1) return "Receita";
    if (purpose === 2) return "Despesa";
    if (purpose === 3) return "Ambas";
  };

  return (
    <div className="container">
      <h1 className="title">Categorias</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Nome da categoria"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <select
          value={form.purpose}
          onChange={(e) =>
            setForm({ ...form, purpose: Number(e.target.value) })
          }
        >
          <option value={1}>Receita</option>
          <option value={2}>Despesa</option>
          <option value={3}>Ambas</option>
        </select>

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>

      <ul className="category-list">
        {categories.map((c) => (
          <li key={c.id} className="category-card">
            <p className="category-name">Categoria: {c.description}</p>
            <p className={`category-purpose`}>
              Finalidade:
              <span
                className={`category-purpose ${
                  c.purpose === 1
                    ? "receita"
                    : c.purpose === 2
                      ? "despesa"
                      : "ambas"
                }`}
              >
                {getPurposeLabel(c.purpose)}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
