/**
 * @generated SignedSource<<12cee656874b8edf5a540f52bf505c36>>
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
      readonly about: string | null | undefined;
      readonly benefits: string | null | undefined;
      readonly experienceLevel: string | null | undefined;
      readonly id: string;
      readonly jobApplies: ReadonlyArray<{
        readonly createdAt: any;
        readonly id: string;
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
      readonly minimumQualifications: string;
      readonly responsibilities: string;
      readonly salary: any | null | undefined;
      readonly speciality: {
        readonly role: {
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly speciality: string | null | undefined;
      } | null | undefined;
      readonly title: string;
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
  "name": "about",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "benefits",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experienceLevel",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "JobApply",
  "kind": "LinkedField",
  "name": "jobApplies",
  "plural": true,
  "selections": [
    (v5/*: any*/),
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Talent",
      "kind": "LinkedField",
      "name": "talent",
      "plural": false,
      "selections": [
        (v5/*: any*/),
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
            (v5/*: any*/),
            (v7/*: any*/)
          ],
          "storageKey": null
        },
        (v6/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "jobType",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationType",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationValue",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "managementLevel",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minimumQualifications",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "responsibilities",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "salary",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "speciality",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
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
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v17/*: any*/)
                ],
                "storageKey": null
              },
              (v18/*: any*/)
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
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
                      (v7/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v17/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v18/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8509a33cace24404222db26c1a1d0663",
    "id": null,
    "metadata": {},
    "name": "useJobCandidatesQuery",
    "operationKind": "query",
    "text": "query useJobCandidatesQuery(\n  $id: String!\n) {\n  business {\n    job(id: $id) {\n      about\n      benefits\n      experienceLevel\n      id\n      jobApplies {\n        id\n        status\n        talent {\n          id\n          user {\n            avatar\n            email\n            id\n            name\n          }\n          status\n        }\n        createdAt\n      }\n      jobType\n      location\n      locationType\n      locationValue\n      managementLevel\n      minimumQualifications\n      responsibilities\n      salary\n      speciality {\n        role {\n          name\n          id\n        }\n        speciality\n        id\n      }\n      title\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "14d90d35737322fbec4f729c670ce190";

export default node;
