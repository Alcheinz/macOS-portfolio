import React from 'react'

const EducationModal = () => {
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
          🎓 Eğitim ve Nitelikler
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
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          📚 Kurslar ve Sertifikalar
        </h3>

        {/* After Effects Kursu */}
        <div style={{
          background: '#fff',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '15px',
          marginBottom: '15px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '10px',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <h4 style={{ 
              margin: '0', 
              color: '#2c3e50',
              fontSize: '16px'
            }}>
              🎬 Temel Seviye After Effects Eğitimi
            </h4>
            <span style={{
              background: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              Şubat 2022
            </span>
          </div>
          <p style={{ margin: '0 0 8px 0', color: '#6c757d', fontSize: '13px' }}>
            📍 İstanbul Boğaziçi Enstitüsü / İstanbul Aydın Üniversitesi
          </p>
          <p style={{ margin: '0', color: '#495057', fontSize: '13px' }}>
            Bu eğitim kapsamında temel seviyede After Effects kullanımını öğrenerek, animasyon ve görsel efektler 
            oluşturma becerisi kazandım. Projeler üzerinde uygulamalı çalışmalar yaparak, katman yönetimi, efekt 
            ekleme ve geçişler gibi temel konuları deneyimledim.
          </p>
        </div>

        {/* Samsun Eğitim Forumu */}
        <div style={{
          background: '#fff',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '15px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '10px',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <h4 style={{ 
              margin: '0', 
              color: '#2c3e50',
              fontSize: '16px'
            }}>
              🏛️ Samsun Eğitim Forumu
            </h4>
            <span style={{
              background: '#e8f5e8',
              color: '#2e7d32',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              Şubat 2020
            </span>
          </div>
          <p style={{ margin: '0 0 8px 0', color: '#6c757d', fontSize: '13px' }}>
            📍 Samsun Milli Eğitim Bakanlığı - Samsun Garip Zeycan Yıldırım Fen Lisesi
          </p>
          <p style={{ margin: '0 0 10px 0', color: '#495057', fontSize: '13px' }}>
            Forum kapsamında <strong>Tarih ve Kültür, İnsan Hakları, Eğitim, Çevre ve Enerji, Bilim ve 
            Teknoloji, Sağlık ve Ekonomi</strong> gibi farklı alanlarda yapılan çalışmalara aktif olarak katkı sağladım.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span style={{ background: '#f8f9fa', padding: '4px 8px', borderRadius: '4px', fontSize: '11px' }}>
              Delege
            </span>
            <span style={{ background: '#f8f9fa', padding: '4px 8px', borderRadius: '4px', fontSize: '11px' }}>
              Sorun Tespiti
            </span>
            <span style={{ background: '#f8f9fa', padding: '4px 8px', borderRadius: '4px', fontSize: '11px' }}>
              Çözüm Geliştirme
            </span>
            <span style={{ background: '#f8f9fa', padding: '4px 8px', borderRadius: '4px', fontSize: '11px' }}>
              Akademisyen Değerlendirmeleri
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationModal 