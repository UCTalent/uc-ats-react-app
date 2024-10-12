/**
 * @generated SignedSource<<c6a3ac3ecd171bd5892f2d76fa0f93d0>>
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
    readonly talent: {
      readonly about: string | null | undefined;
      readonly createdAt: any;
      readonly employmentStatus: string | null | undefined;
      readonly englishProficiency: string | null | undefined;
      readonly experienceLevel: number | null | undefined;
      readonly headline: string | null | undefined;
      readonly id: string;
      readonly managementLevel: number | null | undefined;
      readonly skills: ReadonlyArray<{
        readonly mainRole: string | null | undefined;
        readonly name: string | null | undefined;
        readonly role: {
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly roleId: string;
        readonly skillType: string | null | undefined;
        readonly updatedAt: any;
      }> | null | undefined;
      readonly status: string | null | undefined;
      readonly step: number | null | undefined;
      readonly updatedAt: any;
      readonly user: {
        readonly avatar: string | null | undefined;
        readonly email: string;
        readonly id: string;
        readonly name: string | null | undefined;
        readonly phoneNumber: string | null | undefined;
        readonly phoneNumberCountry: string | null | undefined;
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
  "name": "about",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "employmentStatus",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "englishProficiency",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experienceLevel",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "headline",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "managementLevel",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "step",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "roleId",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "skillType",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mainRole",
  "storageKey": null
},
v17 = {
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
    (v8/*: any*/),
    (v13/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phoneNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phoneNumberCountry",
      "storageKey": null
    }
  ],
  "storageKey": null
};
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
            "concreteType": "Talent",
            "kind": "LinkedField",
            "name": "talent",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Skill",
                "kind": "LinkedField",
                "name": "skills",
                "plural": true,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Role",
                    "kind": "LinkedField",
                    "name": "role",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              (v17/*: any*/)
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
            "concreteType": "Talent",
            "kind": "LinkedField",
            "name": "talent",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Skill",
                "kind": "LinkedField",
                "name": "skills",
                "plural": true,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Role",
                    "kind": "LinkedField",
                    "name": "role",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              (v17/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c1206e663ff177c3daafcf823a4c8a1f",
    "id": null,
    "metadata": {},
    "name": "useJobCandidateTalentSummaryQuery",
    "operationKind": "query",
    "text": "query useJobCandidateTalentSummaryQuery(\n  $id: String!\n) {\n  business {\n    talent(id: $id) {\n      about\n      createdAt\n      employmentStatus\n      englishProficiency\n      experienceLevel\n      headline\n      id\n      managementLevel\n      status\n      step\n      updatedAt\n      skills {\n        name\n        roleId\n        skillType\n        updatedAt\n        role {\n          name\n          id\n        }\n        mainRole\n        id\n      }\n      user {\n        avatar\n        email\n        id\n        name\n        phoneNumber\n        phoneNumberCountry\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc09ceaf4b8cb4bbc0f7fdd0bc6b2aff";

export default node;
