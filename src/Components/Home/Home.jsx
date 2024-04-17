import Carosel from "../Carosel/Carosel";
import CardEstate from "../Estate/CardEstate";
import Newsletter from "../Newsletter/Newsletter";
// import Slider from "./Slider";


const Home = () => {
    return (
        <>
            {/* <Slider></Slider> */}
            <Carosel>
            </Carosel>
            <CardEstate></CardEstate>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;