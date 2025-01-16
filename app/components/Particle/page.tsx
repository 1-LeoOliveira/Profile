'use client'
import dynamic from 'next/dynamic'

const ParticleComponent = dynamic(() => import('../Particle/ParticleComponent'), {
    ssr: false,
});

export default function ParticlePage() {
    return (
        <div className="w-full h-full absolute top-0 left-0 -z-10">
            <ParticleComponent />
        </div>
    );
}