import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";  // Oynatma ve duraklatma ikonları
import video from "../../assets/about-video.mp4"

export default function AboutVideo() {
    const videoRef = useRef(null);  // Video referansı
    const [isPlaying, setIsPlaying] = useState(false);  // Videonun oynayıp oynamadığını kontrol eden state

    const handleVideoPlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();  // Video duraklatma
            } else {
                videoRef.current.play();  // Video oynatma
            }
            setIsPlaying(!isPlaying);  // Oynatma durumunu tersine çevir
        }
    };

    return (
        <div className="w-[75%] mx-auto relative flex justify-center items-center h-[500px] my-20">
            {/* Video arka planı */}
            <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                src={video}  // Videonun URL'sini buraya koyun
                type="video/mp4"
                loop
                muted
            />

            {/* Oynatma/Duraklatma butonu */}
            <div 
                className="relative z-10 flex justify-center items-center w-20 h-20 bg-blue-500 rounded-full cursor-pointer"
                onClick={handleVideoPlayPause}
            >
                {isPlaying ? (
                    <FaPause className="text-white text-4xl" /> 
                ) : (
                    <FaPlay className="text-white text-4xl" /> 
                )
            }
            </div>
        </div>
    );
}
