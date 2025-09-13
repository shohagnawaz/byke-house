import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/banner/banner4.jpg";

const Byke = () => {
    return (
        <div>
            <Helmet>
                <title>Byke-House || Byke</title>
            </Helmet>
            <Cover img={menuImg} title="CBR 1000RR"></Cover>
        </div>
    );
};

export default Byke;