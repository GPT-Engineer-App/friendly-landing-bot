import { useState, useEffect } from 'react';
import ScrollingGallery from '../components/ScrollingGallery';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Index = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-8xl font-bold mb-4">Hey! I'm Eito.</h1>
        <p className="text-4xl font-semibold">
          I'm building Hackbots at GatlingX{showCursor ? '|' : ' '}
        </p>
      </div>

      <ScrollingGallery />

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl mx-auto p-4 space-y-8">
          <h2 className="text-6xl font-bold mb-8">Back when I was a ballerina</h2>
          <p className="text-xl mb-6">
            and studying applied math (among other things) at Harvard, I had a nasty habit of letting everything bleed into
            everything else. I'd go around telling anyone who'd listen that you only needed half the torque for the same number of
            turns or that your center of mass was sitting in your left arm when you whipped it out like that. I'm no longer performing
            and hopefully way less obnoxious now, but the drive for precision has stuck with me. I like making problems legible.
          </p>
          <p className="text-xl mb-6">
            Right now, I'm spending a lot of time thinking about how we can reshape
            media culture in ways that bring creators and their communities into
            alignment.
          </p>
          <p className="text-xl mb-6">
            Related obsessions include: player owned economies, firm DAO-level coordination, and fair distribution. If you're
            working on something in or between these spaces, please
          </p>
          <p className="text-6xl font-bold text-yellow-400 mb-8">drop me a line.</p>
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

      <footer className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto flex justify-center space-x-8">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
