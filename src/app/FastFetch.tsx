"use client";

import { useState } from "react";
import { randomDelay } from "../utils";

export function FastFetch() {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchTime, setFetchTime] = useState<number | null>(null);

  function handleFetch() {
    setIsFetching(true);
    fetchData().then((res) => {
      setFetchTime(res);
      setIsFetching(false);
    });
  }

  return (
    <div>
      <button
        onClick={handleFetch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Fetch Data Fast {isFetching && "..."}
      </button>
      {fetchTime ? <p>Fetch time: {fetchTime}ms</p> : <p>Data not fetched</p>}
    </div>
  );
}

async function fetchData() {
  const startTime = performance.now();

  await Promise.all([
    randomDelay(),
    randomDelay(),
    randomDelay(),
    randomDelay(),
    randomDelay(),
    randomDelay(),
    randomDelay(),
    randomDelay(),
    randomDelay(),
    randomDelay(),
  ]);

  const endTime = performance.now();

  return endTime - startTime;
}
