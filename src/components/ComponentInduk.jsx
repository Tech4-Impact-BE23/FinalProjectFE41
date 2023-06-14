const KomponenInduk = () => {
    const [forumId, setForumId] = useState('');
  
    useEffect(() => {
      const fetchForumId = async () => {
        try {
          const response = await fetch('https://6488a7c00e2469c038fe2b8b.mockapi.io/createforum');
          if (!response.ok) {
            throw new Error('Failed to fetch forum ID');
          }
          const data = await response.json();
          const forumIdFromAPI = data[0]?.id; // Pastikan data[0] tidak undefined sebelum mengakses id
          setForumId(forumIdFromAPI || ''); // Atur forumId dengan nilai dari API atau string kosong jika tidak tersedia
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchForumId();
    }, []);
  
    if (!forumId) {
      return <div>Loading forum ID...</div>;
    }
  
    return <CardDetailForum forumId={forumId} />;
  };
  

export default KomponenInduk;
