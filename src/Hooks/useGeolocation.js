import { useState } from "react";

export function useGeolocation(navigate) {
  const [isLoading, setIsloading] = useState(false);
  const [userPosition, setUserPositionState] = useState(null);
  function getMyPos() {
    setIsloading(true);
    navigator.geolocation.getCurrentPosition((e) => {
      if (
        isFinite(+e.coords.latitude) &&
        isFinite(+e.coords.longitude) &&
        +e.coords.longitude
      ) {
        navigate(`form?lat=${+e.coords.latitude}&lng=${+e.coords.longitude}`);
      }
    });

    setUserPositionState(true);
    setIsloading(false);
  }
  return { isLoading, userPosition, getMyPos, setUserPositionState };
}
