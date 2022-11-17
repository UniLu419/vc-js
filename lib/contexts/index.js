/*!
 * Copyright (c) 2019-2022 Digital Bazaar, Inc. All rights reserved.
 */
const credentialContexts = require('credentials-context').contexts;
const vcExamplesV1Context = require('./vc-examples-v1.js').CONTEXT;
const vcExamplesV1ContextUrl = require('./vc-examples-v1.js').CONTEXT_URL;
const odrlContext = require('./odrl.js').CONTEXT;
const odrlContextUrl = require('./odrl.js').CONTEXT_URL;

const contexts = {};

contexts[vcExamplesV1ContextUrl] = vcExamplesV1Context;
contexts[odrlContextUrl] = odrlContext;

for(const [url, context] of credentialContexts.entries()) {
  contexts[url] = context;
}

module.exports = {
  contexts
};
