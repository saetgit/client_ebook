export const state = () => ({
    count: null,
    cart: []
});

export const getters = {
    getCount(state) {
        return state.count;
    },
    getCart(state) {
        return state.cart;
    }
};

export const mutations = {
    SET_COUNT(state, count_input) {
        state.count = count_input;
    },
    SET_CART(state, cart_input) {
        state.cart = cart_input;
    }
};

export const actions = {
    setCount({ commit }, count) {
        commit("SET_COUNT", count);
    },
    setCart({ commit }, cart) {
        commit("SET_CART", cart);
    }
};
