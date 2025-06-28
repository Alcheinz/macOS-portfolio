import React from 'react'

const ProjectsModal = () => {
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
          🚀 Projelerim
        </h2>
      </div>

      {/* React Native Projesi - Tamamlanmış */}
      <div style={{
        background: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '12px',
        padding: '20px',
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
              fontWeight: 'bold',
              color: '#2c3e50'
            }}>
              📱 React Native Mobil Uygulama
            </h3>
          </div>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '6px 12px',
            borderRadius: '16px',
            fontSize: '11px',
            fontWeight: 'bold'
          }}>
            ✅ Tamamlandı
          </div>
        </div>

        <div style={{
          padding: '15px',
          borderRadius: '8px'
        }}>
          <h4 style={{ 
            margin: '0 0 12px 0', 
            fontSize: '16px',
            color: '#2c3e50'
          }}>
            🎯 Proje Detayları:
          </h4>
          
          <p style={{ 
            margin: '0 0 15px 0',
            color: '#495057'
          }}>
            React Native kullanarak Android platformunda bir mobil uygulama geliştirdim. 
            Uygulama, back-end sistemi ile entegre çalışarak gerçek zamanlı veri alışverişini 
            API üzerinden sağlamaktadır.
          </p>

          <div style={{
            background: 'rgba(0, 0, 0, 0.02)',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '15px',
            border: '1px solid #e9ecef'
          }}>
            <strong>🔗 Senkronizasyon:</strong> Uygulama, bilgisayardaki tarayıcı üzerinden erişilen 
            web sitem ile senkronize çalışmakta ve kullanıcı işlemlerini anlık olarak veritabanına aktarmaktadır.
          </div>

          <h5 style={{ 
            margin: '0 0 10px 0', 
            fontSize: '14px',
            color: '#495057'
          }}>
            🛠️ Kullanılan Teknolojiler:
          </h5>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span style={{
              background: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              React Native
            </span>
            <span style={{
              background: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              Android
            </span>
            <span style={{
              background: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              API Entegrasyonu
            </span>
            <span style={{
              background: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              Real-time Data
            </span>
            <span style={{
              background: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              Web Sync
            </span>
          </div>
        </div>
      </div>

      {/* Portfolyo Projesi */}
      <div style={{
        background: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '12px',
        padding: '20px',
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
              fontSize: '18px',
              color: '#2c3e50'
            }}>
              💻 macOS Portfolio Website
            </h3>
          </div>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '6px 12px',
            borderRadius: '16px',
            fontSize: '11px',
            fontWeight: 'bold'
          }}>
            ✅ Tamamlandı
          </div>
        </div>

        <p style={{ 
          margin: '0 0 15px 0',
          color: '#495057'
        }}>
          React ve Vite kullanarak macOS tarzında interaktif portfolio website geliştirdim. 
          Taşınabilir klasörler, dock animasyonları ve modal window sistemi içeriyor.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <span style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 'bold'
          }}>
            React
          </span>
          <span style={{
            background: '#e8f5e8',
            color: '#2e7d32',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 'bold'
          }}>
            Vite
          </span>
          <span style={{
            background: '#f3e5f5',
            color: '#7b1fa2',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 'bold'
          }}>
            Framer Motion
          </span>
          <span style={{
            background: '#fff3e0',
            color: '#f57c00',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 'bold'
          }}>
            CSS3
          </span>
        </div>
      </div>

      {/* Gelecek Projeler */}
      <div style={{
        background: '#e8f5e8',
        border: '1px solid #c8e6c9',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <h3 style={{ 
          margin: '0 0 15px 0', 
          fontSize: '18px',
          color: '#2e7d32',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          🔮 Planlanmış Projeler
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          <div style={{
            background: '#fff',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#2c3e50', fontSize: '14px' }}>
              🛍️ E-Ticaret Uygulaması
            </h4>
            <p style={{ margin: '0', fontSize: '12px', color: '#6c757d' }}>
              React Native ile cross-platform e-ticaret mobil uygulaması
            </p>
          </div>
          
          <div style={{
            background: '#fff',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#2c3e50', fontSize: '14px' }}>
              📊 Veri Analiz Dashboard
            </h4>
            <p style={{ margin: '0', fontSize: '12px', color: '#6c757d' }}>
              SQL ve JavaScript ile interaktif veri görselleştirme
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsModal 