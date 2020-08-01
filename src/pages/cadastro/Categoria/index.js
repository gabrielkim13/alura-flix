import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = { name: '', description: '', color: '#000' };

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(initialValues);

  const handleChange = (event) => {
    setNewCategory({ ...newCategory, [event.target.getAttribute('name')]: event.target.value });
  };

  return (
    <PageDefault>
      <h1>
        New category:
        {newCategory.name}
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          setCategories([...categories, newCategory]);

          setNewCategory(initialValues);
        }}
      >
        <FormField label="Name" type="text" name="name" value={newCategory.name} onChange={handleChange} />
        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={newCategory.description}
          onChange={handleChange}
        />
        <FormField label="Color" type="color" name="color" value={newCategory.color} onChange={handleChange} />

        <button type="submit">Add category</button>
      </form>

      <ul>
        {categories.map((category) => {
          return <li key={`${category}`}>{JSON.stringify(category)}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
