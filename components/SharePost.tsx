"use client"

import React from 'react'
import { Twitter, Whatsapp, Facebook, LinkIcon } from '~/utils/Icons'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { CopyToClipboard } from '~/lib/CopyToClipboard';
import { Toaster } from 'sonner'






const SharePost = ({ url, title }: { url: string, title: string }) => {


  return (
    <>
      <article className='flex items-center gap-3 mt-8'>
        <div className="flex-grow h-[2px] bg-gray-400"></div>
        <div className='flex justify-between gap-3 text-xl'>
          <div>
            <Toaster richColors />
            <button className="hover:text-indigo-500 hover:scale-[120%] active:scale-95 rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2 p-2" onClick={() => CopyToClipboard()}><LinkIcon /></button>
          </div>
          <WhatsappShareButton url={url} title={title} className=" hover:scale-[120%] active:scale-95 rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2" >
            <Whatsapp className='m-2 hover:text-whatsapp' />
          </WhatsappShareButton>
          <TwitterShareButton url={url} title={title} className="hover:scale-[120%] active:scale-95 rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2">
            <Twitter className="m-2 hover:text-twitter" />
          </TwitterShareButton>
          <FacebookShareButton url={url} title={title} className=" hover:scale-[120%] active:scale-95 rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2">
            <Facebook className='m-2 hover:text-facebook' />
          </FacebookShareButton>

        </div>
        <div className="flex-grow h-[2px] bg-gray-400"></div>

      </article>

    </>
  )
}

export default SharePost    