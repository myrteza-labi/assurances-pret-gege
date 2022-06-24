import Link from "next/link";

function Sommaire(props) {
  return (
    <div className="Sommaire">
      <h4 className="sommaireTitle">{props.sommaireTitle}</h4>
      <ul className="sommaireLinkCtn">
        {props.title1 == undefined ? (
          ""
        ) : (
          <li>
            <Link href={"" + props.href1}>
              <a className={props.title1 == undefined ? "" : "sommaireLink"}>
                {props.title1}
              </a>
            </Link>
            <span>{props.text1}</span>
          </li>
        )}
        {props.title2 == undefined ? (
          ""
        ) : (
          <li>
            <Link href={"" + props.href2}>
              <a className={props.title2 == undefined ? "" : "sommaireLink"}>
                {props.title2}
              </a>
            </Link>
            <span>{props.text2}</span>
          </li>
        )}
        {props.title3 == undefined ? (
          ""
        ) : (
          <li>
            <Link href={"" + props.href3}>
              <a className={props.title3 == undefined ? "" : "sommaireLink"}>
                {props.title3}
              </a>
            </Link>
            <span>{props.text3}</span>
          </li>
        )}
        {props.title4 == undefined ? (
          ""
        ) : (
          <li>
            <Link href={"" + props.href4}>
              <a className={props.title4 == undefined ? "" : "sommaireLink"}>
                {props.title4}
              </a>
            </Link>
            <span>{props.text4}</span>
          </li>
        )}
        {props.title5 == undefined ? (
          ""
        ) : (
          <li>
            <Link href={"" + props.href5}>
              <a className={props.title5 == undefined ? "" : "sommaireLink"}>
                {props.title5}
              </a>
            </Link>
            <span>{props.text5}</span>
          </li>
        )}
        {props.title6 == undefined ? (
          ""
        ) : (
          <li>
            <Link href={"" + props.href6}>
              <a className={props.title6 == undefined ? "" : "sommaireLink"}>
                {props.title6}
              </a>
            </Link>
            <span>{props.text6}</span>
          </li>
        )}
        {props.title7 == undefined ? (
          ""
        ) : (
          <li>
            <Link href={"" + props.href7}>
              <a className={props.title6 == undefined ? "" : "sommaireLink"}>
                {props.title7}
              </a>
            </Link>
            <span>{props.text7}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Sommaire;
