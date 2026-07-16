import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function FloatingCharacter() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <MeshDistortMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.2}
            distort={0.1}
            radius={1}
          />
        </mesh>
        <mesh position={[0, 0.9, 0]}>
          <boxGeometry args={[0.9, 1, 0.5]} />
          <MeshDistortMaterial
            color="#0891b2"
            emissive="#0891b2"
            emissiveIntensity={0.1}
            distort={0.05}
          />
        </mesh>
        <mesh position={[-0.6, 0.6, 0]}>
          <capsuleGeometry args={[0.12, 0.4, 8, 16]} />
          <meshStandardMaterial color="#6366f1" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0.6, 0.6, 0]}>
          <capsuleGeometry args={[0.12, 0.4, 8, 16]} />
          <meshStandardMaterial color="#6366f1" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[-0.3, -0.1, 0]} rotation={[0.1, 0, 0]}>
          <capsuleGeometry args={[0.14, 0.5, 8, 16]} />
          <meshStandardMaterial color="#6366f1" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0.3, -0.1, 0]} rotation={[-0.1, 0, 0]}>
          <capsuleGeometry args={[0.14, 0.5, 8, 16]} />
          <meshStandardMaterial color="#6366f1" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <pointLight intensity={1} distance={3} color="#00d4ff" />
        </mesh>
      </Float>

      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4 + 0.5,
            (Math.random() - 0.5) * 3 - 1,
          ]}
        >
          <sphereGeometry args={[0.02 + Math.random() * 0.03, 6, 6]} />
          <meshBasicMaterial
            color={['#00d4ff', '#6366f1', '#fff'][Math.floor(Math.random() * 3)]}
            transparent
            opacity={0.4 + Math.random() * 0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function ThreeScene() {
  return (
    <div className="three-scene">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-2, 3, 2]} intensity={0.4} color="#6366f1" />
        <FloatingCharacter />
      </Canvas>
      <style>{`
        .three-scene {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border-radius: 50%;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
