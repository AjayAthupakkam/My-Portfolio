const icons = [
  { icon: 'JS', style: { top: '8%', left: '5%', animationDelay: '0s' }, color: '#F7DF1E' },
  { icon: 'TS', style: { top: '15%', right: '8%', animationDelay: '0.5s' }, color: '#3178C6' },
  { icon: 'PY', style: { top: '35%', left: '3%', animationDelay: '1s' }, color: '#3776AB' },
  { icon: 'C++', style: { top: '55%', right: '5%', animationDelay: '1.5s' }, color: '#00599C' },
  { icon: 'C', style: { top: '70%', left: '8%', animationDelay: '2s' }, color: '#A8B9CC' },
  { icon: 'JAVA', style: { top: '25%', left: '12%', animationDelay: '2.5s' }, color: '#ED8B00' },
  { icon: 'PHP', style: { top: '45%', right: '10%', animationDelay: '3s' }, color: '#777BB4' },
  { icon: 'HTML', style: { top: '80%', right: '12%', animationDelay: '0.8s' }, color: '#E34F26' },
  { icon: 'NODE', style: { top: '65%', left: '15%', animationDelay: '1.8s' }, color: '#339933' },
  { icon: 'CSS', style: { top: '20%', right: '15%', animationDelay: '2.2s' }, color: '#1572B6' },
  { icon: 'SQL', style: { top: '50%', left: '7%', animationDelay: '0.3s' }, color: '#CC2927' },
  { icon: 'GIT', style: { top: '85%', left: '20%', animationDelay: '1.2s' }, color: '#F05032' },
];

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map(({ icon, style, color }, index) => (
        <div
          key={index}
          className="bouncing-icon hidden lg:block"
          style={{
            ...style,
            position: 'absolute',
          }}
        >
          <div 
            className="font-mono text-sm font-bold px-2 py-1 rounded border opacity-20 hover:opacity-40 transition-opacity"
            style={{ 
              color: color,
              borderColor: color,
              backgroundColor: `${color}10`,
              textShadow: `0 0 10px ${color}50`
            }}
          >
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
