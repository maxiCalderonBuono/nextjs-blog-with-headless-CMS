"use client"

function DateLabel({ ...props }) {

  if (!props.children) return null

  const dateString = new Date(props.children).toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });


  return (

    <>{dateString}</>

  )
}

export default DateLabel