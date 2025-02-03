import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function useFetchCity(url) {
  const { data: city, isLoading } = useFetch(url);
  return { city: city || {}, isLoading };
}
