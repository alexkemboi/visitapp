import React, { ReactNode } from "react";
import SideBarComponent from "./SideBarContainer";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { ProSidebarProvider } from "react-pro-sidebar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='h-screen w-5/5 bg-green-100 flex flex-row'>
            <div className="w-1/5">
                <ProSidebarProvider><SideBarComponent /></ProSidebarProvider>
            </div>

            <div className='w-4/5 flex flex-col h-auto right-0 bg-green-100'>
                <Navbar />
                <div className='overflow-y-auto h-full  mt-20'>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
