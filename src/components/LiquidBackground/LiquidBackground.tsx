import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

interface LiquidBackgroundProps {
  className?: string;
}

const LiquidBackground: React.FC<LiquidBackgroundProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const camera = useRef<THREE.OrthographicCamera | null>(null);
  const uniforms = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    scene.current = new THREE.Scene();
    const { clientWidth: width, clientHeight: height } = containerRef.current;

    // Camera
    camera.current = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Renderer
    renderer.current = new THREE.WebGLRenderer({ alpha: true });
    renderer.current.setSize(width, height);
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.current.domElement);

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2);

    // Uniforms
    uniforms.current = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0, 0) }
    };

    // Material
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms.current,
      vertexShader,
      fragmentShader,
      transparent: true
    });

    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.current.add(mesh);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      if (!uniforms.current) return;
      uniforms.current.uTime.value += 0.01;
      renderer.current?.render(scene.current!, camera.current!);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || !uniforms.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: rect.bottom - event.clientY
      };
      uniforms.current.uMouse.value = new THREE.Vector2(
        mousePosition.current.x,
        mousePosition.current.y
      );
    };

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !renderer.current || !uniforms.current) return;
      const { clientWidth: width, clientHeight: height } = containerRef.current;
      renderer.current.setSize(width, height);
      uniforms.current.uResolution.value = new THREE.Vector2(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.current?.dispose();
      containerRef.current?.removeChild(renderer.current?.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
    />
  );
};

export default LiquidBackground;