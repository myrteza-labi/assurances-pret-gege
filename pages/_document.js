import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {



  

  return (
    <Html>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <body>
       

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}