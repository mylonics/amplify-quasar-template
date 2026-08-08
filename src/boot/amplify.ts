import { defineBoot } from '#q-app';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

import AmplifyVue from '@aws-amplify/ui-vue';

Amplify.configure(outputs);

export default defineBoot(({ app }) => {
  app.use(AmplifyVue);
});
