import { useState, useEffect } from 'react';

const Index = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-6xl font-bold mb-4">Hey! I'm Eito.</h1>
        <p className="text-3xl font-semibold mb-8">I'm building Hackbots at GatlingX{showCursor ? '|' : ' '}</p>
        
        <p className="text-xl mb-6">
          Right now, I'm spending a lot of time thinking about how we can reshape
          media culture in ways that bring creators and their communities into
          alignment.
        </p>
        
        <p className="text-xl mb-6">
          Related obsessions include: player owned economies, firm DAO-level coordination, and fair distribution. If you're
          working on something in or between these spaces, please
        </p>
        
        <p className="text-4xl font-bold text-yellow-400 mb-8">drop me a line.</p>
        
        <p className="text-xl">
          Previously, I spent time as a HoloLens engineer, consulted for the Air Force's leading software factory, and played a
          small role in constructing a billion person macroeconomy as an App Store PM. You can find my full resume on{' '}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn
          </a>{' '}
          lol.
        </p>
      </div>
    </div>
  );
};

export default Index;
