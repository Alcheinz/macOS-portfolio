import React from 'react'
import { motion } from 'framer-motion'

const Dock = ({ onAppClick, openApps = [] }) => {
  // Mobil cihaz kontrolü
  const isMobile = () => window.innerWidth <= 768

  const dockApps = [
    { 
      id: 'finder', 
      name: 'Finder',
      iconPath: './finder.png'
    },
    { 
      id: 'safari', 
      name: 'Safari',
      iconPath: './safari.png'
    },
    { 
      id: 'mail', 
      name: 'Mail',
      iconPath: './mail.png'
    },
    { 
      id: 'messages', 
      name: 'Messages',
      iconPath: './messages.png'
    },
    { 
      id: 'spotify', 
      name: 'Spotify',
      iconPath: './spotify.png'
    }
  ]

  const handleImageError = (e, appName) => {
    console.log(`Icon failed to load: ${e.target.src}`)
    e.target.style.display = 'none'
    const fallback = e.target.parentNode.querySelector('.icon-fallback')
    if (fallback) {
      fallback.style.display = 'flex'
    }
  }

  const handleAppClick = (appId) => {
    if (onAppClick) {
      onAppClick(appId)
    }
  }

  // Touch event handlers
  const handleTouchStart = (e) => {
    if (isMobile()) {
      e.target.style.touchAction = 'manipulation'
    }
  }

  // Responsive hover animations
  const getHoverAnimation = () => {
    if (isMobile()) {
      return {}
    }
    return {
      scale: 1.6,
      y: -16,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.15
      }
    }
  }

  const getTapAnimation = () => {
    return {
      scale: isMobile() ? 0.9 : 1.4,
      y: isMobile() ? 0 : 0,
      transition: { duration: 0.1 }
    }
  }

  return (
    <div className="dock-container">
      <motion.div 
        className="dock"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {dockApps.map((app, index) => (
          <motion.div
            key={app.id}
            className="dock-icon"
            whileHover={getHoverAnimation()}
            whileTap={getTapAnimation()}
            animate={{
              scale: 1,
              y: 0
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.2
            }}
            title={app.name}
            style={{
              transformOrigin: 'bottom center',
              position: 'relative',
              cursor: 'pointer',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent'
            }}
            onClick={() => handleAppClick(app.id)}
            onTouchStart={handleTouchStart}
          >
            <img 
              src={app.iconPath} 
              alt={app.name}
              draggable={false}
              onError={(e) => handleImageError(e, app.name)}
              onLoad={() => console.log(`Icon loaded: ${app.iconPath}`)}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: isMobile() ? '14px' : '10px',
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            />
            <div className="icon-fallback" style={{ display: 'none' }}>
              {app.name.charAt(0)}
            </div>
            
            {/* Açık uygulama noktası */}
            {openApps.includes(app.id) && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  bottom: isMobile() ? '-6px' : '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isMobile() ? '5px' : '4px',
                  height: isMobile() ? '5px' : '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '50%',
                  boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
                  pointerEvents: 'none'
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Dock 