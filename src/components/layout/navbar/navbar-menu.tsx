import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import type { NavbarItem } from "@/types/interfaces/common/navbar-item.interface";

interface NavbarMenuProps {
  navbarItemsAuth: NavbarItem[];
  isMenuOpen: boolean;
  handledSelectedItem: (item: NavbarItem) => void;
  className: string;
  isPending: boolean
}
export const NavbarMenu = ({
  handledSelectedItem,
  navbarItemsAuth,
  className,
  isPending
}: NavbarMenuProps) => {
  return (
    <Menubar className={className}>
      {navbarItemsAuth.map((item) => (
        <span key={item.name}>
          <MenubarMenu key={item.name}>
            <MenubarTrigger
              onClick={() => {
                handledSelectedItem(item);
              }}
              disabled={isPending}
              className="hover:cursor-pointer hover:text-foreground/90 tracking-widest text-[0.8rem]"
            >
              {item.icon} {item.label.toUpperCase()}
            </MenubarTrigger>

            {item.children && (
              <MenubarContent className="menu-bar-content">
                {item.children.map((child, index) =>
                  child.isSeparator ? (
                    <MenubarSeparator
                      key={`separator-${index}`}
                      className="menu-bar-separator"
                    />
                  ) : child.children ? (
                    <MenubarSub key={child.name}>
                      <MenubarSubTrigger>{child.label}</MenubarSubTrigger>
                      <MenubarSubContent>
                        {child.children.map((subChild) => (
                          <MenubarItem
                            key={subChild.name}
                            onClick={() => handledSelectedItem(subChild)}
                          >
                            {subChild.icon}
                            {subChild.label}
                          </MenubarItem>
                        ))}
                      </MenubarSubContent>
                    </MenubarSub>
                  ) : (
                    <MenubarItem
                      key={child.name}
                      inset
                      onClick={() => handledSelectedItem(child)}
                    >
                      {child.icon}
                      {child.label}
                    </MenubarItem>
                  )
                )}
              </MenubarContent>
            )}
          </MenubarMenu>
        </span>
      ))}
    </Menubar>
  );
};
