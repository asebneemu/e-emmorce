import { useState } from 'react';

export default function ProductDetail() {
    const [activeIndex, setActiveIndex] = useState(0); // Aktif başlık indexi

    // Başlıklar ve içerikleri
    const titles = ["Ürün Özellikleri", "Kullanım Talimatları", "Garanti ve İade"];
    const paragraphs = [
        "Bu ürün, yüksek kaliteli malzemelerden üretilmiştir. Su geçirmez özelliği sayesinde dış ortamlarda güvenle kullanılabilir. Ayrıca, hafif ve taşınabilir tasarımıyla her zaman yanınızda taşıyabilirsiniz. Enerji tasarruflu olması, uzun süreli kullanım avantajı sağlar. Bu sayede, ürün kullanımı sırasında ekstra maliyetlerden kaçınarak tasarruf edebilirsiniz. Kullanıcı dostu arayüzü, her yaş grubundan insanın rahatlıkla kullanabilmesini sağlar. İleri teknoloji ile üretilen bu ürün, sadece işlevselliğiyle değil, aynı zamanda estetik tasarımıyla da dikkat çekmektedir. Kısa sürede birçok kişinin favorisi haline gelen bu ürün, çeşitli renk seçenekleriyle kullanıcıların beğenisine sunulmuştur. Taşınabilirliği sayesinde, seyahatlerinizde bile yanınızda taşıyabilir, ihtiyaç duyduğunuz her an kullanabilirsiniz.",
        
        "Ürünü kullanmadan önce talimatları dikkatlice okuyun. Cihazın doğru bir şekilde çalışabilmesi için, kutunun içinde yer alan aksesuarları ve parçaları eksiksiz bir şekilde kullanmalısınız. Ürünle birlikte verilen şarj cihazını kullanarak ürünü şarj edin ve tamamen dolduğundan emin olun. Cihazı kullanmaya başlamadan önce, ilk şarjın tam olarak yapılması önerilmektedir. Ürün kullanımında dikkat edilmesi gereken önemli noktalar bulunmaktadır. Herhangi bir sorunda ürünle birlikte verilen kullanım kılavuzuna başvurabilirsiniz. Ürünü uzun süre kullanmak için bakım ve temizlik talimatlarına da uyulmalıdır. Ayrıca, ürünü sıcak ve nemli ortamlardan uzak tutmak, ürün ömrünü uzatacaktır. Cihazın çalışmasında sorun yaşarsanız, lütfen yetkili servise başvurun.",
        
        "Bu ürün 2 yıl garantilidir. Garanti süresi içinde üründe meydana gelebilecek üretim hataları için ücretsiz onarım ve değişim hizmeti sunulmaktadır. Ürünün iade işlemleri, satın alım tarihinden itibaren 14 gün içinde yapılmalıdır. İade işlemi için ürünün kutusu, belgeleri ve aksesuarları ile birlikte geri gönderilmesi gerekmektedir. Garanti kapsamındaki işlemler için lütfen ürün faturasını saklayın. Garanti süresi dolduktan sonra, teknik destek almak için servis sağlayıcınızla iletişime geçebilirsiniz. Ürününuzun güvenli bir şekilde kullanılabilmesi için, iade süreçlerini dikkatlice takip edin. Ürününüzle ilgili yaşadığınız sorunlar için müşteri hizmetlerimizle iletişime geçmekten çekinmeyin. Herhangi bir sorunuz olduğunda, destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır."
    ];

    return (
        <div className="flex flex-col items-center p-8 gap-10">
            {/* Başlıklar Divi */}
            <div className="flex space-x-8 mb-4">
                {titles.map((title, index) => (
                    <button
                        key={index}
                        className="text-2xl font-bold text-black hover:text-silver focus:outline-none transition duration-300" // Başlık ayarları
                        onClick={() => setActiveIndex(index)} // Başlık tıklandığında aktif indexi güncelle
                        style={{ textDecoration: 'none' }} // Alt çizgi kaldır
                    >
                        {title}
                    </button>
                ))}
            </div>

            {/* Paragraflar Divi */}
            <div className="w-[55%] mx-auto">
                {paragraphs.map((paragraph, index) => (
                    <p
                        key={index}
                        className={`text-base text-gray-700 ${activeIndex === index ? 'block' : 'hidden'}`} // Aktif indexe göre görünürlük ayarı
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
