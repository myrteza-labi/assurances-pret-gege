

function BtnGo(props){
    return (

          <div className="BtnGo">
            <p className="btnGoDevisTitle">{props.title}</p>
            <button className="btnGoButton">{props.btnText}</button>
          </div>

    )
}

export default BtnGo; 

