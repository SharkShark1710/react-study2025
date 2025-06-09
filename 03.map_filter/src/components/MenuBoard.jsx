import React, { useState } from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem'
import MenuNav from './MenuNav'


const MenuBoard = () => {
    
    const [menus, setMenus] = useState(menuData);
    
    const menuFilter = (cate) => {
        if(cate === "All") {
            //menus는 가장 최근에 조회한 정보가 저장되어 있음
            //'All'을 누르면 최근 정보로만 조회
            //import한 menuData로 초기화해줘야 전체 메뉴가 출력된다.
            setMenus(menuData)
        } else {
            let filterData = menuData.filter((menu)=>menu.category === cate)
            setMenus(filterData)
        }
    }

    return (
        <div className='menu-board'>
            <h1>메뉴판</h1>

            <MenuNav onFilter={menuFilter}/>

            <div className='menu-list'>
                {menus.map((menu, index) => (
                    <MenuItem key={index} info={menu} />
                ))}
            </div>


        </div>
    )
}

export default MenuBoard