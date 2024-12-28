"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function WavesEffect() {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      10000,
    );
    camera.position.set(10, 8, 40);

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha enabled for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    const gridSize = 400;
    const spacing = 0.5;
    const vertices = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = i * spacing - (gridSize * spacing) / 2;
        const z = j * spacing - (gridSize * spacing) / 2;
        vertices.push(x, 0, z);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );

    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.1,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const clock = new THREE.Clock();

    function animate() {
      const time = clock.getElapsedTime();
      const positions = geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] =
          Math.sin(x * 0.5 + time) * 1.5 + Math.cos(z * 0.5 + time * 0.8) * 1.5;
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      // Cleanup WebGL resources and check if canvasRef.current exists
      renderer.dispose();
      geometry.dispose();
      material.dispose();

      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        pointerEvents: "none", // Prevent interactions with the canvas
        opacity: 0.4,
      }}
      className="absolute left-0 top-0 z-0 h-full w-full opacity-20"
    />
  );
}
