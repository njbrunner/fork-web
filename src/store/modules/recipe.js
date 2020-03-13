import axios from 'axios';

import store from '../index';

// var urlBase = 'https://fork.herokuapp.com/';
var urlBase = 'http://127.0.0.1:8000/';

const state = {
    recipies: null
};

const getters = {
    getRecipies: state => state.recipies
};

const actions = {
    fetchRecipies({commit}) {
        return new Promise((resolve, reject) => {
            axios({
                url: urlBase + '/recipe/',
                headers: {
                    'Authorization': 'Bearer ' + store.getters.getUser.auth_token
                },
                method: 'GET'
            })
            .then(response => {
                commit('updateRecipies', response.data.Data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
};

const mutations = {
    updateRecipies: (state, data) => {
        state.recipies = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};