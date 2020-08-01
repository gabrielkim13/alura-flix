import React from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>New video</h1>

      <Link to="/cadastro/categoria">New category</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
