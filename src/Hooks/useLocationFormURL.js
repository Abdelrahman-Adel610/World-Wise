import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useMapContext from "./useMapContext";

export function useLocationFormURL() {
  const [searchParams] = useSearchParams();
  const { position, setPosition } = useMapContext();

  useEffect(() => {
    setPosition({ lat: searchParams.get("lat"), lng: searchParams.get("lng") });
  }, [searchParams, setPosition]);
  return position;
}
