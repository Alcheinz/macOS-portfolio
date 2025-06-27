import React from 'react'

const AboutModal = () => {
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
        border: '1px solid #e9ecef'
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
        gap: '15px'
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
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', color: '#495057' }}>👤 Cinsiyet</h4>
          <p style={{ margin: '0', color: '#6c757d' }}>Erkek</p>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', color: '#495057' }}>💍 Medeni Durum</h4>
          <p style={{ margin: '0', color: '#6c757d' }}>Bekar</p>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', color: '#495057' }}>🚗 Sürücü Ehliyeti</h4>
          <p style={{ margin: '0', color: '#6c757d' }}>B Sınıfı</p>
        </div>
      </div>

      <div style={{
        background: '#e3f2fd',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #bbdefb'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>🔗 LinkedIn</h4>
        <p style={{ margin: '0' }}>
          <a 
            href="https://www.linkedin.com/in/furkanklkn/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0077b5', textDecoration: 'none' }}
          >
            linkedin.com/in/furkanklkn
          </a>
        </p>
      </div>

      <div style={{
        background: '#f3e5f5',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #e1bee7',
        marginTop: '10px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#7b1fa2' }}>💻 Teknik Beceriler</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          <div>
            <span style={{ fontWeight: 'bold' }}>SQL:</span> İyi
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>JavaScript:</span> Ortalama
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>HTML, CSS:</span> İyi
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>React Native:</span> Ortalama
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutModal 