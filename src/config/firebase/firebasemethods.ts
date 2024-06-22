import { getDatabase, ref, set } from 'firebase/database'
import app from './firebaseconfig'

const db = getDatabase(app)

export const sendData = (body: any) => {
    console.log(body)

    const reference = ref(db, 'users')
    set(reference, body)

}