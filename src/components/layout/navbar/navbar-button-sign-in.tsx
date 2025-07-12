import { cn } from "@/utils/tailwind/cn";

import { AppConstants } from "@/constants/app.constants";
import type { NavbarItem } from "@/types/interfaces/common/navbar-item.interface";

interface NavbarButtonSignInProps {
  handledSelectedItem: (item: NavbarItem) => void;
  isAuthenticated: boolean;
}
export const NavbarButtonSignIn = ({
  handledSelectedItem,
  isAuthenticated,
}: NavbarButtonSignInProps) => {
  console.log("isAuthenticated", isAuthenticated);
  if (isAuthenticated) return <></>;
  return (
    <button
      className={cn("border border-foreground p-2", {
        hidden: isAuthenticated,
      })}
      onClick={() =>
        handledSelectedItem({
          name: AppConstants.LOGIN_NAME_NAV,
          label: AppConstants.LOGIN_NAME_NAV,
        })
      }
    >
      Ingresar
    </button>
  );
};
