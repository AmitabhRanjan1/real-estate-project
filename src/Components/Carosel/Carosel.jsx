

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full relative">
                <div id="item1" className="carousel-item w-full relative">
                    <div className="absolute top-14 left-5 md:top-16 md:left-10 lg:top-20  lg:left-60 lg:p-4 text-sky-950 p-6 ">
                        <h1 className="text-3xl text-sky-950 font-bold">Luxury Penthouse</h1>
                        <p className="text-base  font-bold mt-2">
                            Stunning penthouse offering unparalleled city skyline views and luxury living.</p>
                        <a href="/">
                            <button className='bg-[#E1F7F5] text-sky-950 btn mt-4 font-bold text-base'>View</button>
                        </a>
                    </div>
                    <img src="https://i.ibb.co/m6FD9gw/imagereader-2.webp" className="w-full h-96" />

                </div>
                <div id="item2" className="carousel-item w-full relative">
                <div className="absolute top-14 left-5 md:top-16 md:left-10 lg:top-20  lg:left-60 lg:p-4 text-sky-950 p-6 ">
                        <h1 className="text-3xl text-sky-950 font-bold">Mountain Retreat Mansion</h1>
                        <p className="text-base  font-bold mt-2">
                        Magnificent mountain retreat mansion nestled in the scenic wilderness.</p>
                        <a href="/">
                            <button className='bg-[#E1F7F5] text-sky-950 btn mt-4 font-bold text-base'>View</button>
                        </a>
                    </div>
                    <img src="https://i.ibb.co/Khtr6Kc/imagereader-1.webp" className="w-full h-96" />

                </div>
                <div id="item3" className="carousel-item w-full relative">
                <div className="absolute top-14 left-5 md:top-16 md:left-10 lg:top-20  lg:left-60 lg:p-4 text-sky-950 p-6 ">
                        <h1 className="text-3xl text-sky-950 font-bold">Oceanfront Villa</h1>
                        <p className="text-base  font-bold mt-2">
                        Exquisite oceanfront villa with breathtaking views and luxurious amenities.</p>
                        <a href="/">
                            <button className='bg-[#E1F7F5] text-sky-950 btn mt-4 font-bold text-base'>View</button>
                        </a>
                    </div>
                    <img src="https://i.ibb.co/VYR8QQ8/imagereader-4.webp" className="w-full h-96" />

                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Carousel;
