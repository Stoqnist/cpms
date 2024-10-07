import 'dotenv/config';
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // define resources here...

  }
}

// for development, use account/region from cdk cli
// const devEnv = {
//   account: process.env.DEV_ACCOUNT,
//   region: process.env.DEV_REGION,
// };

const prodEnv = {
  account: process.env.PROD_ACCOUNT,
  region: process.env.PROD_REGION,
};

const app = new App();

// new MyStack(app, 'cpms-dev', { env: devEnv });
new MyStack(app, 'cpms-prod', { env: prodEnv });

app.synth();
