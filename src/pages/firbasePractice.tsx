import BAButton from "../components/BAButton";
import { signUpUser } from "../config/firebase/firebasemethods";

export default function FirebasePractice() {
    const signUp = () => {
        signUpUser('jkl@gmail.com', '123456')
    }
    return <>
        <BAButton onClick={signUp} label="Sign Up User" />
    </>
}