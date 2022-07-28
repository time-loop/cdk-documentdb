const { clickupCdk } = require('@time-loop/clickup-projen');
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name: '@time-loop/cdk-documentdb',
  author: 'DevOps Team',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  deps: ['multi-convention-namer'],
  devDeps: ['@time-loop/clickup-projen'],
});
project.synth();
