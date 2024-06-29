import { useState } from "react"
import BAButton from "../components/BAButton"
import { signUpUser } from "../config/firebase/firebasemethods"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUpFunction = () => {
        signUpUser(email, password)
    }
    return <>
        <div>
            <div className="p-2">
                <input
                    value={email}
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    type="text"
                />
            </div>
            <div className="p-2">
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    placeholder="Password"
                    type="password"
                />
            </div>
            <div className="p-2">
                <BAButton onClick={signUpFunction} label='Signup' />
            </div>
        </div>
    </>
}