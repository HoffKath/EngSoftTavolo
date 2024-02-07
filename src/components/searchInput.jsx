import '../styles/searchInput.css'

function SearchInput({value, placeholder, onChange, onClick, style})
{
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick(value);
        }
    };

    return (
        <div className='search-container' style={style}>
            <input className='search-input' type='text' placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={handleKeyPress}/>
            <button className='search-icon' onClick={(e) => onClick(value)}/>
        </div>
    );
}

export default SearchInput;