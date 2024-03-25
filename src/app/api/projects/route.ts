import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();
export const POST = async (request: NextRequest) => {
  const formdata = await request.formData();

  const objdata = {
    title: formdata.get("title"),
    description: formdata.get("description"),
    thumb: formdata.get("thumb"),
    website: formdata.get("website") ? formdata.get("website") : null,
    github: formdata.get("github") ? formdata.get("github") : null,
    techstack: [
      {
        "TechStack":
          JSON.parse(formdata.get("techstack") as string)

      }
    ],
  };
  const { error } = await supabase.from('projects').insert(objdata)
  if (error) return NextResponse.json({ status: 'error', message: error })

  return NextResponse.json({ status: 'success' });
};

export const GET = async () => {

  const { data, error } = await supabase.from("projects").select();

  if (error) return NextResponse.json({ status: 'error', message: error })
  return NextResponse.json(data)

}