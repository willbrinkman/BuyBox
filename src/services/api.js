const BASE_URL = 'https://fakestoreapi.com/';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error("Server error");
    }
    return response.json();
};


export const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };