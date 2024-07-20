// Import statements
import { ReactComponent as CalendarIcon } from "../../assets/svg-icon/Calender.svg";
import { ReactComponent as ContactIcon } from "../../assets/svg-icon/Contact.svg";
import { ReactComponent as DashboardIcon } from "../../assets/svg-icon/Dashboard.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/svg-icon/Favorites.svg";
import { ReactComponent as FileManagerIcon } from "../../assets/svg-icon/FileManager.svg";
import { ReactComponent as InboxIcon } from "../../assets/svg-icon/Inbox.svg";
import { ReactComponent as InvoiceIcon } from "../../assets/svg-icon/Invoice.svg";
import { ReactComponent as LogoutIcon } from "../../assets/svg-icon/Logout.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg-icon/menu.svg";
import { ReactComponent as OrderListsIcon } from "../../assets/svg-icon/OrderLists.svg";
import { ReactComponent as ProductStockIcon } from "../../assets/svg-icon/ProductStock.svg";
import { ReactComponent as ProductsIcon } from "../../assets/svg-icon/Products.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg-icon/settings.svg";
import { ReactComponent as SideNVBGIcon } from "../../assets/svg-icon/SideNVBG.svg";
import { ReactComponent as TodoIcon } from "../../assets/svg-icon/TO-Do.svg";

// Interfaces
export interface SidebarNavItem {
    title: string;
    link: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface SidebarNavlistProps {
    items: SidebarNavItem[];
}

// Sidebar navigation list
export const sidebarNavlist: SidebarNavlistProps = {
    items: [
        { title: "Dashboard", link: "/dashboard", icon: DashboardIcon },
        { title: "Calendar", link: "/calendar", icon: CalendarIcon  },
        { title: "Contact", link: "/contact", icon: ContactIcon },
        { title: "Favorites", link: "/favorites", icon: FavoritesIcon },
        { title: "FileManager", link: "/file-manager", icon: FileManagerIcon },
        { title: "Inbox", link: "/inbox", icon: InboxIcon },
        { title: "Invoice", link: "/invoice", icon: InvoiceIcon },
        { title: "Logout", link: "/logout", icon: LogoutIcon },
        { title: "Menu", link: "/menu", icon: MenuIcon },
        { title: "OrderLists", link: "/order-lists", icon: OrderListsIcon },
        { title: "ProductStock", link: "/product-stock", icon: ProductStockIcon },
        { title: "Products", link: "/products", icon: ProductsIcon },
        { title: "Settings", link: "/settings", icon: SettingsIcon },
        { title: "SideNVBG", link: "/side-nvbg", icon: SideNVBGIcon },
        { title: "To-Do", link: "/to-do", icon: TodoIcon },
    ],
};
