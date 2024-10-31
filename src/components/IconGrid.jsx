const IconGrid = () => {
  const icons = [
    'icons/hooli.png',
    'icons/lyft.png',
    "icons/pied-piper-hat.png",
    'icons/stripe.png',
    'icons/aws.png',
    'icons/reddit.png'
  ];

  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-36 xl:px-20 xl:mx-10 items-center justify-center p-4">
      {icons.map((icon, index) => (
        <div key={index} className="m-2">
          <img src={icon} alt={`icon-${index}`} className="lg:w-[140px] h-[140px] md:w-[80px] h-[80px] filter grayscale-50" />
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
