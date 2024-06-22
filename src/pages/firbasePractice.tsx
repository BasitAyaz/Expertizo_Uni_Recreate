import BAButton from "../components/BAButton";
import { sendData } from "../config/firebase/firebasemethods";

export default function FirebasePractice() {
    const sendDataToFirebase = () => {
        let obj = {
            userName: 'ABC',
            age: 18,
            inst: "EXPERTIZO"
        }
        sendData(obj)
    }
    return <>
        <BAButton onClick={sendDataToFirebase} label="SendData" />
    </>
}