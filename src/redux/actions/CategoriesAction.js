export const fetchCategories = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://6488a7c00e2469c038fe2b8b.mockapi.io/categories');
        if (!response.ok) {
          throw new Error('Gagal mengambil data kategori');
        }
        const data = await response.json();
        
        // Mengambil hanya nama kategori dari data yang diterima
        const categories = data.map(category => ({ id: category.id, name: category.name }));
        
        dispatch({
          type: 'FETCH_CATEGORIES',
          payload: categories,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };
  