import Link from "next/link";

function Product(props) {
  return (
    <div className="productContainer">
      <div className="productsList">
        <Link href="/garanties">
            <div className="product">
              <span className="material-symbols-outlined productIcon">
                enhanced_encryption
              </span>

              <p className="productTitle">Garanties</p>
            </div>
        </Link>
        <Link href="/cout">
            <div className="product">
              <span className="material-symbols-outlined productIcon">
                euro
              </span>
              <p className="productTitle">Coûts</p>
            </div>
        </Link>
        <Link href="/comparatif">
            <div className="product">
              <span className="material-symbols-outlined productIcon">
                compare_arrows
              </span>
              <p className="productTitle">Comparatif</p>
            </div>
        </Link>
        <Link href="/comparatif">
            <div className="product">
              <span className="material-symbols-outlined productIcon">
                insights
              </span>
              <p className="productTitle">Négociation</p>
            </div>
        </Link>
      </div>
      <div className="productList2">
        <Link href="/devis">
            <div className="product2">
              <span className="material-symbols-outlined productIcon2">
                magic_button
              </span>
              <p className="productTitle2">Devis</p>
            </div>
        </Link>
        <Link href="/pret">
            <div className="product2">
              <span className="material-symbols-outlined productIcon2">real_estate_agent</span>
              <p className="productTitle2">Prêt</p>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
