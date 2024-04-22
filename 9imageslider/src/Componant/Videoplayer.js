import React,{useState} from 'react';
function Videoplayer() {
    const [currentVideo, setCurrentVideo] = useState(1);

    const handleVideoChange = (videoNumber) => {
      setCurrentVideo(videoNumber);
    };
  
    return (
      <div>
        <h1>Video Player</h1>
        <div>
          <button onClick={() => handleVideoChange(1)}>Video 1</button>
          <button onClick={() => handleVideoChange(2)}>Video 2</button>
          <button onClick={() => handleVideoChange(3)}>Video 3</button>
        </div>
        <div>
          {currentVideo === 1 && (
            <video controls>
              <source src="https://www.youtube.com/watch?v=Xe8CkYZvCig" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {currentVideo === 2 && (
            <video controls>
              <source src="video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {currentVideo === 3 && (
            <video controls>
              <source src="video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    );
  };
  

export default Videoplayer;
