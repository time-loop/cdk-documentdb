import { clickupCdk } from '@time-loop/clickup-projen';

const bundledDeps: string[] = [];
const peerDeps: string[] = [];

const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name: '@time-loop/cdk-documentdb',

  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  licensed: true,

  deps: [...bundledDeps, 'multi-convention-namer'],
  devDeps: [...peerDeps, '@time-loop/clickup-projen'],
  projenrcTs: true,

  author: '', // leverage default
  authorAddress: '', // leverage default
  repositoryUrl: '', // leverage default
});
project.synth();
