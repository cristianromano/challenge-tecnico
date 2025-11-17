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

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || "es",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("lang", lng);
    } catch (e) {}
    try {
      document.documentElement.lang = lng;
    } catch (e) {}
  }
});

export default i18n;
