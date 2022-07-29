const { clickupCdk } = require('@time-loop/clickup-projen');

const bundledDeps = [];
const peerDeps = [];

const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name: '@time-loop/cdk-documentdb',

  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  licensed: true,

  deps: [...bundledDeps, 'multi-convention-namer'],
  devDeps: [...peerDeps, '@time-loop/clickup-projen'],
});
project.synth();
