import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

import { AppConstants } from "@/constants/app.constants";
import type { NavbarItem } from "@/types/interfaces/common/navbar-item.interface";
import { UserRole } from "@/types/enums/user-role.enum";
import { clearAllStore } from "@/stores/clearPersistentStores";

interface useNavbarProps {
  isAuthenticated: boolean;
  userRole: UserRole | undefined;
}
export const useNavbar = ({ isAuthenticated, userRole }: useNavbarProps) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuProfileOpen, setIsMenuProfileOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const navbarItemsAuth = AppConstants.NAVBAR_ITEMS.filter(
    (item) =>
      !item.role ||
      //(isAuthenticated && userRole === UserRole.ADMIN) ||
      (isAuthenticated && userRole === UserRole.SUPER_ADMIN) ||
      (isAuthenticated && item.role === userRole)
  );


  const handledSelectedItem = async (navbarItem: NavbarItem) => {
    const { name, children, href } = navbarItem;

    if (children) return;
    //if (href) router.push(href);
    startTransition(async () => {
      if (href) {
        router.push(href);
      }

      switch (name.toLowerCase()) {
        case "login":
          await signIn();
          break;

        case "logout":
          clearAllStore();
          await signOut({
            redirectTo: AppConstants.URL_HOME,
          });
          break;
      }
    });
  };

  return {
    handledSelectedItem,
    isMenuOpen,
    setIsMenuOpen,
    navbarItemsAuth,
    isMenuProfileOpen,
    setIsMenuProfileOpen,
    isPending,
  };
};
