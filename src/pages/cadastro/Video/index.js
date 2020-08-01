import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

function CadastroVideo() {
  const history = useHistory();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll().then((dbCategorias) => setCategories(dbCategorias));
  }, []);

  const initialValues = { id: null, titulo: '', url: '', categoria: '' };

  const { values, handleChange } = useForm(initialValues);

  return (
    <PageDefault>
      <h1>New video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const selectedCategory = categories.find((category) => category.titulo === values.categoria);

          if (!selectedCategory) {
            // eslint-disable-next-line no-alert
            alert('Invalid category!');

            return;
          }

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: selectedCategory.id,
            })
            .then(() => history.push('/'));
        }}
      >
        <FormField label="Title" type="text" name="titulo" value={values.titulo} onChange={handleChange} />
        <FormField label="URL" type="text" name="url" value={values.url} onChange={handleChange} />
        <FormField
          label="Category"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categories.map(({ titulo }) => titulo)}
        />

        <Button type="submit">Add Video</Button>
      </form>

      <Link to="/cadastro/categoria">New category</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
