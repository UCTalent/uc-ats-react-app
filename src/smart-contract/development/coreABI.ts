export const ADDRESS_CORE_SMART_CONTRACT = "0xF62Ca2263042aC0C43b252feaA04cA6DAF8DBD87"

export const coreABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "ecosystemFeePercentage", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "referralFeePercentage", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "disputeFeePercentage", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "baseReferalPercentage", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "freezePeriod", type: "uint256" },
      { indexed: false, internalType: "address", name: "treasury", type: "address" },
    ],
    name: "ConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "jobId", type: "bytes32" },
      { indexed: false, internalType: "bool", name: "reverted", type: "bool" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    name: "DisputeResolved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint8", name: "version", type: "uint8" }],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "jobId", type: "bytes32" },
      { indexed: true, internalType: "address", name: "creator", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    name: "JobClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "jobId", type: "bytes32" },
      { indexed: true, internalType: "address", name: "talent", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    name: "JobCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "jobId", type: "bytes32" },
      { indexed: true, internalType: "address", name: "creator", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    name: "JobCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "jobId", type: "bytes32" },
      { indexed: true, internalType: "address", name: "creator", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    name: "JobDisputed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "_newOwner", type: "address" }],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    inputs: [{ internalType: "bytes32", name: "_jobId", type: "bytes32" }],
    name: "closeJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "_jobIb", type: "bytes32" }],
    name: "completeJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "config",
    outputs: [
      { internalType: "uint256", name: "ecosystemFeePercentage", type: "uint256" },
      { internalType: "uint256", name: "referralFeePercentage", type: "uint256" },
      { internalType: "uint256", name: "disputeFeePercentage", type: "uint256" },
      { internalType: "uint256", name: "baseReferalPercentage", type: "uint256" },
      { internalType: "uint256", name: "freezePeriod", type: "uint256" },
      { internalType: "address", name: "treasury", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_jobId", type: "bytes32" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint256", name: "_timestamp", type: "uint256" },
    ],
    name: "createJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "_jobId", type: "bytes32" }],
    name: "disputeJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_usdt", type: "address" },
      { internalType: "address", name: "_jobNFT", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "jobNFT",
    outputs: [{ internalType: "contract IJobNFT", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "jobs",
    outputs: [
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "address", name: "talent", type: "address" },
      { internalType: "address", name: "referrer", type: "address" },
      { internalType: "uint256", name: "referalPercentage", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
      { internalType: "uint256", name: "closeTimestamp", type: "uint256" },
      { internalType: "uint256", name: "disputeTimestamp", type: "uint256" },
      { internalType: "uint256", name: "nftId", type: "uint256" },
      { internalType: "enum UCReferral.Status", name: "status", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_jobId", type: "bytes32" },
      { internalType: "bool", name: "_reverted", type: "bool" },
    ],
    name: "resolveDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_ecosystemFeePercentage", type: "uint256" },
      { internalType: "uint256", name: "_referralFeePercentage", type: "uint256" },
      { internalType: "uint256", name: "_disputeFeePercentage", type: "uint256" },
      { internalType: "uint256", name: "_baseReferalPercentage", type: "uint256" },
      { internalType: "uint256", name: "_freezePeriod", type: "uint256" },
      { internalType: "address", name: "_treasury", type: "address" },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_jobNFT", type: "address" }],
    name: "setJobNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_usdtToken", type: "address" }],
    name: "setUsdtToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newValue", type: "address" }],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtToken",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
]