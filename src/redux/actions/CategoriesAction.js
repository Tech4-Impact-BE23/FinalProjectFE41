export const fetchCategories = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://endpoint-finalproject.up.railway.app/categories',{
          method: 'GET',
          headers: {
          'Authorization': `${localStorage.getItem('UserToken')}`,
          'Content-Type': 'application/json',
        }}
        );
        if (!response.ok) {
          throw new Error('Gagal mengambil data kategori');
        }
        const data = await response.json();
        console.log(data);

        // Mengambil hanya nama kategori dari data yang diterima
        const categories = data.data.map(category => ({ id: category.id, name: category.name }));
        
        dispatch({
          type: 'FETCH_CATEGORIES',
          payload: categories,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };
  