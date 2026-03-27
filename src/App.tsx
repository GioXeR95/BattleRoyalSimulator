import { BrowserRouter, useRoutes } from "react-router";
import routes from "./routes.tsx";
import { Header } from "./components/Header.tsx";

// const THEME_STORAGE_KEY = "theme-preference";

// type ThemeMode = "light" | "dark";

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

// function getInitialTheme(): ThemeMode {
//   const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

//   if (storedTheme === "light" || storedTheme === "dark") {
//     return storedTheme;
//   }

//   return window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";
// }

function App() {
  // const [count, setCount] = useState(0);
  // const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  // useEffect(() => {
  //   const root = document.documentElement;
  //   root.classList.toggle("dark", theme === "dark");
  //   localStorage.setItem(THEME_STORAGE_KEY, theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  // };

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
