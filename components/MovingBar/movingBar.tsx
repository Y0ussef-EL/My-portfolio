"use client"; // Required for using hooks like useState and useEffect

import { InfiniteMovingCards } from './../ui/infinite-moving-cards';
import { useState, useEffect } from 'react'; // Import hooks

const MovingBar = () => {
  // 1. Create state to store the tech list
  const [tech, setTech] = useState([]);

  // 2. Fetch the data from the public folder when the component mounts
  useEffect(() => {
    fetch('/data/techItems.json') // The path is relative to the root (public)
      .then((response) => response.json())
      .then((data) => {
        setTech(data); // 3. Set the data in state
      })
      .catch((error) => console.error("Error fetching techItems.json:", error));
  }, []); // The empty array [] means this effect runs once

  // 4. (Optional) Don't render the component until the data is loaded
  if (tech.length === 0) {
    return null; // Or a loading spinner
  }

  return (
    <div className="h-fit bg-transparent rounded-md flex flex-col antialiased dark:bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={tech} // 5. Pass the state to the component
        direction="right"
        speed="fast"
      />
    </div>
  );
}

export { MovingBar };