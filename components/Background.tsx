import styled from '@emotion/styled'
import { Canvas, useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Mesh, ShaderMaterial, AdditiveBlending } from 'three'
import fragmentShader from '../shaders/fragment.glsl'
import vertexShader from '../shaders/vertex.glsl'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.7;
  canvas {
    pointer-events: none;
    mix-blend-mode: screen;
  }
`

const settings = {
  uFrequency: {
    start: 1,
    end: 2,
  },
  uAmplitude: {
    start: 4,
    end: 4,
  },
  uDensity: {
    start: 1,
    end: 1.2,
  },
  uStrength: {
    start: 0.6,
    end: 1.2,
  },
  uDeepPurple: {
    start: 0.2,
    end: 0.6,
  },
  uOpacity: {
    start: 0.33,
    end: 0.66,
  },
}

const getAnimationValue = (a: number, b: number, c: number) =>
  Math.min(Math.max(a, b), c)

const Sphere = () => {
  const meshRef = useRef<Mesh>(null)
  const materialRef = useRef<ShaderMaterial>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
    }
  })

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const mouseX = Number((event.clientX / window.innerWidth).toFixed(2)) * 2
      const mouseY = Number((event.clientY / window.innerHeight).toFixed(2)) * 2

      if (!materialRef.current) return

      gsap.to(materialRef.current.uniforms.uFrequency, {
        value: getAnimationValue(
          settings.uFrequency.start,
          mouseX,
          settings.uFrequency.end
        ),
      })
      gsap.to(materialRef.current.uniforms.uAmplitude, {
        value: getAnimationValue(
          settings.uAmplitude.start,
          mouseX,
          settings.uAmplitude.end
        ),
      })
      gsap.to(materialRef.current.uniforms.uDensity, {
        value: getAnimationValue(
          settings.uDensity.start,
          mouseY,
          settings.uDensity.end
        ),
      })
      gsap.to(materialRef.current.uniforms.uStrength, {
        value: getAnimationValue(
          settings.uStrength.start,
          mouseY,
          settings.uStrength.end
        ),
      })
    }

    const onScroll = () => {
      if (!meshRef.current || !materialRef.current) return
      const translate = Number((window.scrollY / window.innerHeight).toFixed(2))

      gsap.to(meshRef.current.rotation, { y: translate * 2, x: translate * 2 })
      gsap.to(materialRef.current.uniforms.uStrength, {
        value: getAnimationValue(
          settings.uStrength.start,
          translate * 4,
          settings.uStrength.end
        ),
      })
      gsap.to(materialRef.current.uniforms.uDensity, {
        value: getAnimationValue(
          settings.uDensity.start,
          translate * 4,
          settings.uDensity.end
        ),
      })
    }

    document.addEventListener('mousemove', onMouseMove, false)
    window.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry attach="geometry" args={[1, 64]} />
      <shaderMaterial
        ref={materialRef}
        wireframe={true}
        transparent={true}
        blending={AdditiveBlending}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          uFrequency: { value: settings.uFrequency.start },
          uAmplitude: { value: settings.uAmplitude.start },
          uDensity: { value: settings.uDensity.start },
          uStrength: { value: settings.uStrength.start },
          uDeepPurple: { value: settings.uDeepPurple.start },
          uOpacity: { value: settings.uOpacity.start },
        }}
      />
    </mesh>
  )
}

export const Background = () => {
  return (
    <Wrapper>
      <Canvas
        camera={{
          fov: 75,
          position: [0, 0, 2.5],
          near: 0.1,
          far: 20,
        }}
      >
        <pointLight position={[10, 10, 10]} />
        <Sphere />
      </Canvas>
    </Wrapper>
  )
}
