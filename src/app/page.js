// src/app/page.js
'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const trails = [];
    const trailCount = 8;

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.opacity = (1 - i / trailCount) * 0.5;
      document.body.appendChild(trail);
      trails.push({ element: trail, x: 0, y: 0 });
    }

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX - 10 + 'px';
      cursor.style.top = mouseY - 10 + 'px';
    });

    function animateTrails() {
      let currentX = mouseX;
      let currentY = mouseY;

      trails.forEach((trail, index) => {
        trail.x += (currentX - trail.x) * (0.3 - index * 0.02);
        trail.y += (currentY - trail.y) * (0.3 - index * 0.02);
        trail.element.style.left = trail.x - 2 + 'px';
        trail.element.style.top = trail.y - 2 + 'px';
        currentX = trail.x;
        currentY = trail.y;
      });

      requestAnimationFrame(animateTrails);
    }
    animateTrails();

    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .link, .status-button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      trails.forEach(t => t.element.style.opacity = '0');
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      trails.forEach((t, i) => {
        t.element.style.opacity = (1 - i / trailCount) * 0.5;
      });
    });

    document.querySelectorAll('.highlight').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.style.background = 'rgba(0, 255, 225, 0.8)');
      el.addEventListener('mouseleave', () => cursor.style.background = 'rgba(255, 255, 255, 0.8)');
    });

    document.querySelectorAll('.link').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.style.background = 'rgba(97, 218, 251, 0.8)');
      el.addEventListener('mouseleave', () => cursor.style.background = 'rgba(255, 255, 255, 0.8)');
    });

  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="container">
        <div className="left-content">
          <div className="header">
            <h1>harshan s l</h1>
            <p className="pronunciation">har-shan &bull; One who brings joy</p>
          </div>

          <nav className="navigation">
            <a href="#" className="nav-link active">who am i</a>
            <a href="/work" className="nav-link">my work</a>
            <a href="/stack" className="nav-link">my stack</a>
          </nav>

          <div className="bio">
            <p>
              I&#39;m a <span className="highlight">third-year undergraduate</span> student at VIT from India with a passion for electronics, hardware systems and embedded development.
            </p>
            <p>
              Over the last few years, I have built experience in <span className="highlight">Arduino, Embedded C, Digital Design, Circuit Simulation and Signal Processing</span>. I blend hardware with software for real-world use.
            </p>
            <p>
              I spend time in competitions, labs, or projects, exploring modern technologies and pushing creative engineering boundaries.
            </p>
            <p>
              Let&#39;s connect —
              <a href="https://github.com/Harshan-SL/" className="link">GitHub</a>,
              <a href="https://www.linkedin.com/in/harshansl/" className="link">LinkedIn</a>,
              <a href="mailto:harshan.bhkl@gmail.com" className="link">Email</a>
            </p>
          </div>

         
        </div>

        <div className="right-content">
          <Image src="/1.png" alt="Profile" className="profile-image" width={300} height={200} />
        </div>
      </div>
    </>
  );
}
