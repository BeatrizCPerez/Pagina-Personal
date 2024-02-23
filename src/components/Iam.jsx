import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Iam = () => {
  return (
    <section className="relative text-white body-font bg-blue-700">
      <div className="absolute inset-0 bg-cover" style={{ backgroundImage: 'url("../src/assets/programar.jpg")', filter: 'blur(8px)' }}></div>
      <div className="animate-fade-right animate-once animate-ease-in container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-opacity-70 bg-gray-900 p-6 rounded">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400 shadow-lg">
            Soy Beatriz Custodio Pérez
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-lg shadow ">
            Soy una apasionada desarrolladora web con un amor profundo por la creación y la innovación digital. Mi enfoque se centra en la construcción de experiencias en línea cautivadoras y funcionales que no solo cumplen con las necesidades del usuario, sino que también superan sus expectativas.
          </p>
          <div className="flex justify-center items-center">
            <button className="inline-flex text-lg text-white bg-blue-700 border-0 py-3 px-6 focus:outline-none hover:bg-blue-800 rounded">
              Contactar
            </button>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded border-4 border-yellow-400 animate-fade-left animate-once animate-ease-in" alt="hero" src="../src/assets/foto.png" />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center mb-10">
        <FaChevronDown size="3em" color="white" className="animate-bounce animate-infinite" /> {/* Icono de flecha hacia abajo */}
      </div>
    </section>
  );
};

export default Iam;


