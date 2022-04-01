import React, { useRef, useEffect } from 'react';
import {Requests} from "./Requests";

export default function useRequests() {
  const requestsRef = useRef(new Requests());

  useEffect(() => {
    const requests = requestsRef.current;
    return () => {
      requests.unmount();
    }
  }, []);

  return requestsRef.current;
}
