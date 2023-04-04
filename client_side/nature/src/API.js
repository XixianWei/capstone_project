

const BASE_URL = 'http://localhost:8080';

export const getAllForests = async () => {
    try {
      const response = await fetch(`${BASE_URL}/forests`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
export const getForestById = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/forests/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const newForest = async (forest, forestListId) => {
    try {
      const response = await fetch(`${BASE_URL}/forests/${forestListId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(forest),
        });
        const data = await response.json();
        return data;
        } catch (error) {
        console.log(error);
        }
        };
        
    export const updateForest = async (id, forest) => {
        try {
        const response = await fetch(`${BASE_URL}/forests/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(forest),
        });
        const data = await response.json();
        return data;
        } catch (error) {
        console.log(error);
        }
        };
        
    export const deleteForest = async (id) => {
        try {
        const response = await fetch(`${BASE_URL}/forests/${id}`, {
        method: 'DELETE',
        });
        const data = await response.json();
        return data;
        } catch (error) {
        console.log(error);
        }
        };
  