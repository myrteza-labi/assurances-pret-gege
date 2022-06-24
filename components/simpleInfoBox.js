

function SimpleInfoBox(props){


    return (
        <div className="SimpleInfoBox">
            <span className="material-symbols-outlined infoIcon">priority_high</span>
            {props.children}
        </div>
    )
} 

export default SimpleInfoBox; 

