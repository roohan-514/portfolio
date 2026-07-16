import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function IcosahedronShape() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[0, 1, 0]}>
        <icosahedronGeometry args={[1.2, 0]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.15}
          distort={0.15}
          radius={1.5}
          wireframe
        />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function OrbitingRings() {
  const ringRef = useRef()
  const ringRef2 = useRef()

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.2
      ringRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.3
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z = -clock.getElapsedTime() * 0.15
      ringRef2.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.08) * 0.4
    }
  })

  return (
    <group position={[0, 0.8, 0]}>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ringRef2}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function FloatingOrbs() {
  const groupRef = useRef()
  const count = 30
  const positions = Array.from({ length: count }, () => ({
    pos: [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 4 + 0.5,
      (Math.random() - 0.5) * 4 - 1,
    ],
    size: 0.02 + Math.random() * 0.04,
    speed: 0.2 + Math.random() * 0.3,
    offset: Math.random() * Math.PI * 2,
  }))

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        if (i < positions.length) {
          const p = positions[i]
          child.position.y += Math.sin(clock.getElapsedTime() * p.speed + p.offset) * 0.0005
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#6366f1' : '#ffffff'}
            transparent
            opacity={0.3 + Math.random() * 0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function ThreeScene() {
  return (
    <div className="three-scene">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, 3, 2]} intensity={0.6} color="#6366f1" />
        <pointLight position={[3, -1, 2]} intensity={0.4} color="#00d4ff" />
        <Sparkles count={50} scale={4} size={2} speed={0.2} color="#00d4ff" opacity={0.3} />
        <IcosahedronShape />
        <OrbitingRings />
        <FloatingOrbs />
      </Canvas>
      <style>{`
        .three-scene {
          width: 100%;
          height: 100%;
          min-height: 450px;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
