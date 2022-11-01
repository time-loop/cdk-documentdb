import { clickupCdk } from '@time-loop/clickup-projen';

const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name: '@time-loop/cdk-documentdb',

  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  licensed: true,

  deps: ['multi-convention-namer'],
  devDeps: ['@time-loop/clickup-projen'],
  projenrcTs: true,

  author: '', // leverage default
  authorAddress: '', // leverage default
  repositoryUrl: '', // leverage default
});
project.synth();
