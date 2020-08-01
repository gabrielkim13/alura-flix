import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import categoriasRepository from '../../../repositories/categorias';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = { id: null, titulo: '', descricao: '', cor: '#000' };

  const { values, handleChange, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos().then((dbCategorias) => setCategories(dbCategorias));
  }, []);

  return (
    <PageDefault>
      <h1>
        New category:
        {values.titulo}
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          setCategories([...categories, values]);
          clearForm();
        }}
      >
        <FormField label="Name" type="text" name="titulo" value={values.titulo} onChange={handleChange} />
        <FormField
          label="Description"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField label="Color" type="color" name="cor" value={values.cor} onChange={handleChange} />

        <Button type="submit">Add category</Button>
      </form>

      <ul>
        {categories.map((category) => {
          return <li key={`${category.id}`}>{category.titulo}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
