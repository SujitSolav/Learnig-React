import React, { useState } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [link, setLink] = useState("");
  const [images, setImages] = useState([
    'https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-thumb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-thumb.jpg'
  ]);

  const goToPreviousSlide = () => {
    setCurrentSlide((slide) => (slide === 0 ? images.length - 1 : slide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((slide) => (slide === images.length - 1 ? 0 : slide + 1));
  };
  const handleSubmit= (e)=>{
    e.preventDefault();
    const updatedImages = [...images, link];
    setImages(updatedImages);
    setLink(""); 
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '700px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Image Slider</h1>
      <div style={{ position: 'relative' }}>
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            outline: 'none'
          }}
          onClick={goToPreviousSlide}
        >
          Previous
        </button>
        <img
          style={{ height: '400px', width: '700px', objectFit: 'cover' }}
          src={images[currentSlide]}
          alt=''
        />
        <button
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            outline: 'none'
          }}
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="">Paste Image link  <input value={link} onChange={(e)=>{setLink(e.target.value)}} type="text" /></label>
      <button type='submit'> Submit</button>
      </form>
    </div>  
  );
}

export default Slider;
