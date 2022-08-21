---
title: Snapshot Strategies
sidebar_position: 1
---

# Snapshot

Snapshot employees three strategies in order to compute votes by each community member. The first strategy is derived from the Juicebox ticket booth which corresponds with the amount of funds contributed to the treasury by the member, this strategy is disabled until the DAO is fully operational. The second strategy is the amount of self-custody tokens held by members or if those tokens have been delegated to another address. The third strategy, which is the only currently implemented strategy, is based on the [governance nft](https://etherscan.io/address/0xdd407a053fa45172079916431d06e8e07f655042) which was distributed on February 12, 2022.

### Juicebox Ticket Strategy

```json
{
    "args": ["%{address}", "0x373"],
    "symbol": "TILES2DAO",
    "address": "0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc",
    "decimals": 18,
    "methodABI": {
        "name": "balanceOf",
        "type": "function",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    }
}
```

### Delegation

```json
{
    "symbol": "TILES2DAO (delegated)",
    "strategies": [
        {
            "name": "contract-call",
            "params": {
                "args": ["%{address}", "0x373"],
                "symbol": "TILES2DAO",
                "address": "0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc",
                "decimals": 18,
                "methodABI": {
                    "name": "balanceOf",
                    "type": "function",
                    "inputs": [
                        {
                            "name": "",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ],
                    "stateMutability": "view"
                }
            }
        },
        {
            "name": "erc721-with-multiplier",
            "params": {
                "symbol": "TILES2",
                "address": "0x4ddeF8Fc8EEE89848b4A802CEF9FC9E72B8674A4",
                "multiplier": 1000
            }
        }
    ]
}
```

### NFT w/Multiplier

```json
{
    "symbol": "TILES2",
    "address": "0x4ddeF8Fc8EEE89848b4A802CEF9FC9E72B8674A4",
    "multiplier": 1000
}
```
