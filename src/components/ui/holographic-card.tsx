import React, { useRef } from 'react';

interface HolographicCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const HolographicCard = ({ 
  title = "Holographic Card", 
  description = "Move your mouse over me!", 
  icon,
  className = ""
}: HolographicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className={`component-card holographic-card ${className}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="holo-content text-center">
                {icon && (
                    <div className="mb-4 flex justify-center">
                        {icon}
                    </div>
                )}
                <h3 className="component-title" style={{fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', letterSpacing: '-0.025em'}}>
                    {title}
                </h3>
                <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
                    {description}
                </p>
            </div>
            <div className="holo-glow"></div>
        </div>
    );
};

export default HolographicCard;