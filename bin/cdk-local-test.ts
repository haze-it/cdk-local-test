#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SampleProjectStack } from '../lib/cdk-local-test-stack';

const app = new cdk.App();
new SampleProjectStack(app, 'SampleProjectStack');
