import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const OrderSwapModule = buildModule("OrderSwapModule", (m) => {

  const OrderSwap = m.contract("OrderBasedSwap");

  return { OrderSwap };
});

export default OrderSwapModule;
