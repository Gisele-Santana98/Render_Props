import { useMousePosition } from '../hooks/useMousePosition';

function MouseTracker() {
  const { x, y } = useMousePosition();
  
  return (
  <div style={{
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#1e1e1e',
    color: '#00ff00', 
    borderRadius: '8px',
    fontFamily: 'monospace',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    border: '1px solid #333'
  }}>
    <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '5px' }}>SYSTEM_CURSOR_TRACKER</div>
    <div>X: <span style={{ color: '#fff' }}>{x.toString().padStart(4, '0')}</span></div>
    <div>Y: <span style={{ color: '#fff' }}>{y.toString().padStart(4, '0')}</span></div>
  </div>
  );
}

export default MouseTracker; 