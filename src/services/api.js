const BASE_URL = 'https://fakestoreapi.com/';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error("Server error");
    }
    return response.json();
};
