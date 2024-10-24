import React from "react";

export default function CenteredText() {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center my-20">
            {/* H1 ve P etiketleri alt alta ve ortalanmış */}
            <h1 className="text-4xl font-bold mb-4 text-center">Big Companies Are Here</h1>
            <p className="text-lg text-gray-600 text-center">
                Discover the world's leading businesses and their groundbreaking innovations.
            </p>
        </div>
    );
}
