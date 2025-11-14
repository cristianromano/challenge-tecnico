import React, { useState, useEffect, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import type { Tarea } from "../types/tarea";

interface TareaFormProps {
  agregarActualizarTarea: (text: string) => void;
  editarTareas: Tarea | null;
  cancelarEdicion: () => void;
}

const TaskForm: React.FC<TareaFormProps> = ({
  agregarActualizarTarea,
  editarTareas,
  cancelarEdicion,
}) => {
  const { t } = useTranslation();
  const [tarea, setTarea] = useState<string>("");

  useEffect(() => {
    if (editarTareas) {
      setTarea(editarTareas.titulo);
    } else {
      setTarea("");
    }
  }, [editarTareas]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!tarea.trim()) return;
    agregarActualizarTarea(tarea);
    setTarea("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col sm:flex-row gap-3"
    >
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder={t("placeholder")}
        className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow text-gray-700 placeholder-gray-400"
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className={`px-6 py-2 rounded-lg font-semibold text-white shadow-md transition-all transform active:scale-95 
            ${
              editarTareas
                ? "bg-green-500 hover:bg-green-600 focus:ring-green-500"
                : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
            } focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          {editarTareas ? t("update") : t("add")}
        </button>

        {editarTareas && (
          <button
            type="button"
            onClick={cancelarEdicion}
            className="px-4 py-2 rounded-lg font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            {t("cancel")}
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
