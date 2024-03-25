import { Metadata } from "next";
import ProfileElement from "./ProfileElement";

export const metadata: Metadata = {
    title: 'Edit Profile'
}

export default function Profile() {
    return (
        <ProfileElement />
    )
}

