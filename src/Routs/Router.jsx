import { Routes, Link, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Support } from "../Pages/Support";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export { Router };
