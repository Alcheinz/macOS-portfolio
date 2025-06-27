import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MenuBar from './components/MenuBar'
import Desktop from './components/Desktop'
import Dock from './components/Dock'
import Modal from './components/Modal'
import ProjectsModal from './components/ProjectsModal'
import AboutModal from './components/AboutModal'
import WorkExperienceModal from './components/WorkExperienceModal'
import EducationModal from './components/EducationModal'
import SpotifyModal from './components/SpotifyModal'
import FinderModal from './components/FinderModal'
import './App.css'

function App() {
  const [activeModals, setActiveModals] = useState([])
  const [openApps, setOpenApps] = useState(['finder']) // Finder her zaman açık

  const getModalPosition = (modalType, index) => {
    // Merkez referanslı pozisyonlar (0,0 = ekran merkezi)
    const basePositions = {
      projects: { x: -200, y: -100 },
      about: { x: -100, y: -50 },
      work: { x: 0, y: 0 },
      education: { x: 100, y: 50 },
      spotify: { x: -150, y: -75 },
      finder: { x: -250, y: -150 }
    }
    
    // Her yeni modal biraz kaydırılsın (aynı türden birden fazla açılırsa)
    const offset = index * 40
    return {
      x: basePositions[modalType].x + offset,
      y: basePositions[modalType].y + offset
    }
  }

  const openModal = (modalType) => {
    // Aynı türde modal zaten açık mı kontrol et
    const existingModal = activeModals.find(modal => modal.type === modalType)
    if (existingModal) {
      // Varolan modalı öne getir
      setActiveModals(prev => [
        ...prev.filter(modal => modal.id !== existingModal.id),
        { ...existingModal, zIndex: Date.now() }
      ])
      return
    }

    // Yeni modal ekle
    const newModal = {
      id: Date.now(),
      type: modalType,
      position: getModalPosition(modalType, activeModals.length),
      zIndex: 1000 + activeModals.length
    }
    
    setActiveModals(prev => [...prev, newModal])
  }

  const toggleModal = (modalType) => {
    // Spotify için özel toggle işlemi - açık ise kapat, kapalı ise aç
    const existingModal = activeModals.find(modal => modal.type === modalType)
    if (existingModal) {
      closeModal(existingModal.id)
    } else {
      openModal(modalType)
    }
  }

  const closeModal = (modalId) => {
    setActiveModals(prev => prev.filter(modal => modal.id !== modalId))
  }

  const bringToFront = (modalId) => {
    const maxZIndex = Math.max(...activeModals.map(modal => modal.zIndex), 1000)
    setActiveModals(prev => 
      prev.map(modal => 
        modal.id === modalId 
          ? { ...modal, zIndex: maxZIndex + 1 }
          : modal
      )
    )
  }

  const getModalTitle = (modalType) => {
    switch(modalType) {
      case 'projects': return 'Projects'
      case 'about': return 'About Me'
      case 'work': return 'Work Experience'
      case 'education': return 'Education'
      case 'spotify': return 'Spotify'
      case 'finder': return 'Finder'
      default: return 'Window'
    }
  }

  const renderModalContent = (modalType) => {
    switch(modalType) {
      case 'projects': return <ProjectsModal />
      case 'about': return <AboutModal />
      case 'work': return <WorkExperienceModal />
      case 'education': return <EducationModal />
      case 'spotify': return <SpotifyModal />
      case 'finder': return <FinderModal />
      default: return null
    }
  }

  const handleAppClick = (appId) => {
    if (appId === 'spotify') {
      toggleModal('spotify')
      // Spotify açık/kapalı durumunu güncelle
      setOpenApps(prev => {
        const isOpen = prev.includes('spotify')
        if (isOpen) {
          return prev.filter(app => app !== 'spotify')
        } else {
          return [...prev, 'spotify']
        }
      })
    } else if (appId === 'mail') {
      // Varsayılan mail uygulamasında e-mail gönderme için yönlendirme
      window.location.href = 'mailto:furkanklkn55@gmail.com'
    } else if (appId === 'safari') {
      // Google arama motoruna yeni sekmede yönlendirme
      window.open('https://www.google.com', '_blank')
      
      // Safari'yi açık uygulamalara ekle
      setOpenApps(prev => [...prev.filter(app => app !== 'safari'), 'safari'])
      
      // 5 saniye sonra Safari'yi kapat
      setTimeout(() => {
        setOpenApps(prev => prev.filter(app => app !== 'safari'))
      }, 5000)
    } else if (appId === 'finder') {
      toggleModal('finder')
    }
    // Diğer uygulamalar için gelecekte buraya eklenebilir
  }

  return (
    <div className="app">
      <MenuBar />
      <Desktop onFolderDoubleClick={openModal} />
      
      <AnimatePresence mode="sync">
        {activeModals.map((modal) => (
          <Modal 
            key={modal.id}
            onClose={() => closeModal(modal.id)}
            onFocus={() => bringToFront(modal.id)}
            title={getModalTitle(modal.type)}
            initialPosition={modal.position}
            zIndex={modal.zIndex}
          >
            {renderModalContent(modal.type)}
          </Modal>
        ))}
      </AnimatePresence>

      <Dock onAppClick={handleAppClick} openApps={openApps} />
    </div>
  )
}

export default App
