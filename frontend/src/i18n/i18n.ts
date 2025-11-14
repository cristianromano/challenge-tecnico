import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      title: "Tareas",
      placeholder: "Escribe una tarea...",
      add: "Agregar",
      update: "Actualizar",
      edit: "Editar",
      delete: "Eliminar",
      cancel: "Cancelar",
      emptyList: "No hay tareas pendientes.",
      toggleLang: "Switch to English",
    },
  },
  en: {
    translation: {
      title: "Tasks",
      placeholder: "Write a task...",
      add: "Add",
      update: "Update",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      emptyList: "No pending tasks.",
      toggleLang: "Cambiar a Español",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
