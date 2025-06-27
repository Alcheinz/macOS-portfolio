import React from 'react'

const WorkExperienceModal = () => {
  return (
    <div style={{
      height: '100%',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      fontSize: '14px',
      lineHeight: '1.6',
      color: '#333',
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
          💼 İş Deneyimi
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
            
            <li style={{ marginBottom: '10px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '-20px' }}>🔧</span>
              <strong>Uzaktan Destek:</strong> Uzaktan destek sağlayarak yazılım ve donanım sorunlarını çözdüm.
            </li>
            
            <li style={{ marginBottom: '0', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '-20px' }}>⚙️</span>
              <strong>Donanım Desteği:</strong> Donanımsal tamir ve sistem yapılandırmaları konusunda destek verdim.
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e9ecef'
      }}>
        <h4 style={{ 
          margin: '0 0 15px 0', 
          color: '#495057',
          fontSize: '18px'
        }}>
          🚀 Kazanılan Deneyimler
        </h4>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          <div style={{
            background: '#e3f2fd',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔧</div>
            <strong>Sistem Kurulumu</strong>
          </div>
          
          <div style={{
            background: '#f3e5f5',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🌐</div>
            <strong>Ağ Yönetimi</strong>
          </div>
          
          <div style={{
            background: '#e8f5e8',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛠️</div>
            <strong>Teknik Destek</strong>
          </div>
          
          <div style={{
            background: '#fff3e0',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>💻</div>
            <strong>Yazılım Entegrasyonu</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceModal 