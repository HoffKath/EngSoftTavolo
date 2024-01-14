import '../styles/searchInput.css'

function SearchInput({value, placeholder, onChange, onClick, style})
{
    return (
        <div className='search-container' style={style}>
            <input className='search-input' type='text' placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
            <button className='search-icon' onClick={(e) => onClick(value)}/>
        </div>
    );
}

export default SearchInput;