import { BrowserRouter, Routes, Route } from "react-router-dom"
import Quiz from "../pages/quiz"
import APIHandling from "../pages/apihandling"

export default function AppRoute() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<APIHandling />} />
                <Route path="quiz" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    </>
}