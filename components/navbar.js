import Logo from './logo'; 
import Item from "./Item"
import { useEffect, useState } from 'react'
import Link from 'next/link';



function Navbar(props){ 

    const stars = <span className="material-symbols-rounded devis">magic_button</span>
    const imgMenu = props.imgMenu; 






    





        /* test de la navbar qui apparait en scrollant vers le haut  */

        const [scrollDir, setScrollDir] = useState("");

        useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
            }
            setScrollDir(scrollY > lastScrollY ? " navbarHidden " : " navbarDisplay ");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        console.log(scrollDir);

        return () => window.removeEventListener("scroll", onScroll);
        }, [scrollDir]);

        






    return (
        <div className={"Navbar " + scrollDir}>
            <Logo/>
            <div className="desktopMenu">
                <Link href="/"><a><Item  className={"itemOnDesktop"} title={"Accueil"}/></a></Link>
                <Link href="/garanties"><a><Item  className={"itemOnDesktop"} title={"Garanties"}/></a></Link>
                <Link href="/cout"><a><Item  className={"itemOnDesktop"} title={"Coût"}/></a></Link>
                <Link href="/comparatif"><a><Item  className={"itemOnDesktop"} title={"Comparatif"}/></a></Link>

                <Link href="/negociation"><a><Item  className={"itemOnDesktop"} title={"Négociation"}/></a></Link>
                <Link href="/pret"><a><Item  className={"itemOnDesktop"} title={"Prêt"}/></a></Link>
                <Link href="/contact"><a><Item  className={"itemOnDesktop"} title={"Contact"}/></a></Link>
                <Link href="/devis"><a><Item  icon={stars} className={"itemOnDesktop itemDevis"} titleClass={"devis"} title={"Devis"}/></a></Link>
            </div>
            <span onClick={props.onClick} className="material-symbols-outlined menuIcon">{imgMenu}</span>
        </div>
    )
} 

export default Navbar