import {  toast } from 'sonner'



<<<<<<< HEAD


export async function CopyToClipboard() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    
    toast('Enlace copiado')
  
   
  } catch (err) {
    toast('No se pudo copiar')
  }
}
=======


// export async function CopyToClipboard() {
//   try {
//     await navigator.clipboard.writeText(window.location.href);
   
   
//   } catch (err) {
//     toast("No se pudo copiar");
//   }
// }
>>>>>>> 5589c369e4a3e7ebbc0b5df51dc69631dff5119d
