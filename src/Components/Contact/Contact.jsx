const Contact = () => {
    return (
        <>
            <div className="relative">
                <img className='w-screen h-96' src="contact.jpg" alt="" />
                <div className="absolute top-20 left-1/4 md:top-16 md:left-1/3 lg:top-28 lg:left-1/3 lg:p-4 text-white p-6 ">
                    <h2 className="text-4xl md:text-6xl lg:text-8xl text-white ">Contact</h2>
                </div>
            </div>
            <div className="text-center mt-8 lg:mt-12 p-5">
                <h1 className="text-2xl  text-sky-950 font-bold mt-2">Touch With Brightest Luxury</h1>
                <p className="text-black content-center ">Elevate your communication experience with our exclusive contact page, <br /> designed for seamless interaction with our discerning clientele. Connect effortlessly for <br /> inquiries, assistance, or esteemed collaboration opportunities in the realm of luxury real estate.</p>
            </div>
            <div className="lg:mb-28 mb-16 lg:mt-16 mt-12">
                <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold text-sky-950">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Beverly Hills, California</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>contact@brightestluxury.com</span>
                                </p>
                            </div>
                        </div>
                        <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-sky-950 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-sky-950 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-sky-950 dark:bg-gray-100"></textarea>
                            </label>
                            <button type="button" className="self-center w-full font-bold px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75  dark:border-sky-950 dark:bg-sky-100 dark:text-sky-950 hover:dark:text-gray-50 focus:dark:ring-sky-200 hover:dark:ring-sky-950 hover:dark:bg-sky-800">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;