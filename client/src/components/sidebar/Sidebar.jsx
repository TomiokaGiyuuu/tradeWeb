import './sidebar.css'
import {useContext} from "react";


const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <span className="sidebarItemText">Мой Профиль</span>
                    </li>
                    <li className="sidebarItem">
                        <span className="sidebarItemText">Панель Управления</span>
                    </li>
                    <li className="sidebarItem">
                        <span className="sidebarItemText">Все обьекты</span>
                    </li>
                    <li className="sidebarItem">
                        <span className="sidebarItemText">Все пользователи</span>
                    </li>
                    <li className="sidebarItem">
                        <span className="sidebarItemText">Варианты обмена</span>
                    </li>
                    <li className="sidebarItem">
                        <span className="sidebarItemText">Добавить</span>
                    </li>
                    <li className="sidebarItem">
                        <span className="sidebarItemText">Заявки</span>
                    </li>
                    <li className="sidebarItem">
                        <span className="sidebarItemText">Обработанные обмены</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;