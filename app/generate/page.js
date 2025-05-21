import React, { Suspense } from 'react';
import Generate from './Generate';// Make sure path is correct

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Generate />
    </Suspense>
  );
}
