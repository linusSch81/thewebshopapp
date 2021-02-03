import "./BackDrop.css"

export const BackDrop = (props: {drawHandler: Function}) => {
	return (
		<div onClick={() => props.drawHandler(false)} className="backdrop clickable">
			
		</div>
	)
}
