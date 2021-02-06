import "./BackDrop.scss"

export const BackDrop = (props: {drawHandler: Function}) => {
	return (
		<div onClick={() => props.drawHandler(false)} className="backdrop clickable">
			
		</div>
	)
}
