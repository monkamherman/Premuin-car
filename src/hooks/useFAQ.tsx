// hooks/useFAQ.js
import { useState } from 'react';

export const useFAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return { activeFAQ, toggleFAQ };
};