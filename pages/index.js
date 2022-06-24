import Head from 'next/head'
import Infos from '../components/Infos'; 
import Product from '../components/product';
import Partenaires from '../components/partenaires';






export default function Home() {



  return (
    <div>
      <Head></Head>


      <div className="firstSection firstSectionIndex">

        <h1 className="h1Title">
          Comparez et économisez sur vos factures.
        </h1>

        <div className="imgFirstContainer">
          <div className="calculImgFirst"></div>
          <div className="gegeImgFirst gegeImgFirstindex"></div>
        </div>
      </div> 

      <Product/>
      <Infos/>
      <Partenaires/>
    </div>
  )
}
