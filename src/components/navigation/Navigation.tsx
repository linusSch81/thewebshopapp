import "./Navigation.css"
import { DesktopNavigation } from "../navigation/desktopnavigation/DesktopNavigation";
import { MobileNavigation } from "../navigation/mobilenavigation/MobileNavigation";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export const Navigation = () => {
  const { height, width } = useWindowDimensions();

  const diplayNavigationDependingOnDevice = () => {
    return width >= 640 ? <DesktopNavigation /> : <MobileNavigation />;
  };

  return (
    <nav className="master-navigation-wrapper">
      {diplayNavigationDependingOnDevice()}
    </nav>
  );
};
