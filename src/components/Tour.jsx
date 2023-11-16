

export default function Tour({ image, name, description, price}) {
  return (
      <div className="object">
         <div className="continer">
    <img src={image} alt="" />
        <h2>{name}</h2>
        <h5>{description}</h5>
        <p>{price}</p>

   </div>
    </div>
  )
}
