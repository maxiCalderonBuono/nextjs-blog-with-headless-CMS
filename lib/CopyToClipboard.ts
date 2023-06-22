
import {  toast } from 'react-toastify';


export async function CopyToClipboard() {
  try {
    await navigator.clipboard.writeText(window.location.href);
   
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
   
  } catch (err) {
    toast("No se pudo copiar");
  }
}