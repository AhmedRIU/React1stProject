import HomePage from "./Component/HomePage";
import LoginForm from "./Component/LoginForm";
import SignupForm from "./Component/SignupForm.JSX";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div
    // className="text-white h-[100vh] flex items-center justify-center bg-cover"
    // style={{ backgroundImage: "url('../src/assets/loginbg.jpg')" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/loginpage" element={<LoginForm />} />
          <Route path="/signuppage" element={<SignupForm />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
