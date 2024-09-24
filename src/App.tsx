import { Outlet } from "react-router-dom";
import Auth0ProviderWithHistory from "./providers/Auth0ProviderWithHistory";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import ThemeProvider from "./providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Auth0ProviderWithHistory>
        <ReactQueryProvider>
          <Outlet />
        </ReactQueryProvider>
      </Auth0ProviderWithHistory>
    </ThemeProvider>
  );
};

export default App;
