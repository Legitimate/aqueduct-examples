import { BigNumber } from 'bignumber.js';
import { Aqueduct, MarketOrder } from 'aqueduct';
import { ZeroEx } from '0x.js';

// Initialize the Aqueduct client
Aqueduct.Initialize();

(async () => {
  const txHash = await new MarketOrder({
    account: '0x00be81aeb2c6b82c68123f49b4bf983224124ada',
    baseTokenSymbol: 'MLN',
    quoteTokenSymbol: 'WETH',
    // buying .1 MLN
    quantityInWei: ZeroEx.toBaseUnitAmount(new BigNumber(.1), 18),
    nodeUrl: 'http://localhost:8545',
    type: 'buy'
  }).execute();

  console.log(`market order placed - txHash: ${txHash}`);
  process.exit(0);
})();
