import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-lightest">
      {/* Hero Section with Altai Mountains */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Altai Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-olive-darker/70 via-olive-dark/50 to-olive-darker/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Coming Soon...
            </h1>
            <p className="text-2xl md:text-3xl text-beige-light mb-6">
              belocal.world
            </p>
            <p className="text-lg md:text-xl text-beige-light max-w-2xl mx-auto">
              A new platform connecting travelers with authentic local experiences and hidden gems around the world.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-lightest to-transparent"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-darkest text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-beige-light text-lg md:text-xl mb-2">Be local anywhere in the world</p>
          <p className="text-gray-light text-sm">© 2025 BeLocal</p>
        </div>
      </footer>
    </main>
  )
}
