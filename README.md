## Credits

https://github.com/dabit3/polygon-ethereum-nextjs-marketplace


## Local setup

1. Install dependencies 
```sh
npm install
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```