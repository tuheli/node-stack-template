import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Redirect } from "./components/redirect/Redirect";
import { ExamplePage } from "./components/example-page/ExamplePage";
import { ThemeProvider } from "./components/themeprovider/ThemeProvider";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<ExamplePage />} />
          <Route path="*" element={<Redirect to="/" />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};
