const api = {
  JSON: {'Content-Type': 'application/json'},
  getUser: async name => {
    const response = await fetch(`/users?name=${name}`, {
      headers: {...api.JSON},
    });
    const data = await response.json();
    if (data.length > 0) {
      const [userData] = data;
      return userData;
    }

    return false;
  },

  getResults: async () => {
    const response = await fetch(`/hotels`, {
      headers: {...api.JSON},
    });
    const results = await response.json();
    return results;
  },
};

export default api;
