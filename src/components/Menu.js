import {getMenu} from "../api/Menu"
import {useEffect, useState} from "react"

export default function Menu() {
	const [menu, setMenu] = useState(null)
	const resId = "637badd31208c351be7a46d0"

	useEffect(() => {
		const fetchMenu = async () => {
			const fetchedMenu = await getMenu(resId);
			setMenu(fetchedMenu.menu);
		}
		fetchMenu()
			.catch(console.error);;
	}, [resId])


	return (
		<div>
			<h1 id={"menuHeader"}>Menu</h1>
			<h2> Restaurant with the ID: {resId}</h2>
			{menu && menu.map((item) => {
				return (
					<div id={"menuContainer"} style={{display: "flex", flexDirection: "row", justifyContent: "center",marginLeft: 10}}>
						<p style={{marginLeft: 10}}>Item number: {item.itemNumber}</p>
						<p style={{marginLeft: 10}}>Name: {item.name}</p>
						<p style={{marginLeft: 10}}>Price: {item.price} kr </p>
					</div>
				);
			})}
		</div>
	)
}

