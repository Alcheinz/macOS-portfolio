import React, { useState } from 'react'

const FinderModal = () => {
  const [selectedFolder, setSelectedFolder] = useState('Projects')

  // Gerçek içerik render fonksiyonları
  const renderProjectsContent = () => (
    <div style={{
      padding: '20px',
      height: '100%',
      overflow: 'auto'
    }}>
      <div style={{
        borderBottom: '2px solid #e9ecef',
        paddingBottom: '15px',
        marginBottom: '20px'
      }}>
        <h2 style={{ 
          margin: '0', 
          fontSize: '24px', 
          color: '#2c3e50',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <img src="/projects.png" alt="Projects" style={{ width: '32px', height: '32px' }} />
          Projelerim
        </h2>
      </div>

      {/* React Native Projesi */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '15px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '15px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <h3 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              📱 React Native Mobil Uygulama
            </h3>
            <p style={{ 
              margin: '0', 
              fontSize: '14px',
              opacity: 0.9,
              fontWeight: '500'
            }}>
              🏷️ Tamamlanmış Proje
            </p>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap'
          }}>
            ✅ Tamamlandı
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '15px',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)'
        }}>
          <h4 style={{ 
            margin: '0 0 12px 0', 
            fontSize: '16px',
            color: '#fff'
          }}>
            🎯 Proje Detayları:
          </h4>
          
          <p style={{ 
            margin: '0 0 15px 0',
            opacity: 0.95
          }}>
            React Native kullanarak Android platformunda bir mobil uygulama geliştirdim. 
            Uygulama, back-end sistemi ile entegre çalışarak gerçek zamanlı veri alışverişini 
            API üzerinden sağlamaktadır.
          </p>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '15px'
          }}>
            <strong>🔗 Senkronizasyon:</strong> Uygulama, bilgisayardaki tarayıcı üzerinden erişilen 
            web sitem ile senkronize çalışmakta ve kullanıcı işlemlerini anlık olarak veritabanına aktarmaktadır.
          </div>

          <h5 style={{ 
            margin: '0 0 10px 0', 
            fontSize: '14px',
            color: '#fff'
          }}>
            🛠️ Kullanılan Teknolojiler:
          </h5>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {['React Native', 'Android', 'API Entegrasyonu', 'Real-time Data', 'Web Sync'].map(tech => (
              <span key={tech} style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Projesi */}
      <div style={{
        background: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '15px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <h3 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '18px',
              color: '#2c3e50'
            }}>
              💻 macOS Portfolio Website
            </h3>
            <p style={{ 
              margin: '0', 
              fontSize: '14px',
              color: '#6c757d'
            }}>
              🏷️ Aktif Proje
            </p>
          </div>
          <div style={{
            background: '#ffc107',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            🚧 Geliştiriliyor
          </div>
        </div>

        <p style={{ 
          margin: '0 0 15px 0',
          color: '#495057'
        }}>
          macOS benzeri interaktif bir portfolio website projesi. React ve modern web teknolojileri 
          kullanarak responsive ve kullanıcı dostu bir deneyim sunuyor.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {['React', 'Vite', 'Framer Motion', 'CSS3', 'macOS UI'].map(tech => (
            <span key={tech} style={{
              background: '#e9ecef',
              color: '#495057',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAboutContent = () => (
    <div style={{
      padding: '20px',
      height: '100%',
      overflow: 'auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '32px',
          fontWeight: 'bold'
        }}>
          FK
        </div>
        <div>
          <h2 style={{ margin: '0 0 5px 0', fontSize: '24px', color: '#2c3e50' }}>
            Furkan Kalkan
          </h2>
          <p style={{ margin: '0', color: '#7f8c8d', fontSize: '16px' }}>
            Yazılım Geliştirici
          </p>
        </div>
      </div>

      <div style={{
        background: '#f8f9fa',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        marginBottom: '20px'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#495057' }}>Profil</h3>
        <p style={{ margin: '0', color: '#6c757d' }}>
          Mersin Üniversitesi Bilgisayar Programcılığı Bölümü mezunuyum. Öğrenmeye meraklı, 
          araştırmacı ve kendini geliştirmeyi seven biriyim.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', color: '#495057' }}>📍 Adres</h4>
          <p style={{ margin: '0', color: '#6c757d' }}>Yenimahalle, 55210 Samsun</p>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', color: '#495057' }}>📧 E-posta</h4>
          <p style={{ margin: '0', color: '#007bff', cursor: 'pointer' }}
             onClick={() => window.location.href = 'mailto:furkanklkn55@gmail.com'}>
            furkanklkn55@gmail.com
          </p>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', color: '#495057' }}>🎂 Doğum Tarihi</h4>
          <p style={{ margin: '0', color: '#6c757d' }}>29 Aralık 2002</p>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', color: '#495057' }}>🏙️ Doğum Yeri</h4>
          <p style={{ margin: '0', color: '#6c757d' }}>Samsun</p>
        </div>
      </div>

      <div style={{
        background: '#f3e5f5',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #e1bee7'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#7b1fa2' }}>💻 Teknik Beceriler</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          <div><span style={{ fontWeight: 'bold' }}>SQL:</span> İyi</div>
          <div><span style={{ fontWeight: 'bold' }}>JavaScript:</span> Ortalama</div>
          <div><span style={{ fontWeight: 'bold' }}>HTML, CSS:</span> İyi</div>
          <div><span style={{ fontWeight: 'bold' }}>React Native:</span> Ortalama</div>
        </div>
      </div>
    </div>
  )

  const renderWorkContent = () => (
    <div style={{
      padding: '20px',
      height: '100%',
      overflow: 'auto'
    }}>
      <div style={{
        borderBottom: '2px solid #e9ecef',
        paddingBottom: '15px',
        marginBottom: '20px'
      }}>
        <h2 style={{ 
          margin: '0', 
          fontSize: '24px', 
          color: '#2c3e50',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <img src="/work.png" alt="Work" style={{ width: '32px', height: '32px' }} />
          İş Deneyimi
        </h2>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '10px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '15px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <h3 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              Stajyer Yazılım Geliştirici
            </h3>
            <p style={{ 
              margin: '0', 
              fontSize: '16px',
              opacity: 0.9,
              fontWeight: '500'
            }}>
              📍 Vega Yazılım, Samsun/Atakum
            </p>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap'
          }}>
            📅 Haziran 2024 - Temmuz 2024
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '15px',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)'
        }}>
          <h4 style={{ 
            margin: '0 0 12px 0', 
            fontSize: '16px',
            color: '#fff'
          }}>
            🎯 Gerçekleştirilen Görevler:
          </h4>
          
          <ul style={{ 
            margin: '0', 
            paddingLeft: '20px',
            listStyle: 'none'
          }}>
            <li style={{ marginBottom: '10px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '-20px' }}>🔧</span>
              <strong>Otomasyon Sistemleri:</strong> Otomasyon sistem kurulumlarını gerçekleştirdim ve sistemsel hataları giderdim.
            </li>
            <li style={{ marginBottom: '10px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '-20px' }}>🏪</span>
              <strong>POS Entegrasyonu:</strong> Restoranlarda adisyon yazılımlarının POS cihazlarıyla iletişimini sağladım.
            </li>
            <li style={{ marginBottom: '10px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '-20px' }}>🌐</span>
              <strong>Ağ Kurulumu:</strong> Statik IP ile bilgisayarları birbirine bağlayarak müşterinin ciro takibini kolaylaştıran bir yazılım kurulumu gerçekleştirdim.
            </li>
            <li style={{ marginBottom: '0', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '-20px' }}>🔧</span>
              <strong>Uzaktan Destek:</strong> Uzaktan destek sağlayarak yazılım ve donanım sorunlarını çözdüm.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

  const renderEducationContent = () => (
    <div style={{
      padding: '20px',
      height: '100%',
      overflow: 'auto'
    }}>
      <div style={{
        borderBottom: '2px solid #e9ecef',
        paddingBottom: '15px',
        marginBottom: '20px'
      }}>
        <h2 style={{ 
          margin: '0', 
          fontSize: '24px', 
          color: '#2c3e50',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <img src="/edufolder.png" alt="Education" style={{ width: '32px', height: '32px' }} />
          Eğitim ve Nitelikler
        </h2>
      </div>

      {/* Ana Eğitim */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '15px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '15px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <h3 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              Önlisans
            </h3>
            <p style={{ 
              margin: '0 0 5px 0', 
              fontSize: '16px',
              opacity: 0.9,
              fontWeight: '500'
            }}>
              📍 Mersin Üniversitesi, Mersin
            </p>
            <p style={{ 
              margin: '0', 
              fontSize: '14px',
              opacity: 0.8
            }}>
              💻 Bilgisayar Programcılığı
            </p>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap'
          }}>
            📅 Eylül 2022 - Şubat 2025
          </div>
        </div>
      </div>

      {/* Kurslar */}
      <div style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e9ecef'
      }}>
        <h3 style={{ 
          margin: '0 0 20px 0', 
          color: '#495057',
          fontSize: '18px'
        }}>
          📚 Kurslar ve Sertifikalar
        </h3>

        <div style={{
          background: '#fff',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '15px',
          marginBottom: '15px'
        }}>
          <h4 style={{ 
            margin: '0 0 10px 0', 
            color: '#2c3e50',
            fontSize: '16px'
          }}>
            🎬 Temel Seviye After Effects Eğitimi
          </h4>
          <p style={{ margin: '0 0 8px 0', color: '#6c757d', fontSize: '13px' }}>
            📍 İstanbul Boğaziçi Enstitüsü / İstanbul Aydın Üniversitesi (Şubat 2022)
          </p>
          <p style={{ margin: '0', color: '#495057', fontSize: '13px' }}>
            Temel seviyede After Effects kullanımını öğrenerek, animasyon ve görsel efektler 
            oluşturma becerisi kazandım.
          </p>
        </div>

        <div style={{
          background: '#fff',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '15px'
        }}>
          <h4 style={{ 
            margin: '0 0 10px 0', 
            color: '#2c3e50',
            fontSize: '16px'
          }}>
            🏛️ Samsun Eğitim Forumu
          </h4>
          <p style={{ margin: '0 0 8px 0', color: '#6c757d', fontSize: '13px' }}>
            📍 Samsun Milli Eğitim Bakanlığı (Şubat 2020)
          </p>
          <p style={{ margin: '0', color: '#495057', fontSize: '13px' }}>
            Tarih ve Kültür, İnsan Hakları, Eğitim, Çevre ve Enerji, Bilim ve Teknoloji 
            alanlarında yapılan çalışmalara delege olarak katılım.
          </p>
        </div>
      </div>
    </div>
  )

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