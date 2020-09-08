#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLocalTestStack } from '../lib/cdk-local-test-stack';

const app = new cdk.App();
new CdkLocalTestStack(app, 'CdkLocalTestStack');
