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
    <div className="flex flex-col gap-10 md:flex-row md:gap-24 items-center justify-center p-4">
      {icons.map((icon, index) => (
        <div key={index} className="m-2">
          <img src={icon} alt={`icon-${index}`} className="w-[140px] h-[140px] filter grayscale-50" />
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
