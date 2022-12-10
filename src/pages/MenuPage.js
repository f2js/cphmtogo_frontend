import {getMenu} from "../api/Menu"
import {useEffect, useState} from "react"

export default function MenuPage() {
	const [menu, setMenu] = useState([])
	const [showMenu, setShowMenu] = useState(false)
	const resId = "637badd31208c351be7a46d0"

	const fetchMenu = async () => {
		const fetchedMenu = await getMenu(resId);
		setMenu(fetchedMenu.menu);
	}

	useEffect(() => {
		fetchMenu()
			.catch(console.error);;
	}, [resId])

	return (
		<div>
			<h1 id="menuHeader">Menu</h1>
			<h2> Click button to show menu for restaurant with the ID: {resId}</h2>
			<button id="menuButton" onClick={() => {
				fetchMenu();
				setShowMenu(!showMenu);
			}}>
				{showMenu ? "Hide menu" : "Show menu"}
			</button>
			<div id="menuDiv">

			{showMenu && menu.map((item) => {
				return (
					<div id="menuContainer" style={{display: "flex", flexDirection: "row", justifyContent: "center",marginLeft: 10}}>
						<p style={{marginLeft: 10}}>Item number: {item.itemNumber}</p>
						<p style={{marginLeft: 10}}>Name: {item.name}</p>
						<p style={{marginLeft: 10}}>Price: {item.price} kr </p>
					</div>
				);
			})}
			</div>
		</div>
	)
}
