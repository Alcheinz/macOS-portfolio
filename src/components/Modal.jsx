import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Modal = ({ children, onClose, onFocus, title = "Window", initialPosition = { x: 0, y: 0 }, zIndex = 1000 }) => {
  // Mobil cihaz kontrolü
  const isMobile = () => window.innerWidth <= 768

  // Modal türüne göre optimal boyutlar
  const getOptimalSize = (title) => {
    if (isMobile()) {
      // Mobilde tüm modal'lar full screen benzeri
      return { 
        width: window.innerWidth - 20, 
        height: window.innerHeight - 100 
      }
    }

    switch(title) {
      case 'Projects':
        return { width: 600, height: 400 }
      case 'About Me':
        return { width: 700, height: 500 }
      case 'Work Experience':
        return { width: 650, height: 450 }
      case 'Education':
        return { width: 600, height: 350 }
      case 'Spotify':
        return { width: 400, height: 285 }
      case 'Finder':
        return { width: 800, height: 500 }
      default:
        return { width: 600, height: 400 }
    }
  }

  const [size, setSize] = useState(getOptimalSize(title))
  const [position, setPosition] = useState(isMobile() ? { x: 0, y: 0 } : initialPosition)
  const modalRef = useRef(null)

  // Modal açıldığında boyutunu optimize et
  useEffect(() => {
    const handleResize = () => {
      setSize(getOptimalSize(title))
      if (isMobile()) {
        setPosition({ x: 0, y: 0 })
      }
    }

    setSize(getOptimalSize(title))
    if (isMobile()) {
      setPosition({ x: 0, y: 0 })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [title])

  const handleModalClick = (e) => {
    e.stopPropagation()
    if (onFocus) {
      onFocus()
    }
  }

  const handleDragEnd = (event, info) => {
    // Mobilde drag'i devre dışı bırak
    if (isMobile()) return

    const newX = position.x + info.offset.x
    const newY = position.y + info.offset.y
    
    // Ekran sınırları içinde kalmayı sağla
    const clampedX = Math.max(-size.width/2 + 50, Math.min(newX, window.innerWidth - size.width/2 - 50))
    const clampedY = Math.max(-window.innerHeight/2 + 100, Math.min(newY, window.innerHeight/2 - 100))
    
    setPosition({ x: clampedX, y: clampedY })
  }

  const handleResize = (e) => {
    // Mobilde resize'ı devre dışı bırak
    if (isMobile()) return

    e.preventDefault()
    e.stopPropagation()
    
    const startX = e.clientX
    const startY = e.clientY
    const startWidth = size.width
    const startHeight = size.height
    
    const handleMouseMove = (e) => {
      const newWidth = Math.max(400, startWidth + (e.clientX - startX))
      const newHeight = Math.max(300, startHeight + (e.clientY - startY))
      setSize({ width: newWidth, height: newHeight })
    }
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  // Touch event handlers
  const handleTouchStart = (e) => {
    if (isMobile()) {
      e.target.style.touchAction = 'none'
    }
  }

  const handleTouchEnd = (e) => {
    if (isMobile()) {
      e.target.style.touchAction = 'auto'
    }
  }

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        zIndex: zIndex,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none'
      }}
    >
      <motion.div
        ref={modalRef}
        className="modal-window"
        drag={!isMobile()}
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={!isMobile() ? {
          left: -window.innerWidth/2 + 200,
          right: window.innerWidth/2 - 200,
          top: -window.innerHeight/2 + 150,
          bottom: window.innerHeight/2 - 150
        } : false}
        {...(!isMobile() && { x: position.x, y: position.y })}
        onDragEnd={handleDragEnd}
        initial={{ 
          scale: isMobile() ? 1 : 0.9, 
          opacity: 0
        }}
        animate={{ 
          scale: 1, 
          opacity: 1
        }}
        exit={{ scale: isMobile() ? 1 : 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
        onClick={handleModalClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          width: size.width,
          height: size.height,
          cursor: isMobile() ? 'default' : 'default',
          position: 'absolute',
          pointerEvents: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div 
          className="modal-header"
          style={{ 
            cursor: isMobile() ? 'default' : 'grab',
            touchAction: isMobile() ? 'manipulation' : 'none'
          }}
        >
          <div className="window-controls">
            <div 
              className="window-control close"
              onClick={onClose}
              style={{ 
                touchAction: 'manipulation',
                cursor: 'pointer'
              }}
            />
            <div 
              className="window-control minimize" 
              style={{ 
                display: isMobile() ? 'none' : 'block',
                touchAction: 'manipulation'
              }}
            />
            <div 
              className="window-control maximize" 
              style={{ 
                display: isMobile() ? 'none' : 'block',
                touchAction: 'manipulation'
              }}
            />
          </div>
          <div className="modal-title">{title}</div>
        </div>
        
        <div 
          className="modal-content" 
          style={{ 
            flex: 1,
            overflow: 'auto',
            touchAction: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {children}
        </div>
        
        {!isMobile() && (
          <div 
            className="resize-handle"
            onMouseDown={handleResize}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default Modal 