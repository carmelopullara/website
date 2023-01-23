import * as THREE from 'three'
import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'

const StyledCanvas = styled.canvas`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  mix-blend-mode: screen;
  width: 100vw;
  height: 100vh;
  will-change: transform;
  opacity: 0.6;
`

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current

    if (!canvas) {
      return
    }

    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      20
    )

    const clock = new THREE.Clock()
    const mouse = {
      x: 0,
      y: 0,
    }

    camera.position.set(0, 0, 2.5)
    camera.updateProjectionMatrix()
    scene.add(camera)

    const settings = {
      uFrequency: {
        start: 1,
        end: 4,
      },
      uAmplitude: {
        start: 4,
        end: 4,
      },
      uDensity: {
        start: 1,
        end: 1,
      },
      uStrength: {
        start: 0.4,
        end: 1.1,
      },
      uDeepPurple: {
        start: 0.2,
        end: 1,
      },
      uOpacity: {
        start: 0.33,
        end: 0.66,
      },
    }

    const geometry = new THREE.IcosahedronGeometry(1, 64)
    const material = new THREE.ShaderMaterial({
      wireframe: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexShader,
      fragmentShader,
      uniforms: {
        uFrequency: { value: settings.uFrequency.start },
        uAmplitude: { value: settings.uAmplitude.start },
        uDensity: { value: settings.uDensity.start },
        uStrength: { value: settings.uStrength.start },
        uDeepPurple: { value: settings.uDeepPurple.start },
        uOpacity: { value: settings.uOpacity.start },
      },
    })

    const mesh = new THREE.Mesh(geometry, material)

    scene.add(mesh)

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      mesh.rotation.y = elapsedTime * 0.1
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    const onResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

      if (width > height) {
        mesh.scale.set(0.75, 0.75, 0.75)
      } else {
        mesh.scale.set(1, 1, 1)
      }
    }

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = Number((event.clientX / window.innerWidth).toFixed(2)) * 4
      mouse.y = Number((event.clientY / window.innerHeight).toFixed(2)) * 2

      gsap.to(mesh.material.uniforms.uFrequency, { value: mouse.x })
      gsap.to(mesh.material.uniforms.uAmplitude, { value: mouse.x })
      gsap.to(mesh.material.uniforms.uDensity, { value: mouse.y })
      gsap.to(mesh.material.uniforms.uStrength, { value: mouse.y })
    }

    window.addEventListener('resize', onResize)
    document.addEventListener('mousemove', onMouseMove, false)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <StyledCanvas ref={ref} />
}
