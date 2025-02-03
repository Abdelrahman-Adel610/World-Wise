import { useEffect, useState } from "react";

export default function useFetch(url, notCancel = false) {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const ctrl = new AbortController();
    async function fetchCities() {
      setIsloading(true);
      const req = await fetch(url, {
        method: "GET",
        signal: ctrl.signal,
      });
      const data = await req.json();
      setData(data);
      setIsloading(false);
    }
    if (!notCancel) {
      fetchCities();
      return () => ctrl.abort();
    }
  }, [notCancel, url]);
  return { data, isLoading };
}
