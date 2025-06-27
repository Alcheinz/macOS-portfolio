import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import StickyNote from './StickyNote'

const Desktop = ({ onFolderDoubleClick }) => {
  // Mobil cihaz kontrolü
  const isMobile = () => window.innerWidth <= 768

  // Responsive folder positions
  const getInitialPositions = () => {
    if (isMobile()) {
      return {
        projects: { x: 30, y: 80 },
        about: { x: 130, y: 80 },
        work: { x: 230, y: 80 },
        education: { x: 30, y: 180 }
      }
    }
    return {
      projects: { x: 50, y: 100 },
      about: { x: 180, y: 100 },
      work: { x: 310, y: 100 },
      education: { x: 440, y: 100 }
    }
  }

  const [folderPositions, setFolderPositions] = useState(getInitialPositions())

  // Sticky notes responsive positioning
  const getStickyNotePosition = () => {
    if (isMobile()) {
      return { x: window.innerWidth - 170, y: 280 }
    }
    return { x: window.innerWidth - 250, y: 120 }
  }

  // Sticky notes state'i
  const [stickyNotes, setStickyNotes] = useState([
    {
      id: 'note1',
      content: 'GitHub\nInstagram\nLinkedIn',
      position: getStickyNotePosition(),
      readOnly: true,
      links: {
        'GitHub': 'https://github.com/Alcheinz',
        'Instagram': 'https://www.instagram.com/furkanklkn4?igsh=bndyZXh2Y3k1aXBv&utm_source=qr',
        'LinkedIn': 'https://www.linkedin.com/in/furkanklkn/'
      }
    }
  ])

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setFolderPositions(getInitialPositions())
      setStickyNotes(prev => 
        prev.map(note => ({
          ...note,
          position: getStickyNotePosition()
        }))
      )
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const folders = [
    { 
      id: 'projects', 
      name: 'Projects', 
      icon: '/projects.png'
    },
    { 
      id: 'about', 
      name: 'About Me', 
      icon: '/personel.png'
    },
    { 
      id: 'work', 
      name: 'Work Experience', 
      icon: '/work.png'
    },
    { 
      id: 'education', 
      name: 'Education', 
      icon: '/edufolder.png'
    }
  ]

  const handleDragEnd = (event, info, folderId) => {
    // Mobilde drag'i sınırla
    if (isMobile()) return

    const currentPosition = folderPositions[folderId]
    const newX = currentPosition.x + info.offset.x
    const newY = currentPosition.y + info.offset.y
    
    // Ekran sınırları içinde kalmayı sağla
    const clampedX = Math.max(50, Math.min(newX, window.innerWidth - 120))
    const clampedY = Math.max(80, Math.min(newY, window.innerHeight - 200))
    
    setFolderPositions(prev => ({
      ...prev,
      [folderId]: {
        x: clampedX,
        y: clampedY
      }
    }))
  }

  // Folder click handler (mobilde single click, desktop'ta double click)
  const handleFolderClick = (folderId) => {
    if (isMobile()) {
      // Mobilde single click ile aç
      onFolderDoubleClick(folderId)
    }
  }

  const handleFolderDoubleClick = (folderId) => {
    if (!isMobile()) {
      // Desktop'ta double click ile aç
      onFolderDoubleClick(folderId)
    }
  }

  // Touch event handlers
  const handleTouchStart = (e) => {
    if (isMobile()) {
      e.target.style.touchAction = 'manipulation'
    }
  }

  // Sticky note content güncelleme fonksiyonu
  const updateStickyNote = (noteId, newContent) => {
    setStickyNotes(prev => 
      prev.map(note => 
        note.id === noteId 
          ? { ...note, content: newContent }
          : note
      )
    )
  }

  return (
    <div className="desktop">
      {folders.map((folder) => (
        <motion.div
          key={folder.id}
          className="desktop-folder"
          drag={!isMobile()}
          dragMomentum={false}
          dragElastic={0}
          onDragEnd={(event, info) => handleDragEnd(event, info, folder.id)}
          whileHover={!isMobile() ? { scale: 1.05 } : {}}
          whileTap={{ scale: 0.95 }}
          whileDrag={!isMobile() ? { 
            scale: 1.1, 
            cursor: 'grabbing',
            zIndex: 1000
          } : {}}
          onClick={() => handleFolderClick(folder.id)}
          onDoubleClick={() => handleFolderDoubleClick(folder.id)}
          onTouchStart={handleTouchStart}
          style={{
            position: 'absolute',
            left: folderPositions[folder.id].x,
            top: folderPositions[folder.id].y,
            cursor: isMobile() ? 'pointer' : 'grab',
            touchAction: isMobile() ? 'manipulation' : 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          <div className="folder-icon">
            <img 
              src={folder.icon} 
              alt={folder.name}
              draggable={false}
              style={{ 
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            />
          </div>
          <div className="folder-name">
            {folder.name}
          </div>
        </motion.div>
      ))}

      {/* Sticky Notes */}
      {stickyNotes.map((note) => (
        <StickyNote
          key={note.id}
          id={note.id}
          initialPosition={note.position}
          initialContent={note.content}
          onUpdate={updateStickyNote}
          readOnly={note.readOnly}
          links={note.links}
        />
      ))}
    </div>
  )
}

export default Desktop 