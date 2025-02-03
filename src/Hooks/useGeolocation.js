import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useGeolocation(setUserPosition) {
  const [isLoading, setIsloading] = useState(false);
  const [userPosition, setUserPositionState] = useState(null);
  function getMyPos() {
    setIsloading(true);
    navigator.geolocation.getCurrentPosition((e) => {
      if (isFinite(e.coords.latitude) && isFinite(e.coords.longitude))
        setUserPosition([e.coords.latitude, e.coords.longitude]);
    });
    setUserPositionState(true);
    setIsloading(false);
  }
  return { isLoading, userPosition, getMyPos, setUserPositionState };
}
