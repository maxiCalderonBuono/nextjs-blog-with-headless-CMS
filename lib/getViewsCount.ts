
type Slug = string

export default async function getViewsCount(slug:Slug) {

  const URL = process.env.NEXT_PUBLIC_APP_URL || ''
  
  const res = await fetch(`${URL}/api/views/${slug}`, { next: { revalidate: 0.2 } })
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}