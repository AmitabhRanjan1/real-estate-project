import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallary from "../../Gallary/Gallary";

const CardDetails = () => {
    const { id } = useParams();
    const [estate, setEstate] = useState({});
    console.log(estate);

    useEffect(() => {
        fetch("Luxury.json")
            .then(res => res.json())
            .then(data => {
                const selectedEstate = data.find(item => item.id === parseInt(id));
                if (selectedEstate) {
                    setEstate(selectedEstate);
                } else {
                    console.error(`Estate with ID ${id} not found.`);
                }
            })
            .catch(error => console.error("Error fetching estate details:", error));
    }, [id]);

    return (
        <div>
            <div className="w-9/12 mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Property Details</a>
                    </div>
                    <a rel="noopener noreferrer" href="/buy">See All</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src="https://i.ibb.co/m6FD9gw/imagereader-2.webp" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        {/* <div className="flex items-center text-xs">
                            <span>6 min ago</span>
                        </div> */}
                    </div>
                    <Gallary></Gallary>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">Oceanfront Villa</h3>
                            <br />
                            <span>Malibu, California</span>
                        </a>
                        <p className="leading-snug dark:text-gray-600">Perched along the pristine coastline of Malibu, this oceanfront villa offers an unparalleled luxury living experience. With six spacious bedrooms, seven bathrooms, and a three-car garage, this stunning property epitomizes coastal elegance. The infinity pool and private beach access provide the perfect retreat for relaxation, while the spa and home theater offer endless entertainment possibilities. Built in 2014, this modern masterpiece combines exquisite design with breathtaking views, making it the ultimate luxury retreat.</p>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">Mountain Retreat Mansion</h3>
                            <br />
                            <span>Aspen, Colorado</span>
                        </a>
                        <p className="leading-snug dark:text-gray-600">Nestled amidst the scenic wilderness of Aspen, Colorado, this magnificent mountain retreat mansion offers the epitome of luxury living. With eight spacious bedrooms, ten bathrooms, and a four-car garage, this grand estate exudes opulence at every turn. Enjoy the convenience of ski-in/ski-out access, relax in the indoor pool, or unwind in the wine cellar and fitness center. Built in 2012, this sprawling mansion combines rustic charm with modern amenities, creating a truly extraordinary mountain escape.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
