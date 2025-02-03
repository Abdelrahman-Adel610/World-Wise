import { useEffect, useState } from "react";

export function useGeolocation(setUserPosition) {
  const [isLoading, setIsloading] = useState(false);
  const [userPosition, setUserPositionState] = useState(null);
  function getMyPos() {
    setIsloading(true);
    navigator.geolocation.getCurrentPosition((e) =>
      setUserPosition([e.coords.latitude, e.coords.longitude])
    );
    setUserPositionState(true);
    setIsloading(false);
  }
  return { isLoading, userPosition, getMyPos, setUserPositionState };
}
