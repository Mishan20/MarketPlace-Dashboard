import React, { useEffect } from 'react'
import './Menu.css';
import Logo from "../img/logo.png";
import { FaDelicious, FaShoppingCart, FaWallet, FaChartLine, FaRegClock, FaCog } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

function Menu() {

    useEffect(() => {
        const mainMennuLi = document.getElementById("mainMenu").querySelectorAll("li");

        function changeActive() {
            mainMennuLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }

        mainMennuLi.forEach((n) => n.addEventListener("click", changeActive))
    }, []);
  return (
    <menu>
        <img src={Logo} alt="Logo" />

        <ul id='mainMenu'>
            <Icon icon={<FaDelicious />} />
            <Icon icon={<FaShoppingCart />} />
            <Icon icon={<FaWallet />} />
            <Icon icon={<FaChartLine />} />
            <Icon icon={<FaRegClock />} />
        </ul>

        <ul className="lastMenu">
            <Icon icon={<FaCog />} />
            <Icon icon={<LuLogOut />} />
        </ul>
    </menu>
  )
}

const Icon = ({ icon}) => (
    <li>
        <a href="#">{icon}</a>
    </li>
)

export default Menu;