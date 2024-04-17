import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
                    </div>
                    <a rel="noopener noreferrer" href="#">See All</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>6 min ago</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
