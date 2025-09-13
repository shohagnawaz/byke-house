const BykeCard = ({ item }) => {
    const { name, type, image, price } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure><img src={image} alt="Byke" /></figure>
        <p className="absolute right-0 mr-2 mt-2 px-2 bg-slate-900 text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BykeCard;
