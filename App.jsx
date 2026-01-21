import React from 'react';
import  MouseTracker  from './components/MouseTracker';
import { useMousePosition } from './hooks/useMousePosition';
import { MouseCircle } from './hooks/MouseCircle';

function App() {
  const { x, y } = useMousePosition(); // Use o hook aqui também!

  // Calcula uma cor baseada na posição (ex: porcentagem da tela)
  const blueShade = Math.round((x / window.innerWidth) * 255);

  return (
    <div className="App" style={{ 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, #f0f0f0, rgb(200, 220, ${blueShade}))`,
      transition: 'background 0.2s linear' 
    }}>
      <h1 style={{ padding: '20px' }}>Teste de Renderização</h1>
      <MouseTracker />
      <MouseCircle />
    </div>
  );
}

export default App;