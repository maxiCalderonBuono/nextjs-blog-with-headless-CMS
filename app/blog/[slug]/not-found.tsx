import React from 'react'
import notPost from "../../../assets/images/notPost.png";
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-10 mt-20'>
      <p className='px-5 text-3xl font-bold text-center dark:text-white md:px-20'>Parece que esta página ha decidido tomar unas vacaciones inesperadas.</p>
      <p className='max-w-6xl px-5 text-xl text-center opacity-75 dark:text-white md:px-20'>Mientras esperamos su regreso, te invitamos a explorar otras secciones de nuestro blog, donde encontrarás temas fascinantes y debates interesantes.</p>
      <Link
        href="/blog"
        className="flex px-4 py-2 rounded-md dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2"
      >
        <ChevronLeft className="flex items-center" />
        Todos los posts
      </Link>
      <div className='relative flex h-40 w-80'>
        <Image src={notPost} alt='not found robot' fill />
      </div>
    </section>
  )
}

export default NotFound
