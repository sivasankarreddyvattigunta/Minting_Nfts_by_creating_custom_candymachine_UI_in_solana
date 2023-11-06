# Minting_Nfts_by_creating_custom_candymachine_UI_in_solana

### SPL Token Commands (Create and Mint Tokens):

**Create a New Token:**
```shell
$ spl-token create-token --mint-authority <mint_authority_wallet_path> --fee-payer <fee_payer_wallet_path>
```

**Create Token Account:**
```shell
$ spl-token create-account --owner <owner_wallet_path> --fee-payer <fee_payer_wallet_path> <token_address>
```

**Mint Tokens to Account:**
```shell
$ spl-token mint <token_address> <amount> <token_account_address> --fee-payer <fee_payer_wallet_path> --mint-authority <mint_authority_wallet_path>
```

Remember to replace `<mint_authority_wallet_path>`, `<fee_payer_wallet_path>`, `<owner_wallet_path>`, `<token_address>`, `<amount>`, and `<token_account_address>` with the appropriate values specific to your configuration.

### Validating NFTs for Candy Machine:

Before proceeding with uploading or minting, it's crucial to validate your NFTs to ensure they meet the required standards. Use the following command to validate your NFTs:

```
$ sugar validate
```

This command will check your NFT metadata and asset files to ensure they are correctly formatted and compatible with the candy machine.

### Uploading NFTs to Candy Machine:

After successfully validating your NFTs, upload your metadata and asset files to the candy machine using the following command:

```
$ sugar upload
```

This command will upload your validated NFT metadata and asset files to the configured candy machine.

### Deploying Candy Machine:

Once your NFTs are uploaded and validated, deploy the candy machine using the following command:

```
$ sugar deploy
```

This command will deploy your candy machine, making your NFTs available for minting.

### Verifying Candy Machine Configuration:

Verify the deployed candy machine configuration to ensure everything is set up correctly:

```
$ sugar verify
```

This command will verify the deployed candy machine's configuration, ensuring it matches your intended settings.

### Minting NFTs using Candy Machine:

Finally, mint your NFTs to users by running the following command:

```
$ sugar mint
```

This command will initiate the minting process, allowing users to claim NFTs from the deployed candy machine.

Certainly! Here's the updated set of commands, including `npm install`, `yarn install`, and the GitHub profile link for the author, along with the license:

### Install Dependencies:

**Using npm:**
```shell
$ npm install
```

**Using Yarn:**
```shell
$ yarn install
```


### Author Information:

**GitHub Profile for Sivasankar Reddy Vattigunta:**
[Sivasankar Reddy Vattigunta](https://github.com/sivasankarreddyvattigunta)

### License:

**License:** []

