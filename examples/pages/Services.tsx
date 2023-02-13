import React, { useState, useEffect, useCallback, useRef } from 'react'
import styles from '../styles/services.module.scss'
import cls from 'classnames'
import Image from 'next/image'

import mediaImg from '../assets/header/media.png'
import smartImg from '../assets/header/smart.png'

export default function Services() {
  return (
    <div className={styles.dropdownGrid}>
      <div className={(styles.column, styles.first)}>
        <div className={styles.links}>
          <a className={cls(styles.link)}>
            <span>Our Services</span>
          </a>
        </div>
        <div className={styles.desc}>
          <span>
            We have a variety of technology-led and data-driven solutions to help grow your
            business.
          </span>
        </div>
      </div>
      <div className={(styles.column, styles.second)}>
        <div className={styles.grid}>
          <a className={styles.item}>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={mediaImg.src} alt="image" />
            </div>
            <div className={styles.mask}>
              <div className={styles.title}>Media and Data</div>
            </div>
          </a>
          <a>
            <div className={styles.item}>
              <div className={styles.imgWrap}>
                <img className={styles.img} src={smartImg.src} alt="image" />
              </div>
              <div className={styles.mask}>
                <div className={styles.title}>Smart Commerce</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
