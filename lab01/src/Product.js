function Image(props) {
    return (
        <input type="image" src={props.imageUrl} width="50" alt={props.altText}/>
    )
}

function Title(props) {
    return (
        <h2>{props.title}</h2>
    )
}

function Price(props) {
    return (
        <div>{props.price} ₴</div>
    )
}

export function Product(props) {
    const {id, imageUrl, altText, title, price} = props;

    return (
        <div style={{display: "inline-block", border: "2px solid black"}}>
            <Title title={title}/>
            <div>id = {id}</div>
            <Image imageUrl={imageUrl} altText={altText}/>
            <Price price={price}/>
        </div>
    );
}
