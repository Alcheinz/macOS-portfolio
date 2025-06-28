import React, { useState, useEffect } from 'react'

const MenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('tr-TR', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    })
  }

  const AppleLogo = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )

  const BatteryIcon = () => (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="currentColor">
      <rect x="1" y="2" width="20" height="8" rx="2" ry="2" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="21" y="4" width="2" height="4" rx="1" ry="1" fill="currentColor"/>
      <rect x="2" y="3" width="16" height="6" rx="1" ry="1" fill="currentColor"/>
    </svg>
  )

  const WiFiIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 10.5a15 15 0 0 1 15 0" />
      <path d="M7 13a9 9 0 0 1 10 0" />
      <path d="M9.5 15.5a4.5 4.5 0 0 1 5 0" />
      <path d="M12 18h.01" />
    </svg>
  )

  return (
    <div className="menu-bar">
      <div className="menu-left">
        <div className="apple-logo">
          <AppleLogo />
        </div>
        <div className="menu-item">Furkan Kalkan</div>
      </div>
      
      <div className="menu-right">
        <div className="menu-item battery-indicator">
          <BatteryIcon />
          <span>100%</span>
        </div>
        <div className="menu-item wifi-indicator">
          <WiFiIcon />
        </div>
        <div className="menu-item">{formatTime(currentTime)}</div>
      </div>
    </div>
  )
}

export default MenuBar 