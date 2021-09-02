import { useCallback } from "react";

export default function useLocalStorage() {
  const addToLocalStorage = useCallback((path: string, data: any) => {
    localStorage.setItem(path, JSON.stringify(data));
  }, []);

  const getFromLocalStorage = useCallback((path: string) => {
    const raw: any = localStorage.getItem(path);
    const data: any = JSON.parse(raw);
    return data;
  }, []);

  return { addToLocalStorage, getFromLocalStorage };
}
