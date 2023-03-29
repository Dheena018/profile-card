import { Mass } from './Components';
import "./Card.css";


const Card = ()=>{
   return Mass.map((val)=>{
    return(
        <>
        <div className="card">
          <div className='image-container'>
            <img src= {val.wikipedia_url} alt={val.name} className='img'></img>
          </div>
          <div className='heading-container'>
            <h3 className='header'>Name:{val.name}</h3>
          </div>
          <div className='para-container'>
            <p className='para'>Entry:{val.Entry}</p>
          </div>
        </div>


        </>
    )
   })
};

export default Card;