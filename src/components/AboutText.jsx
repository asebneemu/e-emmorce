/* eslint-disable react/no-unescaped-entities */
export default function AboutText() {
    return (
        <div className="w-full flex justify-center my-20">
            {/* Yüzde 90 genişliğe sahip div */}
            <div className="w-[85%]">
                {/* Sola yaslı, büyük "About Us" başlığı */}
                <h3 className="text-4xl font-bold mb-8 text-left">About Us</h3>

                {/* Paragrafların yer aldığı div, yan yana olacak şekilde flex yapısında */}
                <div className="w-full flex">
                    {/* İlk paragraf sol tarafta, yüzde 60 genişlikte */}
                    <div className="w-[60%] flex flex-col justify-start">
                        <p className="text-lg">
                            We are a company that values excellence and innovation. Our team
                            works tirelessly to bring you the best products and services.
                        </p>
                    </div>

                    {/* İkinci paragraf sağ tarafta, yüzde 40 genişlikte */}
                    <div className="w-[40%] flex items-center justify-end">
                        <p className="text-lg">
                            Our mission is to create a lasting impact in the industry and
                            make our customers' lives better every day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
