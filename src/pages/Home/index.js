import React, { useState, useEffect } from 'react';

import categoriasRepository from '../../repositories/categorias';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos().then((dbCategorias) => setCategorias(dbCategorias));
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      {categorias.length === 0 && <>Loading...</>}

      {categorias.length > 0 && (
        <>
          <BannerMain
            videoTitle={categorias[0].videos[0].titulo}
            videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa! "
            url={categorias[0].videos[0].url}
          />

          {categorias.map((category, index) => {
            if (index === 0) return <Carousel key={category.titulo} ignoreFirstVideo category={category} />;

            return <Carousel key={category.titulo} category={category} />;
          })}
        </>
      )}

      <Footer />
    </div>
  );
}

export default Home;
