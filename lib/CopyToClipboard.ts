import {  toast } from 'sonner'


export async function CopyToClipboard() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    
    toast.success('Enlace copiado')
  
   
  } catch (err) {
    toast.error('No se pudo copiar')
  }
}
