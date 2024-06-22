import { BrowserRouter, Routes, Route } from "react-router-dom"
import Quiz from "../pages/quiz"
import APIHandling from "../pages/apihandling"
import Products from "../pages/products"
import SingleProduct from "../pages/singleProduct"
import Dashboard from "../pages/dashboard"
import FirebasePractice from "../pages/firbasePractice"

export default function AppRoute() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<APIHandling />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="product" element={<Products />} />
                <Route path="singleProduct/:id" element={<SingleProduct />} />
                <Route path="dashboard/*" element={<Dashboard />} />
                <Route path="firebase" element={<FirebasePractice />} />
            </Routes>
        </BrowserRouter>
    </>
}