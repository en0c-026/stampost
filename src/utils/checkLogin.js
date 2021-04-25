import { updateComp } from './updateComp.js';


export function checkLogin(accounts, store, App, components ) {
  if (accounts.length > 0) {

    updateComp(App, 'attach', components)

    store.do('setContent', {
      element: 'user',
      field: 'address',
      value: accounts[0]
    })
    store.do('setContent', {
      element: 'user',
      field: 'display',
      value: 'true'
    })
    store.do('setStyle', {
      element: 'buttonWallet',
      style: 'loading',
      value: 'false'
    })
    store.do('setStyle', {
      element: 'buttonWallet',
      style: 'display',
      value: 'false'
    })
    
  }
  if (accounts.length == 0){

    store.do('setStyle', {
      element: 'buttonWallet',
      style: 'display',
      value: 'true'
    })
    store.do('setContent', {
      element: 'user',
      field: 'address',
      value: ''
    })
    store.do('setContent', {
      element: 'user',
      field: 'display',
      value: 'false'
    })
    //window.location.reload()
  }
}
