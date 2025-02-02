import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchCities() {
      const ctrl = new AbortController();
      const req = await fetch(url, {
        method: "GET",
        signal: ctrl.signal,
      });
      const data = await req.json();
      setData(data);
      return () => ctrl.abort();
    }
    fetchCities();
  }, [url]);
  return data;
}
