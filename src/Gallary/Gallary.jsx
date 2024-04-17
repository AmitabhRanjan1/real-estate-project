

const Gallary = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="blog5.jpg" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="blog2.jpg" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="blog3.jpg" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="blog4.jpg" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallary;