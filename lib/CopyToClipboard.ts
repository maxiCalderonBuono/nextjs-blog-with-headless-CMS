import {  toast } from 'sonner'





export async function CopyToClipboard() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    
    toast('Enlace copiado')
  
   
  } catch (err) {
    toast('No se pudo copiar')
  }
}