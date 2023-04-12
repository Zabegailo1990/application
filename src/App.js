import Reset from "./assets/globalStyles/Reset.js";
import { theme } from "./assets/globalStyles/theme.js";
import Fonts from "./assets/globalStyles/Fonts";
import router from "./routes/index.js";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <Fonts />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
