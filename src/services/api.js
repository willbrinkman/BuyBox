const BASE_URL = 'https://fakestoreapi.com/';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error("Server error");
    }
    return response.json();
};


export const fetchAllProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  export const fetchSingleProduct = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error("Error fetching product with ID: ${id}:", error);
      throw error;
    }
  };

  export const fetchAllCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error("Error fetching product categories", error);
      throw error;
    }
  };