import { createClient } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";

export const POST = async (request: NextRequest) => {
    try {
        const formdata = await request.formData();
        const token = formdata.get('token') as string;
        const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

        if (SecretKey) {
            const decryptedToken = CryptoJS.AES.decrypt(token, SecretKey).toString(CryptoJS.enc.Utf8);
            const supabase = createClient();
            const { data, error } = await supabase
                .from('users')
                .select()
                .eq('token', decryptedToken);

            if (data) {
                return NextResponse.json(data[0].token);
            }
            if (error) {
                console.error('Supabase error:', error.message);
                return NextResponse.error();
            }
        } else {
            return NextResponse.json({ message: 'no secret key' });
        }
    } catch (error) {
        console.error('Internal server error:', error);
        return NextResponse.error();
    }
};
