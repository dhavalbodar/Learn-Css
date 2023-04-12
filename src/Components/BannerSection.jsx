import React from 'react'
import styles from '../Public/Styles/BannerSection.module.css'

const BannerSection = () => {
  return (
    <div className={styles['top-banner']}>
      <div className={`container ${styles['banner-text']}`}>
        📣 Figma prototype testing just got a whole lot better! Read more →
      </div>
    </div>
  )
}

export default BannerSection