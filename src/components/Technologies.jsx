import React from "react";

const Technologies = () => {
  return (
    <section className="text-emerald-200	 body-font bg-slate-900		 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Tecnologias
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base whitespace-nowrap">
           Tecnologias utilizadas en proyectos:
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {/* HTML */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="../src/assets/html.png"
                alt="HTML Logo"
                className="w-16 h-18 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-2xl text-gray-900">HTML</h2>
              <p className="leading-relaxed whitespace-normal">
                HTML es el lenguaje estándar para la creación y diseño de páginas web.
              </p>
            </div>
          </div>

          {/* CSS */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="../src/assets/css.png"
                alt="CSS Logo"
                className="w-16 h-18 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-2xl text-gray-900">CSS</h2>
              <p className="leading-relaxed whitespace-normal">
                CSS se utiliza para estilizar y diseñar páginas web, proporcionando una apariencia atractiva.
              </p>
            </div>
          </div>

          {/* JavaScript */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="../src/assets/javascript.png"
                alt="JavaScript Logo"
                className="w-16 h-18 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-2xl text-gray-900">JavaScript</h2>
              <p className="leading-relaxed whitespace-normal">
                JavaScript permite agregar interactividad y dinamismo a las páginas web.
              </p>
            </div>
          </div>

          {/* React */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="../src/assets/react.png"
                alt="React Logo"
                className="w-16 h-18 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-2xl text-gray-900">React</h2>
              <p className="leading-relaxed whitespace-normal">
                React simplifica la creación de interfaces de usuario interactivas y eficientes.
              </p>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="../src/assets/tailwind.png"
                alt="Tailwind CSS Logo"
                className="w-16 h-18 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-2xl text-gray-900">Tailwind CSS</h2>
              <p className="leading-relaxed whitespace-normal">
                Tailwind CSS facilita el diseño rápido y personalizable de interfaces web.
              </p>
            </div>
          </div>

          {/* Bootstrap */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="../src/assets/bootstrap.jpeg"
                alt="Bootstrap Logo"
                className="w-16 h-18 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-2xl text-gray-900">Bootstrap</h2>
              <p className="leading-relaxed whitespace-normal">
                Bootstrap proporciona componentes y estilos predefinidos para un diseño web ágil.
              </p>
            </div>
          </div>

          {/* SQL */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="../src/assets/sql.png"
                alt="SQL Logo"
                className="w-16 h-18 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-2xl text-gray-900">SQL</h2>
              <p className="leading-relaxed whitespace-normal">
                SQL es un lenguaje utilizado para gestionar y manipular bases de datos relacionales.
              </p>
            </div>
          </div>

          {/* GitHub */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img
                src="../src/assets/github.png"
                alt="GitHub Logo"
                className="w-16 h-18 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-2xl text-gray-900">GitHub</h2>
              <p className="leading-relaxed whitespace-normal">
                GitHub es una plataforma de desarrollo colaborativo que utiliza el control de versiones con Git.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies
;
