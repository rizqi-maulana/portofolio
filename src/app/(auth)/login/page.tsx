import { Metadata } from "next"
import LoginElement from "../../../components/template/login/LoginElement";

export const metadata: Metadata = {
    title: "Login"
};

export default function Login() {
    return (
        <LoginElement />
    )
}