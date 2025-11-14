import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Tarea } from "./types/tarea";
import "./i18n/i18n";

const App: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [tareaEdicion, setTareaEdicion] = useState<Tarea | null>(null);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const handleAgrearEditar = (titulo: string) => {
    if (tareaEdicion) {
      setTareas((prev) =>
        prev.map((tarea) =>
          tarea.id === tareaEdicion.id ? { ...tarea, titulo } : tarea
        )
      );
      setTareaEdicion(null);
    } else {
      const nuevaTarea: Tarea = {
        id: Date.now().toString(),
        titulo: titulo,
      };
      setTareas((prev) => [...prev, nuevaTarea]);
    }
  };

  const handleEliminar = (id: number) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id.toString()));
    if (Number(tareaEdicion?.id) === id) {
      setTareaEdicion(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-8 sm:px-6">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <TaskForm
              agregarActualizarTarea={handleAgrearEditar}
              editarTareas={tareaEdicion}
              cancelarEdicion={() => setTareaEdicion(null)}
            />
          </div>

          <TaskList
            tareas={tareas}
            setTareaEdicion={setTareaEdicion}
            eliminarTarea={handleEliminar}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
