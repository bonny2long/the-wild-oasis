import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://pamvuqdmccaveyvusawe.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
