import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/actions/CategoriesAction';

const FilterKategori = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    // Set selected categories based on categories from API
    const initialSelectedCategories = categories.map((category) => category.id);
    setSelectedCategories(initialSelectedCategories);
  }, [categories]);

  const handleCategoryChange = (categoryId) => {
    const isSelected = selectedCategories.includes(categoryId);

    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="position-sticky">
      <div className="d-flex flex-column align-items-start p-0 gap-15 border-bottom pb-3 px-4">
        <h4 className="mb-3" style={{ fontSize: '16px' }}>Filter Kategori</h4>
        {categories.map((category) => (
          <Form.Check
            key={category.id}
            type="checkbox"
            id={`category-${category.id}`}
            label={category.name}
            checked={selectedCategories.includes(category.id)}
            onChange={() => handleCategoryChange(category.id)}
            style={{ fontSize: '12px  !important ' }}
            inline
          />
        ))}
      </div>
    </div>
  );
};

export default FilterKategori;
