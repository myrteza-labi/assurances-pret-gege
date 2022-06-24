import Item from "./Item"
import Link from 'next/link';

function Menu(props){


 

    const euro =  <span className="material-symbols-outlined">euro_symbol</span>; 

    const house = <span className="material-symbols-outlined"> home </span>; 

    const stars = <span className="material-symbols-rounded devis">magic_button</span>

    const garanties = <span className="material-symbols-outlined">health_and_safety</span>

    const negociations = <span className="material-symbols-outlined">add_task</span>

    const pret = <span className="material-symbols-outlined">real_estate_agent</span>

    const contact = <span className="material-symbols-outlined">contact_support</span>

    const comparatif = <span className="material-symbols-outlined">compare_arrows</span>
    
    const mobileMenu = 
    <div className={"mobileMenu " + props.isMobile} style={{display: props.isMobile}}>
        <div className="dropdownMenuHeader">
            <h2 className="menuTitle">Menu</h2>
        </div>
        
        <Link href="/"><a onClick={props.onClick}><Item className={"itemOnMobile"} icon={house} title={"Accueil"}/></a></Link>
        <Link href="/garanties"><a onClick={props.onClick}><Item className={"itemOnMobile"} icon={garanties} title={"Garanties"}/></a></Link>
        <Link href="/cout"><a onClick={props.onClick}><Item className={"itemOnMobile"} icon={euro} title={"Coût"}/></a></Link>
        <Link href="/comparatif"><a onClick={props.onClick}><Item className={"itemOnMobile"} icon={comparatif} title={"Comparatif"}/></a></Link>

        <Link href="/negociation"><a onClick={props.onClick}><Item className={"itemOnMobile"} icon={negociations} title={"Négociation"}/></a></Link>

        <Link href="/pret"><a onClick={props.onClick}><Item className={"itemOnMobile"} icon={pret} title={"Prêt"}/></a></Link>
        <Link href="/contact"><a onClick={props.onClick}><Item className={"itemOnMobile"} icon={contact} title={"Contact"}/></a></Link>
        <Link href="/devis"><a onClick={props.onClick}><Item className={"itemOnMobile"} arrowClass={"devis"} titleClass={"devis"} icon={stars} title={"Devis"}/></a></Link>




        
        
        
        
        
        
    </div>





        return (
            mobileMenu
        )
        
} 

export default Menu
