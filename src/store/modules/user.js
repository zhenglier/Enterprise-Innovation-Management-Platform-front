import { login, logout, getInfo,signup } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
    role: "",
  };
};

export const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, uuid, captcha} = userInfo;
    //发送网络请求
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password, uuid: uuid, captcha: captcha })
        .then((response) => {
          const  data  = response;

          if (data.code === 20001) {
            console.log("请输入验证码");
          } else if (data.code === 20002) {
            console.log("请刷新页面");
          } else if (data.code === 20003) {
            console.log("验证码错误");
          }

          commit("SET_TOKEN", data.token);
          console.log(data.role+" login");
          localStorage.removeItem('role');
          localStorage.setItem('role',data.role);
          resetRouter();
          setToken(data.token);
          window.location.reload();
          resolve();
        })
        // .catch((error) => {
        //   reject(error);
        // });
    });
  },
  signup({commit},userInfo){
    // console.log(userInfo)
    return new Promise((resolve,reject) => {
      signup(userInfo.username,userInfo.password)
        .then((response) =>{
          console.log(response);
          resolve();
        })
    })

  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken(); // must remove  token  first
          // resetRouter();
          commit("RESET_STATE");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
