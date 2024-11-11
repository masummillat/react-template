import { Outlet } from "react-router-dom";
import { TourProvider } from "@reactour/tour";
import Auth0ProviderWithHistory from "./providers/Auth0ProviderWithHistory";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import ThemeProvider from "./providers/ThemeProvider";
import "./App.css";
import { tourSteps } from "./components/Tour/tourSteps";

const App: React.FC = () => {
  const radius = 4;
  return (
    <ThemeProvider>
      <Auth0ProviderWithHistory>
        <TourProvider
          steps={tourSteps}
          prevButton={undefined}
          nextButton={undefined}
          showCloseButton={false}
          showBadge={false}
          showDots={false}
          showPrevNextButtons={false}
          styles={{
            popover: (base) => ({
              ...base,
              "--reactour-accent": "#111827B2",
              borderRadius: radius,
              padding: 0,
              backgroundColor: "transparent",
            }),
            maskArea: (base) => ({ ...base, rx: radius }),
            maskWrapper: (base) => ({ ...base, color: "#111827B2" }),
            badge: (base) => ({ ...base, left: "auto", right: "-0.8125em" }),
            // controls: (base) => ({ ...base }),
            close: (base) => ({ ...base, right: "auto", left: 8, top: 8 }),
          }}
        >
          <ReactQueryProvider>
            <Outlet />
          </ReactQueryProvider>
        </TourProvider>
      </Auth0ProviderWithHistory>
    </ThemeProvider>
  );
};

export default App;
