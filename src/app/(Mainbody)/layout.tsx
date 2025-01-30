"use client";
import Footer from "@/Layout/Footer/Footer";
import Header from "@/Layout/Header/Header";
import Sidebar from "@/Layout/Sidebar/Sidebar";
import TapTop from "@/Layout/TapTop/TapTop";
import ThemeCustomizer from "@/Layout/ThemeCustomizer/ThemeCustomizer";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducer/LayoutSlice";
import { addSidebarLayouts } from "@/Redux/Reducer/ThemeCustomizerSlice";
import { useEffect, useState } from "react";
 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleSidebar, scroll } = useAppSelector((state) => state.layout);
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();
  const compactSidebar = () => {
    const windowWidth = window.innerWidth;
    if (layout === "material-icon") {
      if (windowWidth < 1200) {
        dispatch(setToggleSidebar(true));
      } else {
        dispatch(setToggleSidebar(false));
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        dispatch(setToggleSidebar(true));
        dispatch(addSidebarLayouts("material-icon"));
      } else {
        dispatch(setToggleSidebar(false));
        dispatch(addSidebarLayouts("horizontal-wrapper"));
      }
    }
  };
  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [layout]);

  return (
    <>
      <div className={`page-wrapper  ${layout} ${layout === "material-icon" ? `compact-sidebar compact-small` : ""}`} id='pageWrapper'>
        <div className={`page-header ${open ? "sidebar-default" : ""} ${toggleSidebar ? "close_icon" : ""}  ${scroll ? "d-none" : "d-block"}`}>
          <Header />
        </div>
        <div className='page-body-wrapper'>
          <Sidebar setOpen={setOpen} open={open} />
          <div className='page-body'>{children}</div>
          <Footer />
        </div>
      </div>
      <TapTop />
      <ThemeCustomizer />
    </>
  );
}
