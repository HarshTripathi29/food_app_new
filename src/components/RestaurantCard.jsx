import "../App.css";


const RestaurantCard=(props)=>{

    const {resData} = props;
    
    const {
        name,
        cuisines,
        locality,
        cloudinaryImageId
    }=resData;

    return(
        <div className="res-card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
      + cloudinaryImageId} placeholder="card image"/>
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <p>{locality}</p>
        </div>
    )
}

export default RestaurantCard;