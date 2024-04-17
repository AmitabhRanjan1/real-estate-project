

const Gallary = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Khtr6Kc/imagereader-1.webp" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/VYR8QQ8/imagereader-4.webp" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/PCmqjDS/imagereader.webp" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/THB1xq1/download-1.jpg" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallary;