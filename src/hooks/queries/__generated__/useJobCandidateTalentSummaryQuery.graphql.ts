/**
 * @generated SignedSource<<e0433050fd96c1d57fb0fee82b72e095>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useJobCandidateTalentSummaryQuery$variables = {
  id: string;
};
export type useJobCandidateTalentSummaryQuery$data = {
  readonly business: {
    readonly jobApply: {
      readonly id: string;
      readonly talent: {
        readonly about: string | null | undefined;
        readonly englishProficiency: string | null | undefined;
        readonly experienceLevel: number | null | undefined;
        readonly headline: string | null | undefined;
        readonly id: string;
        readonly managementLevel: number | null | undefined;
        readonly skills: ReadonlyArray<{
          readonly name: string | null | undefined;
        }> | null | undefined;
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
export type useJobCandidateTalentSummaryQuery = {
  response: useJobCandidateTalentSummaryQuery$data;
  variables: useJobCandidateTalentSummaryQuery$variables;
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
  "name": "headline",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "managementLevel",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = [
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "speciality",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatar",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phoneNumber",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phoneNumberCountry",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameAscii",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "englishProficiency",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "about",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experienceLevel",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resumeUrl",
  "storageKey": null
},
v17 = [
  (v5/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useJobCandidateTalentSummaryQuery",
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
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Skill",
                    "kind": "LinkedField",
                    "name": "skills",
                    "plural": true,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Speciality",
                    "kind": "LinkedField",
                    "name": "specialities",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Role",
                        "kind": "LinkedField",
                        "name": "role",
                        "plural": false,
                        "selections": (v6/*: any*/),
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
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "City",
                        "kind": "LinkedField",
                        "name": "city",
                        "plural": false,
                        "selections": [
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/)
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
                  (v16/*: any*/)
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
    "name": "useJobCandidateTalentSummaryQuery",
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
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Skill",
                    "kind": "LinkedField",
                    "name": "skills",
                    "plural": true,
                    "selections": (v17/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Speciality",
                    "kind": "LinkedField",
                    "name": "specialities",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Role",
                        "kind": "LinkedField",
                        "name": "role",
                        "plural": false,
                        "selections": (v17/*: any*/),
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
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "City",
                        "kind": "LinkedField",
                        "name": "city",
                        "plural": false,
                        "selections": [
                          (v12/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/)
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
                  (v16/*: any*/),
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
    "cacheID": "31a8c60e1b45d17f12b4ca87a1904cab",
    "id": null,
    "metadata": {},
    "name": "useJobCandidateTalentSummaryQuery",
    "operationKind": "query",
    "text": "query useJobCandidateTalentSummaryQuery(\n  $id: String!\n) {\n  business {\n    jobApply(id: $id) {\n      id\n      talent {\n        headline\n        id\n        managementLevel\n        skills {\n          name\n          id\n        }\n        specialities {\n          id\n          speciality\n          role {\n            name\n            id\n          }\n        }\n        user {\n          avatar\n          email\n          id\n          name\n          phoneNumber\n          phoneNumberCountry\n          city {\n            nameAscii\n            id\n          }\n        }\n        englishProficiency\n        about\n        experienceLevel\n      }\n      uploadedResume {\n        resumeUrl\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2bed637f6f12f328f49d1b6fa99227d";

export default node;
