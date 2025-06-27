import React from 'react'

const SpotifyModal = () => {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      background: 'transparent'
    }}>
      <iframe 
        style={{
          borderRadius: '12px',
          width: '100%',
          height: '100%',
          border: 'none'
        }} 
        src="https://open.spotify.com/embed/track/5CqkgDH8QZjSqqI3HmYxDD?utm_source=generator" 
        frameBorder="0" 
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      />
    </div>
  )
}

export default SpotifyModal 