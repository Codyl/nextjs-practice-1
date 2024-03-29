'use client';

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
    error: Error & { digest?: string },
  reset: () => void
  }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <main>
    <h2>Something went Wrong!</h2>
    <button onClick={() => reset()}>Try again</button>
  </main>
}