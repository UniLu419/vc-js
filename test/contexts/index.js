const credentialsContexts = require('credentials-context').contexts;
const credentialConstants = require('credentials-context').constants;
const didContexts = require('did-context').contexts;
const didConstants = require('did-context').constants;
const v1Contexts = require('veres-one-context').contexts;
const v1Constants = require('veres-one-context').constants;

const {invalidId} = require('./invalid_id.js');
const {nullVersion} = require('./null_version.js');
const {nullId} = require('./null_id.js');
const {nullType} = require('./null_type.js');

const {CREDENTIALS_CONTEXT_V1_URL} = credentialConstants;
const {DID_CONTEXT_URL} = didConstants;
const {VERES_ONE_CONTEXT_V1_URL} = v1Constants;

const invalidContexts = {
  veresOne: {
    url: VERES_ONE_CONTEXT_V1_URL,
    value: v1Contexts.get(VERES_ONE_CONTEXT_V1_URL)
  },
  did: {
    url: DID_CONTEXT_URL,
    value: didContexts.get(DID_CONTEXT_URL)
  },
  valid: {
    url: CREDENTIALS_CONTEXT_V1_URL,
    value: credentialsContexts.get(CREDENTIALS_CONTEXT_V1_URL)
  },
  invalidId: {
    url: 'https://invalid-id.org',
    value: invalidId
  },
  nullVersion: {
    url: 'https://null-version.org',
    value: nullVersion
  },
  nullId: {
    url: 'https://null-id.org',
    value: nullId
  },
  nullType: {
    url: 'https://null-type.org',
    value: nullType
  },
  nullDoc: {
    url: 'https://null-doc.org',
    value: null
  }
};

module.exports = {
  invalidContexts
};
