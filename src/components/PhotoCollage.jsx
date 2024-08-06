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
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <img
            key={num}
            src={`https://source.unsplash.com/random/400x300?sig=${num}`}
            alt={`Random image ${num}`}
            className="w-64 h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCollage;
