'use client';

import { useState, type JSX } from 'react';

export default function ErrorButton(): JSX.Element {
  const [isThrow, setIsThrow] = useState<boolean>(false);

  const generateErrorBoundary = () => {
    setIsThrow(() => true);
  };

  if (isThrow) {
    throw new Error('You are triggered custom error boundary');
  }

  return (
    <button className="btn btn-danger" onClick={() => generateErrorBoundary()}>
      Generate error boundary
    </button>
  );
}
