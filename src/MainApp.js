import Reef from 'reefjs';

// Import Components
import { NavBar } from './components/NavBar.js'
import { Uploader } from './components/Uploader.js'
import { ContractGenerator } from './components/ContractGenerator.js'
import { ShowComp } from './components/ShowComp.js';
import { Scanner } from './components/Scanner.js';
import { MakeOffer } from './components/MakeOffer.js';

//Imports Utils Functions
import { uploadFiles } from './utils/uploadFiles.js'
import { randomInt } from './utils/randomInt.js'
import { updateComp } from './utils/updateComp.js'
import { checkPsfree } from './utils/checkPsfree.js';
import { changeStyle } from './utils/changeStyle.js';
import { handleComp } from './utils/handleComp.js';
import { checkLogin } from './utils/checkLogin.js';

export const MainApp = function(metamaskP) {

  let store = new Reef.Store({
  	data: {
      user: {},
      modules: {
        m1: '',
        m2: '',
        m3: '',
        m4: '',
        m5: '',
        m6: ''
      },
      styles : {},
      files: []
  	},
  	setters: {
      moduleSet: function (props, todo) {

        let mods = props.modules;
        let _md = todo.ps
        let _id = todo.id
        if (_id == '') {
          mods[_md] = ''
        }
        if (_id != '' ) {
          mods[_md] = _id
        }

      },
      pushFiles: function (props, todo) {
        props.files.push(todo);
      }
  	},
  	getters: {
      modulesGet: function (props) {
        return props.modules;
      },
      getFiles: function (props) {
        return props.files
      },
  	}
  });
  let App = new Reef('#app', {
  	store: store,
  	template: function (props) {

      let _mods = props.modules;

  		return `<div class='px-6 py-4 has-background-white'>
                <div id="nav-bar">
                </div>
                  <div class="columns mt-4">
                    <div class="column box m-2" id="show-component"></div>
                  </div>
                  <div class="columns mt-4">
    								<div class="column box m-2" id="${_mods.m1}"></div>
    								<div class="column box m-2" id="${_mods.m2}"></div>
    								<div class="column box m-2" id="${_mods.m3}"></div>
    							</div>
                  <div class="columns mt-4">
    								<div class="column box m-2" id="${_mods.m4}"></div>
    								<div class="column box m-2" id="${_mods.m5}"></div>
    								<div class="column box m-2" id="${_mods.m6}"></div>
    							</div>
              </div>`;
  	}
  });

  var signer;
  let mods;
  let psFree;

  updateComp(App, 'attach', [NavBar])

  metamaskP.request({ method: 'eth_accounts'}).then((accounts) => { checkLogin(accounts, NavBar.store, App, [ShowComp]) })
	metamaskP.on('accountsChanged', (accounts) => { checkLogin(accounts, NavBar.store, App, [ShowComp]) });
	metamaskP.on('chainChanged', (_chainId) => window.location.reload());

	document.addEventListener('click', (event) => {

    let inputFiles = document.getElementById('uploader')

		//Post Files Click Event
		if (event.target.id == 'btn-stamp-files' || event.target.parentNode.id == 'btn-stamp-files') {

      Uploader.store.do('setStyle', {
        element: 'buttonStampFiles',
        style: 'loading',
        value: 'true'
      })
			uploadFiles(inputFiles).then((files) => {

        for (var file of files) {
          let items = store.get('getFiles')
          file.id = items.length + 1
          store.do('pushFiles', file)
        }

        let tableF = store.get('getFiles')

        Uploader.store.do('setContent', {
          element: 'tableFiles',
          value: tableF
        })
        Uploader.store.do('setStyle', {
          element: 'buttonStampFiles',
          style: 'loading',
          value: 'false'
        })

      })

    }
		if (event.target.id == 'connect-wallet' || event.target.parentNode.id == 'connect-wallet') {

      NavBar.store.do('setStyle', {
        element: 'buttonWallet',
        style: 'loading',
        value: 'true'
      })
      metamaskP.request({ method: 'eth_requestAccounts' }).then().catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          NavBar.store.do('setStyle', {
            element: 'buttonWallet',
            style: 'loading',
            value: 'false'
          })
          return
        }
      });
    }
    if (event.target.id == 'change-component') {

      mods = store.get('modulesGet')
      psFree = checkPsfree(mods)

      if (event.target.value === 'uploader') {

        handleComp(store, mods, psFree, 'upload-files', App, [Uploader])

      }
      if (event.target.value === 'contract-gen') {

        handleComp(store, mods, psFree, 'contract-generator', App, [ContractGenerator])

      }
      if (event.target.value === 'make-offer') {

        handleComp(store, mods, psFree, 'make-offer', App, [MakeOffer])


      }
      if (event.target.value === 'scanner') {

        handleComp(store, mods, psFree, 'scanner', App, [Scanner])
      }

    }



  })
}
