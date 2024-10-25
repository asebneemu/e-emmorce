import SepetimCartItem from './SepetimCartItem'; // Her bir ürün için kullanılacak bileşen

export default function SepetimCart({ cartItems }) {
    return (
        
        <div className="w-full p-4 py-10">
            <h2 className="text-5xl font-bold mb-4 text-center">Sepetim</h2>
            <div className="w-[80%] flex flex-wrap gap-4 mx-auto bg-gray-100 p-4 rounded-lg">
                {/* Sepetteki ürünleri dinamik olarak listele */}
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <SepetimCartItem
                            key={item.id}  // Benzersiz id'yi key olarak kullanıyoruz
                            id={item.id}  // Ürün id'sini gönderiyoruz
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            oldPrice={item.oldPrice}
                            newPrice={item.newPrice}
                        />
                    ))
                ) : (
                    <p className="text-center w-full">Sepetinizde ürün bulunmamaktadır.</p>
                )}
            </div>
        </div>
    );
}
