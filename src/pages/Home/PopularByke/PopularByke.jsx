import BykeItem from "../../../Shared/BykeItem/BykeItem";
import useMenu from "../../../hooks/useMenu";

const PopularByke = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className="max-w-screen-xl mx-auto pb-10">
            <h2 className="text-5xl text-center p-10">Popular Byke Item</h2>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <BykeItem
                        key={item._id}
                        item={item}
                    ></BykeItem>)
                }
            </div>
        </section>
    );
};

export default PopularByke;