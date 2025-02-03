import useFetch from "./useFetch";

export default function useFetchCity(url, notCancel = false) {
  const { data: city, isLoading } = useFetch(url, notCancel);
  return { city: city || {}, isLoading };
}
