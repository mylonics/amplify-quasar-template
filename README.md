# Amplify Gen2 Quasar App (amplify-quasar-template)

## Setup Instructions

Start by cloning this template repository.

Alternatively start a new quasar project repository and copy the `amplify` folder, merge the `.gitignore` copy the `src/boot/amplify.ts` file and add `amplify` to the boot line in `quasar.config.ts` : `    boot: ['i18n', 'axios', 'amplify'],`. Then run `npm install --legacy-peer-deps aws-amplify @aws-amplify/ui-vue @aws-amplify/backend @aws-amplify/backend-cli aws-cdk aws-cdk-lib constructs`

Now in the amplify web console start a new amplify project pointing at the repo you have just created. You can specify package versions in the build. This template requires Node 22 or greater to build correctly.

## Running Locally
To run locally you will need the amplify_outputs.json from the cloud or run the program in a sandbox with 
```npx ampx sandbox```

Then do your normal ```quasar dev``` You may need to call ```npm install``` or ```npm install --legacy-peer-deps``` first for the application to work.


## Adding additional functionality

Follow the instruction [https://docs.amplify.aws/vue/](https://docs.amplify.aws/vue/) for details on how to use amplify gen 2.