import axios from "axios";
import api from '@/core/api';
import Vue from "vue";
import TestModel from "../models/test.model";

export default {

getItems({commit}) {
        return axios
            .get(api.test)
            .then((res) => {
                let data = res.data.test;
                commit(
                    "setItems",
                    data.map((i) => {
                        return new TestModel(i);
                    })
                );
                return true;
            })
            .catch(() => {
                return false;
            });
    },

setItem(_, payload) {
        return axios
            .post(api.test, payload)
            .then((res) => {
                Vue.$toast.success(res.data);
                return true;
            })
            .catch(() => {
                return false;
            });
    },

updateItem(_, payload) {
        return axios
            .put(api.test + `/${payload.id}`, payload.data)
            .then((response) => {
                const res = response.data;
                Vue.$toast.success(res);
                return true;
            })
            .catch(() => {
                return false;
            });
    },

deleteItem({commit}, id) {
        return axios
            .delete(api.test + `/${id}`)
            .then((response) => {
                const res = response.data;
                commit("deleteItem", id);
                Vue.$toast.success(res);
                return true;
            })
            .catch(() => {
                return false;
            });
    },

getItemById(_, id) {
        return axios
            .get(api.test + `/${id}`)
            .then((response) => {
                const res = new TestModel(response.data.test);
                return res;
            })
            .catch(() => {
                return false;
            });
    },
}