import React, { useState } from 'react'
import ProjectsModal from './ProjectsModal'
import AboutModal from './AboutModal'
import WorkExperienceModal from './WorkExperienceModal'
import EducationModal from './EducationModal'

const FinderModal = () => {
  const [selectedFolder, setSelectedFolder] = useState('Projects')

  // Gerçek içerik render fonksiyonları
  const renderProjectsContent = () => <ProjectsModal />
  const renderAboutContent = () => <AboutModal />
  const renderWorkContent = () => <WorkExperienceModal />
  const renderEducationContent = () => <EducationModal />

  const renderDefaultContent = () => (
    <div style={{
      flex: 1,
      padding: '20px',
      overflow: 'auto',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '20px',
        justifyItems: 'center'
      }}>
        {[
          { name: 'Projects', icon: '/projects.png' },
          { name: 'About Me', icon: '/personel.png' },
          { name: 'Work Experience', icon: '/work.png' },
          { name: 'Education', icon: '/edufolder.png' }
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '12px 8px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              width: '100px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f8ff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
            onClick={() => setSelectedFolder(item.name)}
          >
            <div style={{
              marginBottom: '8px',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
              transform: 'scale(1)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
            }}
            >
              <img src={item.icon} alt={item.name} style={{ width: '48px', height: '48px' }} />
            </div>
            <span style={{
              fontSize: '12px',
              color: '#1d1d1f',
              lineHeight: '1.3',
              wordWrap: 'break-word',
              fontWeight: '400'
            }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  const sidebarSections = [
    {
      title: 'FAVORITES',
      items: [
        { id: 'Projects', name: 'Projects', icon: '/projects.png' },
        { id: 'About Me', name: 'About Me', icon: '/personel.png' },
        { id: 'Work Experience', name: 'Work Experience', icon: '/work.png' },
        { id: 'Education', name: 'Education', icon: '/edufolder.png' }
      ]
    }
  ]

  const renderMainContent = () => {
    switch(selectedFolder) {
      case 'Projects':
        return renderProjectsContent()
      case 'About Me':
        return renderAboutContent()
      case 'Work Experience':
        return renderWorkContent()
      case 'Education':
        return renderEducationContent()
      default:
        return renderDefaultContent()
    }
  }

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
      border: '1px solid #d1d1d1',
      borderRadius: '0 0 12px 12px',
      overflow: 'hidden'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '220px',
        backgroundColor: '#f7f7f7',
        borderRight: '1px solid #e5e5e5',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '8px'
      }}>
        <div style={{
          padding: '0 16px 8px 16px',
          borderBottom: '1px solid #d1d1d1',
          marginBottom: '8px'
        }}>
          <h3 style={{
            margin: '0',
            fontSize: '13px',
            fontWeight: '600',
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Favorites
          </h3>
        </div>

        {sidebarSections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginBottom: '16px' }}>
            <div style={{
              padding: '4px 16px 6px 16px',
              fontSize: '11px',
              fontWeight: '600',
              color: '#8e8e93',
              textTransform: 'uppercase',
              letterSpacing: '0.6px'
            }}>
              {section.title}
            </div>
            
            {section.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedFolder(item.id)}
                style={{
                  padding: '5px 16px 5px 12px',
                  cursor: 'pointer',
                  backgroundColor: selectedFolder === item.id ? '#007AFF' : 'transparent',
                  color: selectedFolder === item.id ? 'white' : '#1d1d1f',
                  borderRadius: selectedFolder === item.id ? '6px' : '0',
                  margin: selectedFolder === item.id ? '0 6px' : '0',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: selectedFolder === item.id ? '500' : '400'
                }}
                onMouseEnter={(e) => {
                  if (selectedFolder !== item.id) {
                    e.target.style.backgroundColor = '#f0f0f0'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFolder !== item.id) {
                    e.target.style.backgroundColor = 'transparent'
                  }
                }}
              >
                <img src={item.icon} alt={item.name} style={{ width: '16px', height: '16px' }} />
                {item.name}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff'
      }}>
        {/* Toolbar */}
        <div style={{
          height: '52px',
          backgroundColor: '#fbfbfb',
          borderBottom: '1px solid #e5e5e5',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: '8px'
        }}>
          <div style={{
            display: 'flex',
            gap: '6px'
          }}>
            <button style={{
              width: '28px',
              height: '28px',
              background: '#f0f0f0',
              border: '1px solid #d1d1d1',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#666'
            }}>
              ←
            </button>
            <button style={{
              width: '28px',
              height: '28px',
              background: '#f9f9f9',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              cursor: 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#ccc'
            }}>
              →
            </button>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #d1d1d1',
            borderRadius: '6px',
            padding: '6px 12px',
            fontSize: '13px',
            color: '#1d1d1f',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            {sidebarSections.flatMap(s => s.items).find(item => item.id === selectedFolder) && (
              <img 
                src={sidebarSections.flatMap(s => s.items).find(item => item.id === selectedFolder).icon} 
                alt={selectedFolder} 
                style={{ width: '16px', height: '16px' }} 
              />
            )}
            <span style={{ fontWeight: '500' }}>{selectedFolder}</span>
          </div>

          <div style={{
            display: 'flex',
            gap: '6px'
          }}>
            <button style={{
              width: '28px',
              height: '28px',
              background: '#f0f0f0',
              border: '1px solid #d1d1d1',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px'
            }}>
              ⚙️
            </button>
            <button style={{
              width: '28px',
              height: '28px',
              background: '#f0f0f0',
              border: '1px solid #d1d1d1',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px'
            }}>
              ⋯
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        {renderMainContent()}

        {/* Status Bar */}
        <div style={{
          height: '28px',
          backgroundColor: '#f7f7f7',
          borderTop: '1px solid #e5e5e5',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          fontSize: '11px',
          color: '#8e8e93',
          justifyContent: 'space-between'
        }}>
          <span>{selectedFolder}</span>
          <span>İçerik görüntüleniyor</span>
        </div>
      </div>
    </div>
  )
}

export default FinderModal