import useFetch from "./useFetch";

export default function useFetchCity(url, cancel = false) {
  const { data: city, isLoading } = useFetch(url, cancel);
  return { city: city || {}, isLoading };
}
