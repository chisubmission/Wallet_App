
* clone project
* npm install 
* npm run build

#From the point of view, the wallet has been viewed in two ways:
* options: options for full screen view.
* popup: popup for popup view.

# Each src file name with the file description:
* WelcomePage : This file for welcome to MetaMask wallet.
* PhishingWarningPage : This file for warning to phishing attracts.
* BasicPage : This file is for a basic understanding of everyThing about MetaMask wallet.
* 
* WalletSetup : This file is for starting wallet setup with import wallet or create wallet. Here two child components are NewToImportWallet and NewToCreateWallet.
* 
* NewToImportWallet : This file is a child component of WalletSetup.
* ImportHelpImproveWallet : This file for help user improve MetaMask.
* ImportWallet : This file for Import existing wallet using a Secret Recovery Phrase.
* ImportWalletForm : This file is a child component of ImportWallet that includes a secret recovery phrase and a new password form.
*
* NewToCreateWallet : This file is a child component of WalletSetup.
* CreateHelpImproveWallet : This file for help user improve MetaMask.
* CreateWallet : This file for create a new wallet with create password.
* CreateWalletForm : This file is a child component of CreateWallet that includes a new create password form.
* SecureWalletPage : This file is for learn about your recovery phrase and how to keep your wallet safe.
* 
* SecretBackupPhrase : This file for secret backup phrase and starting download secret backup phrase.
* ConfirmSecretBackupPhrase : This file is for confirming the secret backup phrase or confirming with an encrypted file.
* 
* SeedPhraseEncryptInfo : This file for seed phrase encrypt Information about creating pin and downloading seed phrase.
* SeedPhraseEncryptPin : This file is for creating a pin to secure your seed phrase.
* SeedPhraseDownload : This file is for downloading encrypted seed phrase to the device.
* SeedPhraseDownloadSuccess : This file for the alert seed phrase was successfully encrypted and downloaded to the device.
* Congratulations : This is the congratulations file it's will show after successfully importing the wallet and create wallet.

Home page components:
* Home.js : This file is viewed for all home page-related elements and here includes Ethereum networks, Account, Buy, Send, and other child components.
* Account1 : This is a child component file of Home.js, that's for account info and account menu.
* Buy : This is a child component of Home, here included Deposit Ether or buy ether with Wyre, and this file is viewed as all about learning of Ether.
* Send : This is a child component of Home, The file has included search add recipient and select assets type and select amount for send and also specify a gas price and limit and confirm send.
