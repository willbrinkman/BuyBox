const BASE_URL = "https://fakestoreapi.com";

const JSON_HEADERS = {
    'Content-Type': 'application/json'
};

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
    console.error(`Error fetching product with ID: ${id}:`, error);
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

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify({
          username,
          password,
      }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error logging in user: ${username}:`, error);
    throw error;
  }
};

export const createCart = async (userId, date, products) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify({
          userId: userId,
          date: date,
          products: products,
      }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error creating cart:`, error);
    throw error;
  }
};
