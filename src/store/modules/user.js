import axios from 'axios';

var urlBase = 'https://fork.herokuapp.com/';
// var urlBase = 'http://127.0.0.1:8000/';

const state = {
    user: null
};

const getters = {
    getUser: state => state.user
};

const actions = {
    login({ commit }, login_data) {
        return new Promise((resolve, reject) => {
            axios({
                url: urlBase + 'auth/login',
                data: login_data,
                method: 'POST'
            })
            .then( response => {
                localStorage.setItem('forkUser', JSON.stringify(response.data.Data));
                commit('updateUser', response.data.Data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
        
    },
    register({ commit }, registration_data) {
        return new Promise((resolve, reject) => {
            axios({
                url: urlBase + 'auth/signup',
                data: registration_data,
                method: 'POST'
            })
            .then( response => {
                localStorage.setItem('forkUser', JSON.stringify(response.data.Data));
                commit('updateUser', response.data.Data);
                resolve(response);
            })
            .catch( error => {
                reject(error);
            });
        });
    },
    fetchUser({ dispatch, commit }) {
        var storedUser = JSON.parse(localStorage.getItem('forkUser'));
        if (!storedUser) {
            storedUser = null;
        }
        commit('updateUser', storedUser);
        dispatch('fetchTheme');
    },
    updateUser({ dispatch, commit }, data) {
        return new Promise ((resolve, reject) => {
            axios({
                url: urlBase + 'user/' + data.user_id,
                data: {
                    'enable_dark_mode': data.enable_dark_mode
                },
                headers: {
                    'Authorization': 'Bearer ' + data.auth_token
                },
                method: 'PATCH'
            })
            .then(response => {
                localStorage.setItem('forkUser', JSON.stringify(response.data.Data));
                commit('updateUser', response.data.Data);
                dispatch('fetchTheme');
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    fetchTheme() {
        if(state.user) {
            if (state.user.enable_dark_mode) {
                document.documentElement.className = "dark-theme";
            } else {
                document.documentElement.className = "light-theme";
            }
        }
    },
    logout({ commit }) {
        localStorage.removeItem('forkUser');
        commit('logout');
    }
};

const mutations = {
    updateUser: (state, userData) => {
        state.user = userData;
    },
    updateToken: (state, forkToken) => {
        state.user.forkToken = forkToken;
    },
    logout: (state) => {
        state.user = null;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};