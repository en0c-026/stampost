
import { detectProvider } from './utils/detectProvider.js'
//import { ethers } from "ethers";
import { MainApp } from "./MainApp.js";


document.addEventListener('DOMContentLoaded', (event) => {

	detectProvider().then((value) => {

		if (value.result) {

			if (value.chainId == '0x1') {

				//var	ethersProvider = new ethers.providers.Web3Provider(value.provider)
				var metamaskProvider = value.provider
				MainApp(metamaskProvider)
			} else {

				console.log('Select Main Net in Metamask');
			}

		} else {

			console.log('Install Metamask');
		}

	})
})

if (window.ethereum) {

	ethereum.on('chainChanged', (_chainId) => window.location.reload());
}
