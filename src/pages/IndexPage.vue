<template>
  <q-page class="column q-pa-md">
    <authenticator>
      <template v-slot="{ user, signOut }">
        <div class="row justify-between items-center q-mb-md">
          <h4 class="q-ma-none">My App</h4>
          <div v-if="user" class="row items-center q-gutter-md">
            <q-chip color="positive" text-color="white" icon="check_circle">
              {{ user.signInDetails?.loginId || user.username }}
            </q-chip>
            <q-btn 
              color="negative" 
              label="Sign Out" 
              @click="signOut"
              size="sm"
            />
          </div>
          <q-chip v-else color="warning" text-color="white" icon="warning">
            Not Authenticated
          </q-chip>
        </div>

        <div v-if="user" class="row items-center justify-evenly">
          <example-component
            title="Example component"
            active
            :todos="todos"
            :meta="meta"
          ></example-component>
        </div>
      </template>
    </authenticator>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Todo, Meta } from '@/components/models';
import ExampleComponent from '@/components/ExampleComponent.vue';

import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';


const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);

const meta = ref<Meta>({
  totalCount: 1200,
});
</script>
