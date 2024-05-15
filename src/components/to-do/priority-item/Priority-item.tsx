import React from 'react';

interface PriorityProps {
    color: string;
    text: string;
    onClick: () => void;
}

const Priority: React.FC<PriorityProps> = ({color, text, onClick}) => {
    return (
        <div style={{
            border: `2px solid ${color}`,
            transition: 'background-color 0.3s',
            padding: '10px',
            margin: '5px',
            height: '45px',
            borderRadius: '5px',
            minWidth: '70px',
            textAlign: 'center',
            color: color,
        }}
             onMouseEnter={(e) => {
                 (e.currentTarget as HTMLDivElement).style.backgroundColor = color;
                 (e.currentTarget.querySelector('p') as HTMLParagraphElement).style.color = '#fff';
             }}
             onMouseLeave={(e) => {
                 (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
                 (e.currentTarget.querySelector('p') as HTMLParagraphElement).style.color = color;
             }}
             onClick={onClick}
        >
            <p>{text}</p>
        </div>
    )
        ;
};

export default Priority;
