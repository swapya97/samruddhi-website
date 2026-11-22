import React, { useEffect, useRef } from 'react';

export default function FlyingBricksCanvas({ scrollProgress = 0 }) {
  const canvasRef = useRef(null);
  const scrollRef = useRef(scrollProgress);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle parallax tilt
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 3D Brick Dimensions (Proportions of Fly Ash Brick: 9" x 4.5" x 3")
    const brickL = 40;
    const brickH = 14;
    const brickW = 20;

    const baseVertices = [
      [-brickL / 2, -brickH / 2, -brickW / 2],
      [ brickL / 2, -brickH / 2, -brickW / 2],
      [ brickL / 2,  brickH / 2, -brickW / 2],
      [-brickL / 2,  brickH / 2, -brickW / 2],
      [-brickL / 2, -brickH / 2,  brickW / 2],
      [ brickL / 2, -brickH / 2,  brickW / 2],
      [ brickL / 2,  brickH / 2,  brickW / 2],
      [-brickL / 2,  brickH / 2,  brickW / 2]
    ];

    const faces = [
      { indices: [0, 1, 2, 3], light: 0.65 },
      { indices: [4, 5, 6, 7], light: 1.05 },
      { indices: [0, 1, 5, 4], light: 1.35 }, // top face brightest
      { indices: [2, 3, 7, 6], light: 0.45 },
      { indices: [0, 3, 7, 4], light: 0.85 },
      { indices: [1, 2, 6, 5], light: 0.95 }
    ];

    // Generate 56 3D Bricks in a dynamic spiral vortex
    const brickCount = window.innerWidth < 768 ? 28 : 56;
    const bricks = [];

    for (let i = 0; i < brickCount; i++) {
      const angle = (i / brickCount) * Math.PI * 2 + Math.random() * 0.4;
      const radius = 100 + Math.random() * (width * 0.52);
      const initialZ = 60 + Math.random() * 850;

      bricks.push({
        baseAngle: angle,
        angle: angle,
        baseRadius: radius,
        radius: radius,
        baseZ: initialZ,
        z: initialZ,
        driftSpeed: 0.3 + Math.random() * 0.6,
        swirlSpeed: (0.0015 + Math.random() * 0.003) * (i % 2 === 0 ? 1 : -1),
        baseRotX: Math.random() * Math.PI * 2,
        baseRotY: Math.random() * Math.PI * 2,
        baseRotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        rotSpeedZ: (Math.random() - 0.5) * 0.012,
        scale: 0.7 + Math.random() * 0.65,
        // Fly Ash Brick color tones (slate gray with occasional warm amber)
        colorBase: i % 6 === 0 ? [235, 173, 33] : [160, 166, 175]
      });
    }

    const rotatePoint = (x, y, z, rx, ry, rz) => {
      let y1 = y * Math.cos(rx) - z * Math.sin(rx);
      let z1 = y * Math.sin(rx) + z * Math.cos(rx);
      let x2 = x * Math.cos(ry) + z1 * Math.sin(ry);
      let z2 = -x * Math.sin(ry) + z1 * Math.cos(ry);
      let x3 = x2 * Math.cos(rz) - y1 * Math.sin(rz);
      let y3 = x2 * Math.sin(rz) + y1 * Math.cos(rz);
      return [x3, y3, z2];
    };

    const fov = 480;
    const centerX = width * 0.52;
    const centerY = height * 0.48;

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      const mouseOffsetX = (mouse.x - width / 2) * 0.08;
      const mouseOffsetY = (mouse.y - height / 2) * 0.08;

      // Scroll offset factor: Bricks fly forward & swirl based directly on scroll progress!
      const currentScroll = scrollRef.current; // 0.0 to 1.0
      const scrollZOffset = currentScroll * 1200;
      const scrollAngleOffset = currentScroll * Math.PI * 3.5;

      ctx.clearRect(0, 0, width, height);

      const renderList = [];

      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i];

        // Ambient movement + Scroll-driven 3D surge
        const dynamicAngle = b.baseAngle + (time * b.swirlSpeed * 10) + scrollAngleOffset;
        const dynamicRadius = b.baseRadius + (currentScroll * 150);
        
        // Z position wraps continuously as user scrolls or time moves
        let dynamicZ = (b.baseZ - (time * b.driftSpeed * 40) - scrollZOffset) % 950;
        if (dynamicZ < 50) dynamicZ += 950;

        const rotX = b.baseRotX + (time * b.rotSpeedX * 10) + currentScroll * Math.PI * 2;
        const rotY = b.baseRotY + (time * b.rotSpeedY * 10) + currentScroll * Math.PI * 2.5;
        const rotZ = b.baseRotZ + (time * b.rotSpeedZ * 10);

        const worldX = Math.cos(dynamicAngle) * dynamicRadius + mouseOffsetX;
        const worldY = Math.sin(dynamicAngle) * (dynamicRadius * 0.58) + mouseOffsetY;
        const worldZ = dynamicZ;

        const projectedVertices = [];
        for (let v = 0; v < baseVertices.length; v++) {
          const bv = baseVertices[v];
          const [rx, ry, rz] = rotatePoint(
            bv[0] * b.scale,
            bv[1] * b.scale,
            bv[2] * b.scale,
            rotX,
            rotY,
            rotZ
          );

          const vx = worldX + rx;
          const vy = worldY + ry;
          const vz = worldZ + rz;

          const scaleProj = fov / (fov + vz);
          const px = centerX + vx * scaleProj;
          const py = centerY + vy * scaleProj;
          projectedVertices.push({ x: px, y: py, z: vz });
        }

        renderList.push({
          brick: b,
          projectedVertices,
          avgZ: worldZ
        });
      }

      // Depth sort
      renderList.sort((a, b) => b.avgZ - a.avgZ);

      // Draw all shaded polygonal faces
      for (let i = 0; i < renderList.length; i++) {
        const { brick: b, projectedVertices: pv, avgZ } = renderList[i];
        const alpha = Math.max(0.18, Math.min(0.92, (1050 - avgZ) / 850));

        for (let f = 0; f < faces.length; f++) {
          const face = faces[f];
          const p0 = pv[face.indices[0]];
          const p1 = pv[face.indices[1]];
          const p2 = pv[face.indices[2]];
          const p3 = pv[face.indices[3]];

          const cross = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);
          if (cross > 0) {
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.closePath();

            const r = Math.min(255, Math.round(b.colorBase[0] * face.light));
            const g = Math.min(255, Math.round(b.colorBase[1] * face.light));
            const bCol = Math.min(255, Math.round(b.colorBase[2] * face.light));

            ctx.fillStyle = `rgba(${r}, ${g}, ${bCol}, ${alpha})`;
            ctx.fill();

            ctx.lineWidth = 0.8;
            ctx.strokeStyle = `rgba(${r + 35}, ${g + 35}, ${bCol + 35}, ${alpha * 0.9})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
}