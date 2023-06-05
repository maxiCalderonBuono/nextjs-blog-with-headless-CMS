"use client"

import React from 'react'
import { Twitter, Whatsapp, Facebook, LinkIcon } from '~/utils/Icons'
import {FacebookShareButton,TwitterShareButton,WhatsappShareButton} from "react-share";
import { CopyToClipboard } from '~/lib/CopyToClipboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




const SharePost = ({url, title}: {url:string, title: string}) => {

  
  return (
    <article className='flex items-center gap-3 my-8'>
    <div className="flex-grow h-[2px] bg-gray-400"></div>
    <div className='flex gap-3 text-xl'>
        <button className="hover:text-indigo-500 hover:scale-[120%] active:scale-95" onClick={() => CopyToClipboard()}><LinkIcon/></button>
        <WhatsappShareButton url={url} title={title} className=" hover:scale-[120%] active:scale-95" >
        <Whatsapp className='hover:text-whatsapp'/>
        </WhatsappShareButton>
        <TwitterShareButton url={url} title={title} className="hover:scale-[120%] active:scale-95">
        <Twitter className="hover:text-twitter" />
        </TwitterShareButton>
        <FacebookShareButton url={url} title={title} className=" hover:scale-[120%] active:scale-95">
        <Facebook  className='hover:text-facebook'/>
        </FacebookShareButton>
        <ToastContainer />
    </div>
    <div className="flex-grow h-[2px] bg-gray-400"></div>
    </article>
  )
}

export default SharePost    