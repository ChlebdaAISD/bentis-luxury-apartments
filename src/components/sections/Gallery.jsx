import { Plus } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Eyebrow } from '../ui/Eyebrow.jsx'
import { Button } from '../ui/Button.jsx'
import { GAL } from '../../data/content.js'

function GalleryTile({ src, height, index, onOpen, delay }) {
  return (
    <button
      onClick={() => onOpen(index)}
      className="w-full block text-left rv"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div style={{ height }} className="relative overflow-hidden group">
        <img
          src={src}
          alt={`Bentis Apartments — wnętrze ${index + 1}`}
          className="card-img w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full border border-white/70 flex items-center justify-center text-white/90">
            <Plus size={16} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </button>
  )
}

export function Gallery({ openLightbox }) {
  return (
    <section id="galeria" className="py-28 lg:py-36 bg-bentis-black">
      <Container>
        <div className="rv mb-14">
          <Eyebrow light>Galeria</Eyebrow>
          <h2 className="mt-8 h-section text-5xl md:text-6xl text-white">
            Wnętrza w obiektywie.
          </h2>
        </div>

        <div className="masonry">
          {GAL.map((g, i) => (
            <GalleryTile
              key={i}
              src={g.src}
              height={g.h}
              index={i}
              onOpen={openLightbox}
              delay={(i % 6) * 60}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button as="a" href="#" variant="outline">Zobacz więcej</Button>
        </div>
      </Container>
    </section>
  )
}
