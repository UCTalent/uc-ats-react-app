/**
 * @generated SignedSource<<8825f499c5fbf4511076d3970faf141e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useJobCandidateTalentResumeQuery$variables = {
  id: string;
};
export type useJobCandidateTalentResumeQuery$data = {
  readonly business: {
    readonly jobApply: {
      readonly id: string;
      readonly talent: {
        readonly id: string;
        readonly managementLevel: number | null | undefined;
        readonly specialities: ReadonlyArray<{
          readonly id: string;
          readonly role: {
            readonly name: string | null | undefined;
          } | null | undefined;
          readonly speciality: string | null | undefined;
        }> | null | undefined;
        readonly user: {
          readonly avatar: string | null | undefined;
          readonly city: {
            readonly nameAscii: string;
          } | null | undefined;
          readonly email: string;
          readonly id: string;
          readonly name: string | null | undefined;
          readonly phoneNumber: string | null | undefined;
          readonly phoneNumberCountry: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
      readonly uploadedResume: {
        readonly resumeUrl: string | null | undefined;
      } | null | undefined;
    };
  };
};
export type useJobCandidateTalentResumeQuery = {
  response: useJobCandidateTalentResumeQuery$data;
  variables: useJobCandidateTalentResumeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "managementLevel",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "speciality",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatar",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phoneNumber",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phoneNumberCountry",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameAscii",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resumeUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useJobCandidateTalentResumeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BusinessQuery",
        "kind": "LinkedField",
        "name": "business",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "JobApply",
            "kind": "LinkedField",
            "name": "jobApply",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Talent",
                "kind": "LinkedField",
                "name": "talent",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Speciality",
                    "kind": "LinkedField",
                    "name": "specialities",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Role",
                        "kind": "LinkedField",
                        "name": "role",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "City",
                        "kind": "LinkedField",
                        "name": "city",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UploadedResume",
                "kind": "LinkedField",
                "name": "uploadedResume",
                "plural": false,
                "selections": [
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useJobCandidateTalentResumeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BusinessQuery",
        "kind": "LinkedField",
        "name": "business",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "JobApply",
            "kind": "LinkedField",
            "name": "jobApply",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Talent",
                "kind": "LinkedField",
                "name": "talent",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Speciality",
                    "kind": "LinkedField",
                    "name": "specialities",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Role",
                        "kind": "LinkedField",
                        "name": "role",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "City",
                        "kind": "LinkedField",
                        "name": "city",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UploadedResume",
                "kind": "LinkedField",
                "name": "uploadedResume",
                "plural": false,
                "selections": [
                  (v11/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3c9006555b91f8b1f4a6049f2992b3ba",
    "id": null,
    "metadata": {},
    "name": "useJobCandidateTalentResumeQuery",
    "operationKind": "query",
    "text": "query useJobCandidateTalentResumeQuery(\n  $id: String!\n) {\n  business {\n    jobApply(id: $id) {\n      id\n      talent {\n        id\n        managementLevel\n        specialities {\n          id\n          speciality\n          role {\n            name\n            id\n          }\n        }\n        user {\n          avatar\n          email\n          id\n          name\n          phoneNumber\n          phoneNumberCountry\n          city {\n            nameAscii\n            id\n          }\n        }\n      }\n      uploadedResume {\n        resumeUrl\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cb27322326e32bd4cdce698243a94357";

export default node;
