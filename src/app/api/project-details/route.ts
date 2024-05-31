import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient()
export const POST = async (request: NextRequest) => {
  const fomrdata = await request.formData()
  const { data, error } = await supabase.from('projects').select().eq('title', fomrdata.get('params'))
  if (error) return NextResponse.json({ status: 'error', message: error })
  return NextResponse.json(data)
}