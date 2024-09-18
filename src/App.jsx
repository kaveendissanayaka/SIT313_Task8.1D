import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostPage from "./components/Postpage";
import FindQuestionPage from "./components/FindQuestionpage";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/find-questions" element={<FindQuestionPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;