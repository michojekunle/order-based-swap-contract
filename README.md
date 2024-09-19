# OrderSwap Contract

The **OrderSwap** contract allows users to deposit ERC20 tokens and specify a different token they would like to receive in return. Other users can fulfill these swap orders by transferring the requested token in exchange for the deposited tokens.

## Features

- **Create Swap Orders**: Users can deposit an ERC20 token and specify the amount and type of token they wish to receive in return.
- **Fill Swap Orders**: Buyers can fill swap orders by sending the requested token and receiving the deposited tokens.
- **Cancel Swap Orders**: Depositors can cancel their open swap orders and reclaim their deposited tokens before a buyer fills the order.

## Getting Started

### Prerequisites

To interact with this contract, you need the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. Clone the repository:

```
git clone https://github.com/michojekunle/order-based-swap-contract.git 
cd order-based-swap-contract
```

1. Install dependencies:

```
npm install
```

## Contract Usage

### 1\. **Create Swap Order**

A user can create a swap order by calling the `createOrder` function:

```
function createOrder(address _tokenDeposited, uint256 _amountDeposited, address _tokenExpected, uint256 _amountExpected)
```

Before calling this function, the user must approve the `OrderSwap` contract to transfer `amountDeposited` of `tokenDeposited`.

### 2\. **Fill Order**

A buyer can fulfill a swap order by calling the `fillOrder` function:

```
function fillOrder( uint256 _orderId )
```

The buyer must approve the `OrderSwap` contract to transfer `amountDeposited` of `tokenDeposited` before calling this function.

### 3\. **Cancel Order**

The depositor can cancel their swap order if it hasn't been filled yet by calling the `cancelOrder` function:

```
function cancelOrder( uint256 _orderId )
```

### Events

The contract emits the following events to track activity:

- **OrderCreated**: Emitted when a new order is created.
- **OrderCancelled**: Emitted when a depositor cancels their order.
- **OrderFilled**: Emitted when a buyer fulfills an order.

## License

This project is licensed under the MIT License.