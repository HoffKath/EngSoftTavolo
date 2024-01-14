import '../styles/ratingView.css'

const seedrandom = require('seedrandom');

function RatingView({rating})
{
    rating = rating - rating % 1

    //gerador Ids unicos

    const rng = seedrandom(new Date().getTime().toString());

    const rnd = Math.floor(rng() * 10000000000) + 1;

    const r1 = 'r1_' + rnd
    const r2 = 'r2_' + rnd
    const r3 = 'r3_' + rnd
    const r4 = 'r4_' + rnd
    const r5 = 'r5_' + rnd

    return (
        <div className='ratingView'>
            <input id={r1} className='inputStar' type='radio' checked={rating >= 1 ? true : false}/>
            <label className='star' htmlFor={r1}/> 
            <input id={r2} className='inputStar' type='radio' checked={rating >= 2 ? true : false}/>
            <label className='star' htmlFor={r2}/> 
            <input id={r3} className='inputStar' type='radio' checked={rating >= 3 ? true : false}/>            
            <label className='star' htmlFor={r3}/> 
            <input id={r4} className='inputStar' type='radio' checked={rating >= 4 ? true : false}/>
            <label className='star' htmlFor={r4}/> 
            <input id={r5} className='inputStar' type='radio' checked={rating === 5 ? true : false}/>
            <label className='star' htmlFor={r5}/> 
        </div>
    );
}

export default RatingView