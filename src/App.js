import { BrowserRouter, Routes, Route } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";
// components
import Index from "./pages/Index";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
