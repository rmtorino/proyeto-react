
const Item = ({item}) =>{
    
    return(
        <div>
            <img src={item.img} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Precio: <strong>${item.price}</strong></p>
            <button>Ver mas</button>
        </div>
        
    )
};

export default Item; 