import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../styles/about.module.scss';

import manilaImg from '../assets/header/manila.png';
import jakartaImg from '../assets/header/jakarta.png';
import sydneyImg from '../assets/header/sydney.png';
import beijingImg from '../assets/header/beijing.png';
import smartImg from '../assets/header/smart.png';

export default function About() {
  return (
    <div className={styles.dropdownGrid}>
      <div className={(styles.column, styles.first)}>
        <div className={styles.links}>
          <a className={styles.link}>
            <span>About Us</span>
          </a>
        </div>
        <div className={styles.desc}>
          <span>we strive to provide market-specific solutions for your business.</span>
        </div>
      </div>
      <div className={(styles.column, styles.second)}>
        <div className={styles.imgWrap}>
          <img className={styles.banner} src={smartImg.src} alt="" />
        </div>
      </div>
      <div className={(styles.column, styles.third)}>
        <div className={styles.office}>
          <div className={styles.item}>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={manilaImg.src} alt="" />
            </div>
            <p className={styles.desc}>Manila</p>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={jakartaImg.src} />
            </div>
            <p className={styles.desc}>Jakarta</p>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={sydneyImg.src} alt="" />
            </div>
            <p className={styles.desc}>Sydney</p>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={beijingImg.src} alt="" />
            </div>
            <p className={styles.desc}>Beijing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
