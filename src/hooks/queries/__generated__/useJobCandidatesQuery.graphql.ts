/**
 * @generated SignedSource<<dafb1b4200c858d0ad92100542a11533>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useJobCandidatesQuery$variables = {
  id: string;
};
export type useJobCandidatesQuery$data = {
  readonly business: {
    readonly job: {
      readonly experienceLevel: string | null | undefined;
      readonly id: string;
      readonly jobApplies: ReadonlyArray<{
        readonly candidateTimestamp: any | null | undefined;
        readonly candidateWalletAddress: {
          readonly address: string | null | undefined;
        } | null | undefined;
        readonly createdAt: any;
        readonly id: string;
        readonly jobReferral: {
          readonly referrerTimestamp: any | null | undefined;
          readonly referrerWalletAddress: {
            readonly address: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
        readonly status: string | null | undefined;
        readonly talent: {
          readonly id: string;
          readonly status: string | null | undefined;
          readonly user: {
            readonly avatar: string | null | undefined;
            readonly email: string;
            readonly id: string;
            readonly name: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      }> | null | undefined;
      readonly jobType: string | null | undefined;
      readonly location: string | null | undefined;
      readonly locationType: string | null | undefined;
      readonly locationValue: string | null | undefined;
      readonly managementLevel: string | null | undefined;
      readonly salary: any | null | undefined;
      readonly speciality: {
        readonly role: {
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly speciality: string | null | undefined;
      } | null | undefined;
      readonly title: string;
      readonly web3meta: any | null | undefined;
    };
  };
};
export type useJobCandidatesQuery = {
  response: useJobCandidatesQuery$data;
  variables: useJobCandidatesQuery$variables;
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
  "name": "experienceLevel",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
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
  "concreteType": "Talent",
  "kind": "LinkedField",
  "name": "talent",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatar",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        },
        (v3/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "candidateTimestamp",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v10 = [
  (v9/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "referrerTimestamp",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "jobType",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationType",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationValue",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "managementLevel",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "salary",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "speciality",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "web3meta",
  "storageKey": null
},
v21 = [
  (v9/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useJobCandidatesQuery",
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
            "concreteType": "Job",
            "kind": "LinkedField",
            "name": "job",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "JobApply",
                "kind": "LinkedField",
                "name": "jobApplies",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "WalletAddress",
                    "kind": "LinkedField",
                    "name": "candidateWalletAddress",
                    "plural": false,
                    "selections": (v10/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "JobReferral",
                    "kind": "LinkedField",
                    "name": "jobReferral",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "WalletAddress",
                        "kind": "LinkedField",
                        "name": "referrerWalletAddress",
                        "plural": false,
                        "selections": (v10/*: any*/),
                        "storageKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Speciality",
                "kind": "LinkedField",
                "name": "speciality",
                "plural": false,
                "selections": [
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
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              (v19/*: any*/),
              (v20/*: any*/)
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
    "name": "useJobCandidatesQuery",
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
            "concreteType": "Job",
            "kind": "LinkedField",
            "name": "job",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "JobApply",
                "kind": "LinkedField",
                "name": "jobApplies",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "WalletAddress",
                    "kind": "LinkedField",
                    "name": "candidateWalletAddress",
                    "plural": false,
                    "selections": (v21/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "JobReferral",
                    "kind": "LinkedField",
                    "name": "jobReferral",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "WalletAddress",
                        "kind": "LinkedField",
                        "name": "referrerWalletAddress",
                        "plural": false,
                        "selections": (v21/*: any*/),
                        "storageKey": null
                      },
                      (v11/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Speciality",
                "kind": "LinkedField",
                "name": "speciality",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Role",
                    "kind": "LinkedField",
                    "name": "role",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v19/*: any*/),
              (v20/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f4b9dedacaa81dc41bce9a985b8766a7",
    "id": null,
    "metadata": {},
    "name": "useJobCandidatesQuery",
    "operationKind": "query",
    "text": "query useJobCandidatesQuery(\n  $id: String!\n) {\n  business {\n    job(id: $id) {\n      experienceLevel\n      id\n      jobApplies {\n        id\n        status\n        talent {\n          id\n          user {\n            avatar\n            email\n            id\n            name\n          }\n          status\n        }\n        createdAt\n        candidateTimestamp\n        candidateWalletAddress {\n          address\n          id\n        }\n        jobReferral {\n          referrerWalletAddress {\n            address\n            id\n          }\n          referrerTimestamp\n          id\n        }\n      }\n      jobType\n      location\n      locationType\n      locationValue\n      managementLevel\n      salary\n      speciality {\n        role {\n          name\n          id\n        }\n        speciality\n        id\n      }\n      title\n      web3meta\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c11dc4745f93355f780eb48ae22427e4";

export default node;
