import { Route, Routes } from "react-router-dom";
import { ExamplePage } from "../pages/ExamplePage";
import { Redirect } from "../redirect/Redirect";

export const SignedInRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ExamplePage />} />
      <Route path="*" element={<Redirect to="/" />} />
    </Routes>
  );
};
