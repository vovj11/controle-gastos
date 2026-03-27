import { useState, useEffect } from "react";
import { getPersons, createPerson } from "../../services/api";
import type { Person } from "../../types/Person";
import "./Persons.css";

export function Persons() {
  const [persons, setPersons] = useState<Person[]>([]);

  const [form, setForm] = useState({
    name: "",
    age: 0,
  });

  const loadPersons = async () => {
    const data = await getPersons();
    setPersons(data);
  };

  useEffect(() => {
    loadPersons();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await createPerson({
        name: form.name,
        age: Number(form.age),
      });

      await loadPersons();

      setForm({
        name: "",
        age: 0,
      });
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro ao criar pessoa");
      }
    }
  }

  return (
    <div className="container">
      <h1 className="title">Pessoas</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="input"
          type="number"
          placeholder="Idade"
          value={form.age}
          onChange={(e) => {
            setForm({ ...form, age: Number(e.target.value) });
          }}
        />

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>

      <ul className="person-list">
        {persons.map((p) => (
          <li key={p.id} className="person-card">
            <p className="person-name">Nome: {p.name}</p>
            <p className="person-age">Idade: {p.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
