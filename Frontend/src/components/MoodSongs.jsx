import React from "react";
import { useState } from "react";

const MoodSongs = ({ songs }) => {
  const [isPlaying, setisPlaying] = useState();

  const handlePlayOrPause = (index) => {
    if (isPlaying === index) {
      setisPlaying(null);
    } else {
      setisPlaying(index);
    }
  };
  return (
    <div>
      <h2 className="text-white text-left text-3xl font-serif  pt-10 tracking-tight font-thin ">
        Recommended Songs
      </h2>
      <ul>
        {songs.map((song, index) => (
          <div
            key={index}
            className="text-white flex justify-between items-center py-2 border-b border-gray-700"
          >
            <div className="title flex flex-col items-start">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            {
              (isPlaying === index) &&
              <audio  style={{display:"none"}} src={song.audio} autoPlay={isPlaying === index}></audio>
            }
            <div className="play-pause-button">
              <button onClick={() => handlePlayOrPause(index)}>
                {isPlaying === index ? (
                  <i className="ri-pause-line text-2xl tracking-tighter"></i>
                ) : (
                  <i className="ri-play-circle-fill text-2xl tracking-tighter"></i>
                )}
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MoodSongs;
