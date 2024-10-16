/**
 * @generated SignedSource<<0f17a3f7858aa48189d0beb625bc0693>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useJobInformationQuery$variables = {
  id: string;
};
export type useJobInformationQuery$data = {
  readonly business: {
    readonly job: {
      readonly about: string | null | undefined;
      readonly benefits: string | null | undefined;
      readonly experienceLevel: string | null | undefined;
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
      readonly skills: ReadonlyArray<{
        readonly name: string | null | undefined;
      }> | null | undefined;
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
export type useJobInformationQuery = {
  response: useJobInformationQuery$data;
  variables: useJobInformationQuery$variables;
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
  "name": "jobType",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationType",
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
  "name": "minimumQualifications",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "responsibilities",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "preferredRequirement",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "salary",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v15 = [
  (v14/*: any*/)
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "speciality",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationValue",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "web3meta",
  "storageKey": null
},
v20 = [
  (v14/*: any*/),
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useJobInformationQuery",
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
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
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
                    "selections": (v15/*: any*/),
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              (v17/*: any*/),
              (v18/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Skill",
                "kind": "LinkedField",
                "name": "skills",
                "plural": true,
                "selections": (v15/*: any*/),
                "storageKey": null
              },
              (v19/*: any*/)
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
    "name": "useJobInformationQuery",
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
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
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
                    "selections": (v20/*: any*/),
                    "storageKey": null
                  },
                  (v16/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v17/*: any*/),
              (v18/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Skill",
                "kind": "LinkedField",
                "name": "skills",
                "plural": true,
                "selections": (v20/*: any*/),
                "storageKey": null
              },
              (v19/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dcda2d71f40d44bba73f80fdf347aaaa",
    "id": null,
    "metadata": {},
    "name": "useJobInformationQuery",
    "operationKind": "query",
    "text": "query useJobInformationQuery(\n  $id: String!\n) {\n  business {\n    job(id: $id) {\n      about\n      benefits\n      experienceLevel\n      id\n      jobType\n      location\n      locationType\n      managementLevel\n      minimumQualifications\n      responsibilities\n      preferredRequirement\n      salary\n      speciality {\n        role {\n          name\n          id\n        }\n        speciality\n        id\n      }\n      title\n      locationValue\n      skills {\n        name\n        id\n      }\n      web3meta\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6261842811b66a9b6696b5f2c5d44c23";

export default node;
