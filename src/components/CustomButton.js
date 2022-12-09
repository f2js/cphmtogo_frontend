const CustomButton = ({ to, id }) => {

	return (
		<a href={`/${to}`}>
			<button className="my-button" id={id}>
				Take me to {to === '' ? "home" : to}
			</button>
		</a>
	)
}

export default CustomButton;