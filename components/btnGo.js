

function BtnGo(props){
    return (

          <div className="BtnGo">
            <h4 className="btnGoDevisTitle">{props.title}</h4>
            <button className="btnGoButton">{props.btnText}</button>
          </div>

    )
}

export default BtnGo; 

