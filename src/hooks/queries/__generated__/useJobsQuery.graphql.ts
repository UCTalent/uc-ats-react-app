/**
 * @generated SignedSource<<11b8f461112fbf73c3d80dcf69e4608b>>
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
  status: ReadonlyArray<string>;
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
        readonly web3meta: any | null | undefined;
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "perPage"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v3 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  },
  {
    "kind": "Variable",
    "name": "perPage",
    "variableName": "perPage"
  },
  {
    "kind": "Variable",
    "name": "status",
    "variableName": "status"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "about",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "appliedNum",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "benefits",
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
  "name": "droppedNum",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experienceLevel",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hiredNum",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
  "name": "minimumQualifications",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "preferredRequirement",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "responsibilities",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "salary",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewedNum",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "logoUrl",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "web3meta",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPages",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
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
            "args": (v3/*: any*/),
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
                  (v23/*: any*/),
                  (v24/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "organization",
                    "plural": false,
                    "selections": [
                      (v25/*: any*/),
                      (v26/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v27/*: any*/)
                ],
                "storageKey": null
              },
              (v28/*: any*/)
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
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
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
            "args": (v3/*: any*/),
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
                  (v23/*: any*/),
                  (v24/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "organization",
                    "plural": false,
                    "selections": [
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v27/*: any*/)
                ],
                "storageKey": null
              },
              (v28/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1906408284593fa0e7c944e65e08612c",
    "id": null,
    "metadata": {},
    "name": "useJobsQuery",
    "operationKind": "query",
    "text": "query useJobsQuery(\n  $status: [String!]!\n  $page: Int!\n  $perPage: Int!\n) {\n  business {\n    jobs(status: $status, page: $page, perPage: $perPage) {\n      jobs {\n        about\n        appliedNum\n        benefits\n        createdAt\n        droppedNum\n        experienceLevel\n        hiredNum\n        id\n        jobType\n        location\n        locationType\n        locationValue\n        managementLevel\n        minimumQualifications\n        preferredRequirement\n        responsibilities\n        salary\n        status\n        title\n        updatedAt\n        viewedNum\n        organization {\n          name\n          logoUrl\n          id\n        }\n        web3meta\n      }\n      totalPages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5459dca368c0010b1f64679a2e301e2f";

export default node;
