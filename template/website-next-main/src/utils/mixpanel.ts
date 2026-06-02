// lib/mixpanel.ts

import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '471bf094cd4abc28921cdb27d9251925';

export const initMixpanel = () => {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
    ignore_dnt: true
  });

  // Identify a hardcoded user
  const userId = 'test_user';
  mixpanel.identify(userId);
  mixpanel.people.set({
    $email: 'test@test.com',
    $name: 'Test User',
    user_id: userId,
  });

  console.log('Identified user:', userId);
};

export default mixpanel;

// import mixpanel from "mixpanel-browser";

// export const initMixpanel = (token: string) => {
//   mixpanel.init(token, {
//     debug: true,
//     track_pageview: true,
//     persistence: "localStorage",
//     ignore_dnt: true,
//   });
//   return mixpanel;
// };