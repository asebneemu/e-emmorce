/* eslint-disable react/no-unescaped-entities */
export default function AboutText() {
    return (
        <div className="w-full flex justify-center my-20">
            {/* Yüzde 90 genişliğe sahip div */}
            <div className="w-[85%]">
                {/* Sola yaslı, büyük "About Us" başlığı */}
                <h3 className="text-4xl font-bold mb-8 text-left">About Us</h3>

                {/* Paragrafların yer aldığı div, yan yana olacak şekilde flex yapısında */}
                <div className="w-full flex 3xs:flex-col md:flex-row gap-40">
                    {/* İlk paragraf sol tarafta, yüzde 60 genişlikte */}
                    <div className="3xs:w-full md:w-[40%] flex flex-col justify-start">
                        <p className="text-lg">
                        Sputnik olarak, kurulduğumuz günden bu yana modern tasarım ve yüksek kaliteyi bir araya getirerek giyimde özgünlük arayanların yanında olduk. Moda dünyasında farklı bir bakış açısı sunmayı hedefleyen Sputnik, sadece kıyafetleri değil, aynı zamanda tarzı ve duruşu da tasarlıyor. Her koleksiyonumuz, şehrin dinamizmi ile sade ve zarif çizgilerin buluşma noktasını yansıtıyor. Bizimle, kendinizi ifade edebileceğiniz, özgün ve şık bir gardıroba sahip olabilirsiniz.<br /> <br /> Sputnik markası, ilhamını evrenin sonsuz genişliğinden alıyor. Her bir parçamız, kozmik temalardan ve özgürlük arayışından esinlenerek tasarlanıyor. Giyimdeki bu özgürlüğü yakalamak isteyenler için her koleksiyonumuzu benzersiz detaylarla zenginleştiriyoruz. Sadece bir giyim markası değil, aynı zamanda modern yaşam tarzının bir yansımasıyız. Sputnik ile sınırları zorlayan ve özgürlüğe yolculuk eden bir moda deneyimi yaşayın.
                        </p>
                    </div>

                    {/* İkinci paragraf sağ tarafta, yüzde 40 genişlikte */}
                    <div className="3xs:w-full md:w-[40%] flex items-center justify-end">
                        <p className="text-lg">
                        Sputnik olarak, ürünlerimizin kalitesinden ödün vermeden, sürdürülebilir bir üretim anlayışını benimsiyoruz. Kumaş seçiminden işçilik detaylarına kadar her aşamada çevreye saygılı ve sorumlu davranıyoruz. Üretim sürecinde doğayı korumayı, geri dönüştürülebilir malzemeler kullanmayı ve minimum atıkla çalışmayı ilke edindik. Sputnik ürünleri, uzun yıllar giyebileceğiniz ve kendinizi iyi hissedebileceğiniz şekilde üretiliyor. <br /> <br />Sputnik olarak, müşterilerimizle yalnızca bir satış ilişkisi kurmayı değil, onları bir aile gibi görmeyi amaçlıyoruz. Her müşteri bizim için kıymetli ve her birine kişisel bir dokunuşla hizmet vermek önceliğimizdir. Müşteri memnuniyetini esas alarak, onlara ihtiyaçları doğrultusunda en iyi önerileri sunuyor, modayı yaşam tarzlarına uygun hale getiriyoruz. Sputnik ailesine katılarak, özgün stilinizi yaratmanın keyfini çıkarabilirsiniz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
