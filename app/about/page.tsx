import React from "react";
import Balancer from "react-wrap-balancer";

const about = () => {
  return (
    <section className="w-full max-w-5xl px-6 lg:px-5 py-10 mx-auto md:h-[calc(100vh-166px)]">
      <h1 className="mb-8 text-5xl font-bold text-gray-700 lg:text-6xl dark:text-indigo-300">
        Mindenkié.
      </h1>

      <article className="flex flex-col gap-8 text-xl items-left">
        <p className="">
          <Balancer ratio={0.4}>
            Normalmente, las personas suelen percibir la realidad de una manera
            automatizada. Sin embargo, es importante realizar diferentes
            análisis que puedan facilitar la alimentación cognitiva de aquellos
            que deseen apreciar una reflexión sobre la realidad. Para ello, se
            puede recurrir a MINDENKIre, que ofrece una perspectiva única e
            introspectiva.
          </Balancer>
        </p>

        <p>
          <Balancer ratio={0.4}>
            En un mundo multipolar, el hecho de pertenecer a una unipolaridad
            que devino de una bipolaridad no podemos quedarnos encasillados
            donde el futuro irá hacia los nacionalismos de inclusión o exclusión
            dependiendo del modelo de país.
          </Balancer>
        </p>

        <p>
          <Balancer ratio={0.4}>
            En este auto-stop debemos tener en cuenta todos los polos para
            entender las realidades mundiales, mindenkire, midenkirol,
            mindenkié.
          </Balancer>
        </p>
      </article>
    </section>
  );
};

export default about;
