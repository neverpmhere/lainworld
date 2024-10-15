// src/components/WorldView.tsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector3, Quaternion } from 'three';
import Grid from './Grid';
import Object3D from './Object3D';

const CameraController: React.FC<{ containerRef: React.RefObject<HTMLDivElement> }> = ({ containerRef }) => {
  const { camera } = useThree();
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const moveUp = useRef(false);
  const moveDown = useRef(false);
  const isRotating = useRef(false);
  const speedRef = useRef(0.1);
  const baseSpeed = 0.1;
  const fastSpeed = 0.3;
  const rotationSpeed = 0.005;
  const scrollSpeed = 0.05; // Увеличьте значение для более резких шагов
  const mouseStart = useRef({ x: 0, y: 0 });

  camera.up.set(0, 1, 0); // Фиксируем ось вверх

  useEffect(() => {
    const cameraQuaternion = new Quaternion(); // Переносим внутрь useEffect, чтобы не включать в зависимости

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
          moveForward.current = true;
          break;
        case 'KeyS':
          moveBackward.current = true;
          break;
        case 'KeyA':
          moveLeft.current = true;
          break;
        case 'KeyD':
          moveRight.current = true;
          break;
        case 'Space':
          moveUp.current = true;
          break;
        case 'ControlLeft':
        case 'ControlRight':
          moveDown.current = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          speedRef.current = fastSpeed;
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
          moveForward.current = false;
          break;
        case 'KeyS':
          moveBackward.current = false;
          break;
        case 'KeyA':
          moveLeft.current = false;
          break;
        case 'KeyD':
          moveRight.current = false;
          break;
        case 'Space':
          moveUp.current = false;
          break;
        case 'ControlLeft':
        case 'ControlRight':
          moveDown.current = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          speedRef.current = baseSpeed;
          break;
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (event.button === 0) {
        isRotating.current = true;
        mouseStart.current = { x: event.clientX, y: event.clientY };
      }
    };

    const handleMouseUp = () => {
      isRotating.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isRotating.current) {
        const deltaX = event.clientX - mouseStart.current.x;
        const deltaY = event.clientY - mouseStart.current.y;

        // Поворот по горизонтали (вокруг оси Y)
        cameraQuaternion.setFromAxisAngle(new Vector3(0, 1, 0), -deltaX * rotationSpeed);
        camera.applyQuaternion(cameraQuaternion);

        // Поворот по вертикали (вверх и вниз), наклоняя только по X
        cameraQuaternion.setFromAxisAngle(new Vector3(1, 0, 0), -deltaY * rotationSpeed);
        camera.quaternion.multiply(cameraQuaternion);

        // Обновляем стартовые координаты для дальнейшего отслеживания движения
        mouseStart.current = { x: event.clientX, y: event.clientY };
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const direction = new Vector3();
      camera.getWorldDirection(direction);
      camera.position.addScaledVector(direction, -event.deltaY * scrollSpeed);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    // Привязываем обработчик wheel к контейнеру
    const containerElement = containerRef.current;
    containerElement?.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      containerElement?.removeEventListener('wheel', handleWheel);
    };
  }, [camera, containerRef]);

  useFrame(() => {
    const direction = new Vector3();
    camera.getWorldDirection(direction);

    const right = new Vector3();
    right.crossVectors(camera.up, direction).normalize();

    const up = new Vector3(0, 1, 0); // фиксируем вертикальную ось

    if (moveForward.current) camera.position.addScaledVector(direction, speedRef.current);
    if (moveBackward.current) camera.position.addScaledVector(direction, -speedRef.current);
    if (moveLeft.current) camera.position.addScaledVector(right, speedRef.current);
    if (moveRight.current) camera.position.addScaledVector(right, -speedRef.current);
    if (moveUp.current) camera.position.addScaledVector(up, speedRef.current);
    if (moveDown.current) camera.position.addScaledVector(up, -speedRef.current);
  });

  return null;
};

const WorldView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', backgroundColor: '#87CEEB' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Grid />
        <Object3D position={[0, 0, 0]} color="orange" />
        
        <CameraController containerRef={containerRef} /> {/* Управление камерой */}
      </Canvas>
    </div>
  );
};

export default WorldView;


















