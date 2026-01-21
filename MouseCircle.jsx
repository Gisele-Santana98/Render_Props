import { useMousePosition } from '../hooks/useMousePosition';

export function MouseCircle() {
  const { x, y } = useMousePosition();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(0, 123, 255, 0.3)', // Azul translúcido
        border: '2px solid #007bff',
        borderRadius: '50%',
        pointerEvents: 'none', // Importante para não bloquear cliques
        zIndex: 9999,
        transform: `translate(${x - 20}px, ${y - 20}px)`, // Centraliza a bolinha
        transition: 'transform 0.1s ease-out', // Suaviza o movimento
      }}
    />
  );
}