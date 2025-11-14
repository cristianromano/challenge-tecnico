import React from "react";
import { useTranslation } from "react-i18next";
import type { Tarea } from "../types/tarea";

interface TareaListProps {
  tareas: Tarea[];
  setTareaEdicion: (tarea: Tarea) => void;
  eliminarTarea: (id: number) => void;
}

const TaskList: React.FC<TareaListProps> = ({
  tareas,
  setTareaEdicion,
  eliminarTarea,
}) => {
  const { t } = useTranslation();

  if (tareas.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-400 italic text-lg">{t("emptyList")}</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3 w-full">
      {tareas.map((tarea) => (
        <li
          key={tarea.id}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md"
        >
          <span className="text-gray-700 font-medium break-all mr-4">
            {tarea.titulo}
          </span>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setTareaEdicion(tarea)}
              className="px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              {t("edit")}
            </button>
            <button
              onClick={() => eliminarTarea(Number(tarea.id))}
              className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
            >
              {t("delete")}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
