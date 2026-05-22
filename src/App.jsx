import {BrowserRouter, Routes, Route} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Member from "./components/Member.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
        <Route path="/" element={<Member />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}