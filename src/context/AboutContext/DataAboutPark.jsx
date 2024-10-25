
export default function DataAboutPark() {
    return (
        <div className="w-[80%] mx-auto py-20">
            {/* Ana kapsayıcı div */}
            <div className="flex flex-row gap-6 justify-center items-center">
                {/* İlk div */}
                <div className="w-[18%] p-6 text-center">
                    <h1 className="lg:text-7xl font-bold mb-4 3xs:text-4xl">15k</h1>
                    <p className="md:text-lg 3xs:text-base">
                        Happy Customers
                    </p>
                </div>

                {/* İkinci div */}
                <div className="w-[18%] p-6 text-center">
                    <h1 className="lg:text-7xl font-bold mb-4 3xs:text-4xl">150k</h1>
                    <p className="md:text-lg 3xs:text-base">
                        Monthly Visitors
                    </p>
                </div>

                {/* Üçüncü div */}
                <div className="w-[18%] p-6 text-center">
                    <h1 className="lg:text-7xl font-bold mb-4 3xs:text-4xl">15</h1>
                    <p className="md:text-lg 3xs:text-base">
                        Countries Worldwide
                    </p>
                </div>

                {/* Dördüncü div */}
                <div className="w-[18%] p-6 text-center">
                    <h1 className="lg:text-7xl font-bold mb-4 3xs:text-4xl">100+</h1>
                    <p className="md:text-lg 3xs:text-base">
                        Top Partners
                    </p>
                </div>
            </div>
        </div>
    );
}
