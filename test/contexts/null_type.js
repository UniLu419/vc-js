/* eslint-disable quotes, quote-props, max-len */
const nullType =
{
  "@context": [{
    "@version": 1.1
  }, "https://w3id.org/security/v2", {
    "cred": "https://w3.org/2018/credentials#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "Policy": "cred:Policy",
    "VerifiableCredential": "cred:VerifiableCredential",
    "VerifiablePresentation": "cred:VerifiablePresentation",
    "credentialStatus": {"@id": "cred:credentialStatus", "@type": null},
    "credentialSubject": {"@id": "cred:credentialSubject", "@type": "@id"},
    "evidence": {"@id": "cred:evidence", "@type": "@id"},
    "expirationDate": {"@id": "cred:expirationDate", "@type": "xsd:dateTime"},
    "issuanceDate": {"@id": "cred:issuanceDate", "@type": "xsd:dateTime"},
    "issuer": {"@id": "cred:issuer", "@type": "@id"},
    "revocation": {"@id": "cred:revocation", "@type": "@id"},
    "termsOfUse": {"@id": "cred:termsOfUse", "@type": "@id"},
    "verifiableCredential": {"@id": "cred:verifiableCredential", "@type": "@id", "@container": "@graph"},

    "referenceId": "cred:referenceId"
  }]
};

module.exports = {
  nullType
};
