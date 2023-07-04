import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServerKey: string = process.env.SUPABASE_KEY || ''

const options = {
  auth: {persistSession: false}
}

const supabase = createClient(supabaseUrl, supabaseServerKey, options)

export { supabase }





