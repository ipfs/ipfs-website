export const state = () => ({
  mobileNavActive: false,
  navHeight: 0,
  routerLocation: {},
});

export const mutations = {
  toggleMobileNav: (state, data) => {
    state.mobileNavActive = data;

    const body = document.querySelector('body');
    if (body.classList.contains('overflow-hidden')) {
      body.classList.remove('overflow-hidden');
    } else {
      body.classList.add('overflow-hidden');
    }
  },
  setNavHeight: (state, data) => {
    state.navHeight = data;
  },
  setRouterLocation: (state, data) => {
    state.routerLocation = data;
  },
};
