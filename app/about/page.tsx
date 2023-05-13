import React from "react";
import Balancer from "react-wrap-balancer";

const about = () => {
  return (
    <section className="w-full max-w-5xl px-6 lg:px-5 py-10 mx-auto md:h-[calc(100vh-166px)]">
      <h1 className="mb-8 text-5xl font-bold text-transparent lg:text-7xl bg-clip-text bg-gradient-to-b dark:from-indigo-700 dark:via-blue-400 dark:to-cyan-600 from-gray-800 via-slate-600 to-gray-400">
        Mindenkié.
      </h1>

      <article className="flex flex-col gap-8 text-xl items-left">
        <p className="">
          <Balancer ratio={0.4}>
            En ocasiones, nuestra percepción de la realidad puede volverse
            automática y limitada. Sin embargo, es fundamental explorar diversos
            análisis que enriquezcan nuestra comprensión y nos inviten a
            reflexionar sobre el mundo que nos rodea. Es en este punto donde
            entra en juego MINDENKIRE, un blog que ofrece una perspectiva única
            e introspectiva.
          </Balancer>
        </p>

        <p>
          <Balancer ratio={0.4}>
            En un mundo cada vez más complejo y diverso, resulta insuficiente
            aferrarse a las estructuras unipolares heredadas de épocas
            bipolares. Nos enfrentamos a un futuro en el que los nacionalismos
            de inclusión o exclusión cobrarán protagonismo, dependiendo del
            modelo de país que adoptemos.
          </Balancer>
        </p>

        <p>
          <Balancer ratio={0.4}>
            En este viaje de descubrimiento, es esencial considerar todos los
            polos y dimensiones para comprender las realidades mundiales en su
            totalidad. mindenkire, midenkirol, mindenkié: un espacio donde
            convergen todas las voces y perspectivas.
          </Balancer>
        </p>
      </article>
    </section>
  );
};

export default about;
