import { scan } from 'react-scan';
import { Profiler, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './components/app/app';

scan({
  enabled: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profiler onRender={console.log} id="">
      <App />
    </Profiler>
  </StrictMode>
);
