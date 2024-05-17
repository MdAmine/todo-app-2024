const Priority = ({color, text, onClick}) => {

    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = color;
        e.currentTarget.querySelector('p').style.color = '#fff';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.querySelector('p').style.color = color;
    };
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
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             onClick={onClick}
        >
            <p>{text}</p>
        </div>
    )
        ;
};

export default Priority;
