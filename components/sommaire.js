import Link from 'next/link'; 

function Sommaire(props){
    return (

          <div className="Sommaire">
            <h4 className="sommaireTitle">
                {props.sommaireTitle}
            </h4>
            <ul className="sommaireLinkCtn">
                <li><Link href={"" + props.href1}><a className="sommaireLink">{props.title1}</a></Link><span>{props.text1}</span></li>
                <li><Link href={"" + props.href2}><a className="sommaireLink">{props.title2}</a></Link><span>{props.text2}</span></li>
                <li><Link href={"" + props.href3}><a className="sommaireLink">{props.title3}</a></Link><span>{props.text3}</span></li>
                <li><Link href={"" + props.href4}><a className="sommaireLink">{props.title4}</a></Link><span>{props.text4}</span></li>
                <li><Link href={"" + props.href5}><a className="sommaireLink">{props.title5}</a></Link><span>{props.text5}</span></li>
                <li><Link href={"" + props.href6}><a className="sommaireLink">{props.title6}</a></Link><span>{props.text6}</span></li>

            </ul>
          </div>

    )
}

export default Sommaire; 

