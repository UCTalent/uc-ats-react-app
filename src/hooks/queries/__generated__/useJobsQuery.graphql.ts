/**
 * @generated SignedSource<<5f63fdb5e189fcd360013827bfd32205>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useJobsQuery$variables = Record<PropertyKey, never>;
export type useJobsQuery$data = {
  readonly jobs: ReadonlyArray<{
    readonly about: string | null | undefined;
    readonly country: {
      readonly codeIso3: string | null | undefined;
      readonly id: string;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly createdAt: any;
    readonly experienceLevel: string | null | undefined;
    readonly id: string;
    readonly jobType: string | null | undefined;
    readonly locationType: string | null | undefined;
    readonly locationValue: string | null | undefined;
    readonly managementLevel: string | null | undefined;
    readonly minimumQualifications: string;
    readonly organization: {
      readonly id: string;
      readonly logoUrl: string | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly preferredRequirement: string;
    readonly responsibilities: string;
    readonly title: string;
    readonly updatedAt: any;
  }>;
};
export type useJobsQuery = {
  response: useJobsQuery$data;
  variables: useJobsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "perPage",
        "value": 30
      }
    ],
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "jobs",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "about",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "experienceLevel",
        "storageKey": null
      },
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "jobType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "locationType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "locationValue",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "managementLevel",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "minimumQualifications",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "preferredRequirement",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "responsibilities",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "organization",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "logoUrl",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "codeIso3",
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": "jobs(perPage:30)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useJobsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useJobsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "99eeeb61a47ef1888f1a7e46537ced10",
    "id": null,
    "metadata": {},
    "name": "useJobsQuery",
    "operationKind": "query",
    "text": "query useJobsQuery {\n  jobs(perPage: 30) {\n    about\n    createdAt\n    experienceLevel\n    id\n    jobType\n    locationType\n    locationValue\n    managementLevel\n    minimumQualifications\n    preferredRequirement\n    responsibilities\n    title\n    updatedAt\n    organization {\n      id\n      logoUrl\n      name\n    }\n    country {\n      codeIso3\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad62b7ee6f4cb12efc69ea252539b92a";

export default node;
