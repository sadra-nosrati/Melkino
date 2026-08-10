import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";

import { PropertiesProvider } from "@/context/PropertiesContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <AuthProvider>
      <FavoritesProvider>
        <PropertiesProvider>
          <SidebarProvider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              newestOnTop
              autoClose={3500}
              closeButton={false}
              hideProgressBar={false}
              draggable
              draggablePercent={35}
              pauseOnHover
              theme={theme}
              limit={3}
              rtl
              toastStyle={{ width: "100%" }}
            />
          </SidebarProvider>
        </PropertiesProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
