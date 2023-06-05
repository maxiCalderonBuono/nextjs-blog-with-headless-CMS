
import {  toast } from 'react-toastify';


export async function CopyToClipboard() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    console.log("entra")
    toast.success("Enlace copiado", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log("llega")
  } catch (err) {
    toast("No se pudo copiar");
  }
}