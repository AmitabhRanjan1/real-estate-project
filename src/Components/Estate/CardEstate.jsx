import { useState, useEffect } from "react";
import CardDesign from "./CardDesign";

const CardEstate = () => {

    const [estate, setEstate] = useState([]);
    console.log(estate);

    useEffect(() => {
        fetch('/public/Json/Luxury.json')
            .then(res => res.json())
            .then(data => setEstate(data))
    }, [])

    return (
        <div>
            
             <div className="space-y-2 text-center m-5 lg:m-16">
                <h2 className="text-3xl font-bold text-[#0E46A3]">Luxury</h2>
                <p className="lg:text-xl md:text-lg sm:text-sm">Experience luxury redefined. Discover our exquisite properties, each a masterpiece of elegance <br />and refinement. From sleek penthouses to secluded villas, every home promises an unparalleled lifestyle <br />of sophistication and indulgence.</p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 p-5 lg:p-10">
            {
                estate.map((luxury) =>
                (<CardDesign key={luxury.id}
                    luxury={luxury}
                ></CardDesign>
                ))
            }
            </div>
        </div>
    );
};

export default CardEstate;