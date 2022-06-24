import Link from "next/link";

function Product(props) {
  return (
    <div className="productContainer">
      <div className="productsList">
        <Link href="/garanties">
          <a>
            <div className="product">
              <span className="material-symbols-outlined productIcon">
                enhanced_encryption
              </span>

              <h4 className="productTitle">Garanties</h4>
            </div>
          </a>
        </Link>
        <Link href="/cout">
          <a>
            {" "}
            <div className="product">
              <span className="material-symbols-outlined productIcon">
                euro
              </span>
              <h4 className="productTitle">Coûts</h4>
            </div>
          </a>
        </Link>
        <Link href="/comparatif">
          <a>
            {" "}
            <div className="product">
              <span className="material-symbols-outlined productIcon">
                compare_arrows
              </span>
              <h4 className="productTitle">Comparatif</h4>
            </div>
          </a>
        </Link>
        <Link href="/comparatif">
          <a>
            <div className="product">
              <span className="material-symbols-outlined productIcon">
                insights
              </span>
              <h4 className="productTitle">Négociation</h4>
            </div>
          </a>
        </Link>
      </div>
      <div className="productList2">
        <Link href="/devis">
          <a>
            <div className="product2">
              <span className="material-symbols-outlined productIcon2">
                magic_button
              </span>
              <h4 className="productTitle2">Devis</h4>
            </div>
          </a>
        </Link>
        <Link href="/pret">
          <a>
            <div className="product2">
              <span class="material-symbols-outlined productIcon2">real_estate_agent</span>
              <h4 className="productTitle2">Prêt</h4>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Product;
