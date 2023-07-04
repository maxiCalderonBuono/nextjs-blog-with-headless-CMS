"use client"

import { useEffect } from "react"
import { Views } from "~/utils/Icons";


type Props = { slug: string, total: number }


const ViewCounter = ({ total, slug }: Props) => {



  useEffect(() => {

    fetch(`/api/views/${slug}`,
      {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ slug })
      })

  }, [slug]);

  return <div className="flex items-center gap-1" ><Views /><span>{`${total} visitas`}</span></div >

}


export default ViewCounter


