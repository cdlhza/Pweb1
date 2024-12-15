function HomePage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen flex">
      {/* Navbar vertical */}
      <nav className="bg-gray-900 w-64 min-h-screen py-6 px-4 border-r border-yellow-500">
        <h1 className="text-yellow-500 text-3xl font-bold mb-8">
          Cyberpunk Menu
        </h1>
        <ul className="space-y-4">
          <li>
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg"
            >
              <span className="text-cyan-400">&#x1F3E0;</span> Inicio
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg"
            >
              <span className="text-cyan-400">&#x1F4E6;</span> Productos
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg"
            >
              <span className="text-cyan-400">&#x1F464;</span> Perfil
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg"
            >
              <span className="text-cyan-400">&#x2709;</span> Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="flex-1">
        {/* Encabezado principal */}
        <header
          className="relative bg-cover bg-center h-screen border-b-4 border-yellow-500"
          style={{ backgroundImage: "url('/assets/cyberpunk-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-500 mb-4">
              Bienvenido al Futuro
            </h1>
            <p className="text-2xl text-cyan-400">
              Explora un nuevo mundo de posibilidades
            </p>
          </div>
        </header>

        {/* Contenedores principales */}
        <main className="py-16 px-8">
          {/* Contenedor horizontal para imagen destacada */}
          <section className="relative mb-16">
            <div className="h-72 bg-gray-800 border border-cyan-400 rounded-lg overflow-hidden">
              <img
                src="/assets/cyberpunk-wide.jpg"
                alt="Destacado"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Contenedores de características */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-900 border-2 border-yellow-500 rounded-lg p-6 hover:shadow-xl hover:border-cyan-400 transition-transform"
              >
                <h2 className="text-2xl text-yellow-500 font-bold mb-4">
                  Característica {i + 1}
                </h2>
                <p className="text-gray-400">
                  Breve descripción de esta sección futurista. Adaptada a la
                  estética de Cyberpunk.
                </p>
              </div>
            ))}
          </section>

          {/* Apartado para productos destacados */}
          <section>
            <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
              Productos Destacados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800 border border-cyan-400 rounded-lg p-4 hover:shadow-lg transition-transform"
                >
                  <img
                    src={`/assets/producto${i + 1}.jpg`}
                    alt={`Producto ${i + 1}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-yellow-400">
                    Producto {i + 1}
                  </h3>
                  <p className="text-gray-400">$XX.XX</p>
                  <button className="mt-4 w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded">
                    Ver Producto
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 border-t border-yellow-500">
          <div className="text-center">
            <p>&copy; 2024 Cyberpunk Store. Todos los derechos reservados.</p>
            <p className="mt-2">
              <a
                href="/about"
                className="text-cyan-400 hover:text-yellow-500 transition"
              >
                Acerca de
              </a>{" "}
              |{" "}
              <a
                href="/contact"
                className="text-cyan-400 hover:text-yellow-500 transition"
              >
                Contacto
              </a>{" "}
              |{" "}
              <a
                href="/terms"
                className="text-cyan-400 hover:text-yellow-500 transition"
              >
                Términos
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
