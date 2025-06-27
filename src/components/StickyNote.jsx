import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const StickyNote = ({ id, initialPosition, initialContent, onUpdate, readOnly = false, links = {} }) => {
  const [content, setContent] = useState(initialContent)
  const [isEditing, setIsEditing] = useState(false)
  const textareaRef = useRef(null)

  // Mobil cihaz kontrolü
  const isMobile = () => window.innerWidth <= 768

  const handleDoubleClick = () => {
    if (!readOnly && !isMobile()) {
      setIsEditing(true)
    }
  }

  // Mobilde single tap için
  const handleClick = () => {
    if (!readOnly && isMobile()) {
      setIsEditing(true)
    }
  }

  const handleBlur = () => {
    setIsEditing(false)
    onUpdate(id, content)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsEditing(false)
      onUpdate(id, content)
    }
  }

  const handleLinkClick = (e, linkText) => {
    e.stopPropagation()
    e.preventDefault()
    
    if (links[linkText]) {
      window.open(links[linkText], '_blank')
    }
  }

  // Touch event handlers
  const handleTouchStart = (e) => {
    if (isMobile()) {
      e.target.style.touchAction = 'manipulation'
    }
  }

  const renderContentWithLinks = (text) => {
    if (!readOnly) return text

    const lines = text.split('\n')
    
    // Logo mapping
    const logoMap = {
      'GitHub': '/github.png',
      'Instagram': '/insta.png',
      'LinkedIn': '/linkedin.png'
    }
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim()
      const isLink = links[trimmedLine]
      const logo = logoMap[trimmedLine]
      
      return (
        <div key={index} style={{ marginBottom: index < lines.length - 1 ? '12px' : '0' }}>
          {isLink ? (
            <span
              onClick={(e) => handleLinkClick(e, trimmedLine)}
              onTouchEnd={(e) => {
                e.preventDefault()
                handleLinkClick(e, trimmedLine)
              }}
              style={{
                color: '#2c2c2c',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: isMobile() ? '14px' : '16px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile() ? '6px 0' : '8px 0',
                gap: isMobile() ? '6px' : '8px',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'rgba(0,0,0,0.1)',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                if (!isMobile()) {
                  e.target.style.opacity = '0.7'
                  e.target.style.transform = 'scale(1.05)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile()) {
                  e.target.style.opacity = '1'
                  e.target.style.transform = 'scale(1)'
                }
              }}
            >
              {logo && (
                <img 
                  src={logo} 
                  alt={trimmedLine}
                  style={{
                    width: isMobile() ? '18px' : '20px',
                    height: isMobile() ? '18px' : '20px',
                    borderRadius: '4px',
                    objectFit: 'contain',
                    pointerEvents: 'none'
                  }}
                />
              )}
              {trimmedLine}
            </span>
          ) : (
            <span style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
              fontSize: isMobile() ? '14px' : '16px',
              color: '#2c2c2c'
            }}>
              {trimmedLine}
            </span>
          )}
        </div>
      )
    })
  }

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.select()
    }
  }, [isEditing])

  return (
    <motion.div
      className="sticky-note"
      drag={!isMobile() || !readOnly}
      dragMomentum={false}
      dragElastic={0}
      whileHover={!isMobile() ? { scale: 1.02 } : {}}
      whileTap={isMobile() ? { scale: 0.98 } : {}}
      whileDrag={!isMobile() ? { 
        scale: 1.05, 
        cursor: 'grabbing',
        zIndex: 1000
      } : {}}
      initial={initialPosition}
      style={{
        position: 'absolute',
        cursor: isMobile() ? 'pointer' : 'grab',
        touchAction: isMobile() ? 'manipulation' : 'none',
        WebkitTapHighlightColor: 'transparent'
      }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onTouchStart={handleTouchStart}
    >
      <div className="sticky-note-content">
        {isEditing && !readOnly ? (
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="sticky-note-textarea"
            placeholder="Not yazın..."
            style={{
              fontSize: isMobile() ? '14px' : '16px',
              padding: isMobile() ? '8px' : '10px',
              touchAction: 'manipulation'
            }}
          />
        ) : (
          <div 
            className="sticky-note-text"
            style={{
              fontSize: isMobile() ? '12px' : '16px',
              padding: isMobile() ? '8px' : '10px'
            }}
          >
            {/* -"notlar"- */}
            {readOnly ? (
              <div style={{ 
                whiteSpace: 'pre-wrap', 
                wordWrap: 'break-word',
                textAlign: 'center',
                paddingTop: isMobile() ? '5px' : '10px'
              }}>
                {renderContentWithLinks(content || "İçerik yok")}
              </div>
            ) : (
              content || (isMobile() ? "Düzenlemek için dokunun" : "Düzenlemek için çift tıklayın")
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default StickyNote 