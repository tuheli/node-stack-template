import { Route, Routes } from "react-router-dom";
import { ExamplePage } from "../pages/ExamplePage";
import { Redirect } from "../redirect/Redirect";
import { AnotherPage } from "../pages/AnotherExamplePage";

export const SignedOutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ExamplePage />} />
      <Route path="/another-page" element={<AnotherPage />} />
      <Route path="*" element={<Redirect to="/" />} />
    </Routes>
  );
};
