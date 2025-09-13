import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/banner/banner4.jpg";
import cbrImg from "../../../assets/banner/banner5.jpg";
import yahImg from "../../../assets/banner/yamaha.jpg";
import suzImg from "../../../assets/banner/suzuki.jpg";
import kawImg from "../../../assets/banner/kawasaki.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BykeCategory from "../BykeCategory/BykeCategory";

const Byke = () => {
    const [ menu ] = useMenu();
    const cbr = menu.filter(item => item.category === "CBR");
    const yamaha = menu.filter(item => item.category === "YAMAHA");
    const suzuki = menu.filter(item => item.category === "SUZUKI");
    const kawasaki = menu.filter(item => item.category === "KAWASAKI");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Byke-House || Byke</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="CBR 1000RR"></Cover>
            <SectionTitle header="Today's Offer"></SectionTitle>
            {/* offer byke items */}
            <BykeCategory items={offered}></BykeCategory>
            {/* cbr byke items */}
            <BykeCategory items={cbr} img={cbrImg} title="cbr"></BykeCategory>
            {/* yamaha byke items */}
            <BykeCategory items={yamaha} img={yahImg} title="yamaha"></BykeCategory>
            {/* suzuki byke items */}
            <BykeCategory items={suzuki} img={suzImg} title="suzuki"></BykeCategory>
            {/* kawasaki byke items */}
            <BykeCategory items={kawasaki} img={kawImg} title="kawasaki"></BykeCategory>
        </div>
    );
};

export default Byke;