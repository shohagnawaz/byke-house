import BykeItem from "../../../Shared/BykeItem/BykeItem";
import Cover from "../../../Shared/Cover/Cover";

const BykeCategory = ({ items, img, title }) => {
    return (
        <div className="">
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <BykeItem
                        key={item._id}
                        item={item}
                    ></BykeItem>)
                }
            </div>    
        </div>
    );
};

export default BykeCategory;