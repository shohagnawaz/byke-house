const BykeItem = ({ item }) => {

    const { name, type, image, price } = item;

    return (
        <div className='flex space-x-4'>
            <img className='w-[200px] rounded-2xl' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p>{type}</p>
            </div>
            <p>${price}</p>
        </div>
    );
};

export default BykeItem;