import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkLocalTest from '../lib/index';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkLocalTest.SampleProjectStack(app, 'SampleProjectStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
