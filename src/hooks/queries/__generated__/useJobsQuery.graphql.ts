/**
 * @generated SignedSource<<1440a393a4e051845ad23dd3f72aa1d1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useJobsQuery$variables = {
  page: number;
  perPage: number;
};
export type useJobsQuery$data = {
  readonly business: {
    readonly jobs: {
      readonly jobs: ReadonlyArray<{
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
        readonly organization: {
          readonly logoUrl: string | null | undefined;
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly preferredRequirement: string;
        readonly responsibilities: string;
        readonly salary: any | null | undefined;
        readonly status: string | null | undefined;
        readonly title: string;
        readonly updatedAt: any;
        readonly viewedNum: number | null | undefined;
      }>;
      readonly totalPages: number;
    };
  };
};
export type useJobsQuery = {
  response: useJobsQuery$data;
  variables: useJobsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "perPage"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  },
  {
    "kind": "Variable",
    "name": "perPage",
    "variableName": "perPage"
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
  "name": "name",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "logoUrl",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPages",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useJobsQuery",
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
            "concreteType": "JobPagination",
            "kind": "LinkedField",
            "name": "jobs",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Job",
                "kind": "LinkedField",
                "name": "jobs",
                "plural": true,
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
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "organization",
                    "plural": false,
                    "selections": [
                      (v23/*: any*/),
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v25/*: any*/)
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
    "name": "useJobsQuery",
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
            "concreteType": "JobPagination",
            "kind": "LinkedField",
            "name": "jobs",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Job",
                "kind": "LinkedField",
                "name": "jobs",
                "plural": true,
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
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "organization",
                    "plural": false,
                    "selections": [
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v25/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1a56a80db566be318433a4e37f641341",
    "id": null,
    "metadata": {},
    "name": "useJobsQuery",
    "operationKind": "query",
    "text": "query useJobsQuery(\n  $page: Int!\n  $perPage: Int!\n) {\n  business {\n    jobs(page: $page, perPage: $perPage) {\n      jobs {\n        about\n        appliedNum\n        benefits\n        createdAt\n        droppedNum\n        experienceLevel\n        hiredNum\n        id\n        jobType\n        location\n        locationType\n        locationValue\n        managementLevel\n        minimumQualifications\n        preferredRequirement\n        responsibilities\n        salary\n        status\n        title\n        updatedAt\n        viewedNum\n        organization {\n          name\n          logoUrl\n          id\n        }\n      }\n      totalPages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cdebb1e6bb6fc2bbf32b6f5881d4c65f";

export default node;
