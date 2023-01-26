import React from "react";
import Sidebar from "components/sideBar/Sidebar";
import Topbar from "components/topbar/Topbar";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
    const toggleWidth = useSelector((state) => state.global.toggleWidth);
    console.log(toggleWidth, "toggleWidth");
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        width: toggleWidth ? "15%" : "5%",
                        height: "100vh",
                        background: "#0068a6",
                        color: "#fff",
                        transition: "width 1s",
                    }}
                >
                    <Sidebar />
                </div>
                <div style={{ width: "100%" }}>
                    <div
                        style={{
                            width: "100%",
                            height: "10vh",
                            background: "#0068a6",
                            color: "#fff",
                        }}
                    >
                        <Topbar />
                    </div>
                    <div style={{ padding: "0 10px", height: '90vh', overflow: 'scroll' }}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
