import '../styles/separator.css'

function Separator ({text}) 
{
    return (
        <div className='separator'>
            <label className='textSeparator'>
                {text}
            </label>
        </div>
    );
}

export default Separator;