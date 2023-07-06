"use client"


function DateLabel({ ...props }) {
  if (!props.children) return null;

  let options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  if (props.year) {
    options = {
      year: "numeric",
    };
  }

  const dateString = new Date(props.children).toLocaleDateString("es-ES", options);

  return <>{dateString}</>;
}

export default DateLabel;