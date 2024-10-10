/**
 * @generated SignedSource<<826470884783d64ea43ae5b732b6a4d3>>
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
  readonly job: {
    readonly about: string | null | undefined;
    readonly appliedNum: number | null | undefined;
    readonly benefits: string | null | undefined;
    readonly createdAt: any;
    readonly droppedNum: number | null | undefined;
    readonly experienceLevel: string | null | undefined;
    readonly hiredNum: number | null | undefined;
    readonly id: string;
    readonly jobType: string | null | undefined;
    readonly location: string | null | undefined;
    readonly locationType: string | null | undefined;
    readonly locationValue: string | null | undefined;
    readonly managementLevel: string | null | undefined;
    readonly minimumQualifications: string;
    readonly preferredRequirement: string;
    readonly responsibilities: string;
    readonly salary: any | null | undefined;
    readonly speciality: {
      readonly role: {
        readonly name: string | null | undefined;
      } | null | undefined;
      readonly speciality: string | null | undefined;
    } | null | undefined;
    readonly status: string | null | undefined;
    readonly title: string;
    readonly updatedAt: any;
    readonly viewedNum: number | null | undefined;
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
  "name": "appliedNum",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "benefits",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "droppedNum",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experienceLevel",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hiredNum",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "jobType",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationType",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationValue",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "managementLevel",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minimumQualifications",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "preferredRequirement",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "responsibilities",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "salary",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewedNum",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "speciality",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Speciality",
            "kind": "LinkedField",
            "name": "speciality",
            "plural": false,
            "selections": [
              (v23/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Role",
                "kind": "LinkedField",
                "name": "role",
                "plural": false,
                "selections": [
                  (v24/*: any*/)
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
    "name": "useJobCandidatesQuery",
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
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Speciality",
            "kind": "LinkedField",
            "name": "speciality",
            "plural": false,
            "selections": [
              (v23/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Role",
                "kind": "LinkedField",
                "name": "role",
                "plural": false,
                "selections": [
                  (v24/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "46178793d998b5a07404bb29b36e7725",
    "id": null,
    "metadata": {},
    "name": "useJobCandidatesQuery",
    "operationKind": "query",
    "text": "query useJobCandidatesQuery(\n  $id: String!\n) {\n  job(id: $id) {\n    about\n    appliedNum\n    benefits\n    createdAt\n    droppedNum\n    experienceLevel\n    hiredNum\n    id\n    jobType\n    location\n    locationType\n    locationValue\n    managementLevel\n    minimumQualifications\n    preferredRequirement\n    responsibilities\n    salary\n    status\n    title\n    updatedAt\n    viewedNum\n    speciality {\n      speciality\n      role {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e38a414ee4780e7096cb073a6c52b742";

export default node;
