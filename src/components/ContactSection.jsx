const ContactSection = () => {
    return (
        <div className="w-[80%] mx-auto py-14">
            {/* İçerik Bölümü */}
            <div className="flex gap-10 md:flex-row 3xs:flex-col">
                {/* İlk dört div - Başlıklar ve Paragraflar */}
                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <h2 className="text-xl font-semibold">Company Info</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <h2 className="text-xl font-semibold">Legal</h2>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Security</p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <h2 className="text-xl font-semibold">Features</h2>
                    <p>Feature 1</p>
                    <p>Feature 2</p>
                    <p>Feature 3</p>
                    <p>Feature 4</p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <h2 className="text-xl font-semibold">Resources</h2>
                    <p>Documentation</p>
                    <p>API Reference</p>
                    <p>Guides</p>
                    <p>Support</p>
                </div>

                {/* Beşinci div - Get in Touch */}
                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <h2 className="text-xl font-semibold">Get in Touch</h2>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-l-md p-2 flex-grow"
                        />
                        <button className="bg-blue-500 text-white p-2 rounded-r-md">Tıkla</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
