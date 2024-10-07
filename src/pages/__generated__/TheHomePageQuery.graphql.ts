/**
 * @generated SignedSource<<585ed26a1a9a2d0bcaaae74757bf42d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TheHomePageQuery$variables = Record<PropertyKey, never>;
export type TheHomePageQuery$data = {
  readonly jobs: ReadonlyArray<{
    readonly createdAt: any;
    readonly experienceLevel: string | null | undefined;
    readonly id: string;
  }>;
};
export type TheHomePageQuery = {
  response: TheHomePageQuery$data;
  variables: TheHomePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "jobs",
    "plural": true,
    "selections": [
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TheHomePageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TheHomePageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "187839c58cf488f6235f1191ba380a3b",
    "id": null,
    "metadata": {},
    "name": "TheHomePageQuery",
    "operationKind": "query",
    "text": "query TheHomePageQuery {\n  jobs {\n    createdAt\n    experienceLevel\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0d261c515c0b82d236e90ac6b7d9f5f3";

export default node;
