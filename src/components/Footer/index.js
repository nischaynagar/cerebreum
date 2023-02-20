import React from "react";
import Logo from "../assests/images/Logo.svg";
import "./style.css";

export default function Footer() {
  return (
    <div className="Footer">
      <img src={Logo} alt="logo" />
      <div>@2023 Cerebreum. All Rights Reserved.</div>
    </div>
  );
}
