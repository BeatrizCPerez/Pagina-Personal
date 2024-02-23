import React from "react";

const Jobs = () => {
  return (
    <section className="relative bg-slate-400 text-white">
  
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("../src/assets/fondo2.jpg")', filter: 'blur(8px)', opacity: '0.8' }}></div>
      <div className="container px-5 py-24 mx-auto relative z-10">
        <div className="flex flex-wrap -m-4">
          {/* Tarjeta 1 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-800 bg-opacity-80"> {/* Añadida clase de fondo con opacidad */}
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Trabajo 1
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-100 mb-3"> {/* Cambiado el color a gray-100 */}
                 Trabajo 1
                </h1>
                <p className="leading-relaxed mb-3">
                 Descripcion trabajo 1
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    <span>URL</span>
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
    
                </div>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-800 bg-opacity-80"> {/* Añadida clase de fondo con opacidad */}
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Trabajo 2
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-100 mb-3"> 
                </h1>
                <p className="leading-relaxed mb-3">
                  Descripcion trabajo 2
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  {/* Más contenido... */}
                </div>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-800 bg-opacity-80"> {/* Añadida clase de fondo con opacidad */}
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-100 mb-3"> {/* Cambiado el color a gray-100 */}
                  The Catalyst 3
                </h1>
                <p className="leading-relaxed mb-3">
                  Tofu everyday carry helvetica shabby chic, organic chia microdosing craft beer tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
