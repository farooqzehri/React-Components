function card(props){
    return(
        <div>
            <img src={props.image} alt={props.alt} />
            <h2>{props.disciption}</h2>
        </div>
    )
}