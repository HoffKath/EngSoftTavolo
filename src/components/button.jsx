import '../styles/button.css'

function Button({label, onClick, style})
{
    return (
        <button className="button" onClick={onClick} style={style}>
            {label}
        </button>
    );
}

export default Button;