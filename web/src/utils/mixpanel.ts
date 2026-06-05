// src/utils/mixpanel.ts

const stubMixpanel = {
  init: () => {},
  identify: () => {},
  people: { set: () => {} },
  track: () => {},
};

export const initMixpanel = () => {
  // Analytics disabled for static export
};

export default stubMixpanel;