import './grid.css';

export function Grid({ children, className = '' }) {
  return (
    <div className={`grid-container ${className}`}>
      {children}
    </div>
  );
}

export function Col({ span = 1, children, className = '' }) {
  const spanClass = `col-span-${span}`;
  return (
    <div className={`${spanClass} ${className}`}>
      {children}
    </div>
  );
}
