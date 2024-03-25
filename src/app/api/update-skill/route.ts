import { createClient } from "@/utils/supabase/client";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const supabase = createClient();
    const formdata = await request.formData();

    const objdata = {
        skills: [
            {
                "MySkills":
                    JSON.parse(formdata.get('skills') as string)
            }
        ]
    }

    const { error } = await supabase.from('myskills').update(objdata).eq('id', 2)
    if (error) return NextResponse.json({ status: 'error', message: error })

    return NextResponse.json({ status: 'success' });
};