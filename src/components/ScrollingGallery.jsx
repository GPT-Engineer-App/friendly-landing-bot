import { useEffect, useRef } from 'react';

const ScrollingGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const scrollPosition = window.scrollY;
        galleryRef.current.style.transform = `translateX(-${scrollPosition / 2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
  ];

  const texts = [
    { text: 'probably readin', color: 'text-orange-500' },
    { text: 'ncing or', color: 'text-red-700' },
    { text: 'MIA', color: 'text-yellow-300' },
  ];

  return (
    <div className="overflow-hidden h-screen relative">
      <div ref={galleryRef} className="flex whitespace-nowrap absolute top-0 left-0">
        {texts.map((textItem, index) => (
          <div key={index} className="inline-block">
            <div className={`text-9xl font-bold ${textItem.color}`}>{textItem.text}</div>
            <img
              src={images[index]}
              alt={`Gallery image ${index + 1}`}
              className="w-screen h-[calc(100vh-12rem)] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingGallery;
