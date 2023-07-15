import React from 'react'
import { Likes } from '~/utils/Icons'


type Props = {}

const LikeButton = (props: Props) => {

  const translate = "13px"
  return (
    <button className='relative flex items-center justify-center w-8 h-8 p-2 overflow-hidden rounded-lg active:scale-95 hover:scale-110' aria-label='Dar me gusta al post'>
      {/* <div className='absolute inset-0 w-10 h-10 bg-gradient-to-t from-green-300 via-blue-500 to-purple-600' id="likeMask"></div>
      <Likes /> */}


      <div className="relative">
        <div className="rounded-xl bg-gray-100/10 p-[2px]" style={{ transformOrigin: "50% 50% 0px", transform: "none" }}>
          <svg viewBox="0 0 20 20" className="w-8">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="20%" style={{ stopColor: "rgb(251, 113, 133)", stopOpacity: "1" }}></stop>
                <stop offset="80%" style={{ stopColor: "rgb(139, 92, 246)", stopOpacity: "1" }}></stop>
              </linearGradient>
              <mask id="mask" mask-type="alpha" maskUnits="userSpaceOnUse">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
              </mask>
            </defs>
            <g mask="url(#mask)">
              <rect width="20" height="20" fill="#1A202C"></rect>
              <rect fill="url(#gradient)" width="16" height="16" x="2" y="2" transform-origin="10px 10px" style={{ transform: `translateY(${translate})`, transformOrigin: "10px 10px" }}></rect>
            </g>
          </svg>
        </div>
      </div>


    </button>
  )
}

export default LikeButton

