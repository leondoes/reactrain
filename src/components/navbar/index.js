import React, { useEffect, useState } from "react";
import { NavbarStyled } from "./styled";

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
      const navBarListener = () => {
        if (window.scrollY > 10) {
          setCollapsed(() => true);
        } else {
          setCollapsed(() => false);
        }
      };
  
      document.addEventListener("scroll", navBarListener);
  
      return () => window.removeEventListener("scroll", navBarListener);
    }, []);
  
    return (
      <NavbarStyled style={{ height: collapsed ? "80px" : "102px" }}>
        leondoes.
      </NavbarStyled>
    );
}

export default NavBar;