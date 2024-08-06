import { useEffect, useRef } from 'react';

const PhotoCollage = () => {
  const collageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (collageRef.current) {
        const scrollPosition = window.scrollY;
        collageRef.current.style.transform = `translateX(-${scrollPosition / 2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden h-64 relative">
      <div ref={collageRef} className="flex space-x-4 absolute">
        {[
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
          'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
          'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
          'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg',
          'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg',
          'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
          'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg',
          'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Stock image ${index + 1}`}
            className="w-64 h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCollage;
