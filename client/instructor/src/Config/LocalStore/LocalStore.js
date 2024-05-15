class LocalStore {
    storeToken(data) {
        localStorage.setItem("token", JSON.stringify(data));
    }

    getToken() {
        const tokenData = localStorage.getItem("token");
        return tokenData ? JSON.parse(tokenData) : null;
    }

    removeToken() {
        localStorage.removeItem("token");
    }
}

export default LocalStore = new LocalStore()