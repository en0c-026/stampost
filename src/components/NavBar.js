import Reef from 'reefjs';
import { randomInt } from '../utils/randomInt.js';
let storeNavbar = new Reef.Store({
  data: {
    styles: {
      buttonWallet: {
        display: 'true',
        loading: 'false'
      }
    },
    content: {
      user: {
        display: '',
        address: ''
      }
    },
    files: []
  },
  setters: {
    setStyle: function (props, todo) {
      let _elmt = props.styles[todo.element]
      todo.value != '' ? _elmt[todo.style] = todo.value : _elmt[todo.style] = ''
    },
    setContent: function (props, todo) {

      let td = props.content[todo.element];
      todo.value != '' ? td[todo.field] = todo.value : td[todo.field] = ''

    }
  },
  getters: {}
})
export const NavBar = new Reef('#nav-bar', {
  store: storeNavbar,
  template: function (props, elem) {
    let _stys = props.styles;
    let _cnt = props.content;

    var btnWalletDisplay = _stys.buttonWallet.display == 'true' ? '' : 'is-hidden';
    var btnWalletLoading = _stys.buttonWallet.loading == 'false' ? '' : 'is-loading';

    var userAddress = _cnt.user.address;
    var userDisplay = _cnt.user.display == 'true' ? '' : 'is-hidden';

    return `
    <nav class="navbar is-align-items-center" role="navigation" aria-label="main navigation">
      <div class="navbar-brand has-text-white-ter	">
        <a class="navbar-item" href="#">
          <img src="${window.location.origin}/src/logo.png">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu has-text-success">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

        </div>

        <span class="icon is-align-self-auto">
          <i class="fas fa-adjust has-text-dark" id="background-color"></i>
        </span>

        <div class="navbar-end">
            <div class="navbar-item">

              <span class="icon-text">

                <div class="${userDisplay}">
                  <span>
                    <img class="image is-32x32" src="https://avatars.dicebear.com/api/avataaars/${randomInt()}.svg" id="avatar-user">
                  </span>
                    <span class="is-size-6 mx-4">${userAddress}</span>
              </span>
            </div>

            <div class="buttons" >

              <button class="button is-info is-small mr-4 ${btnWalletDisplay} ${btnWalletLoading}" id="connect-wallet">

                <img class="image is-16x16" src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png">

                <span class=" ml-2">
                  CONNECT WALLET
                </span>

              </button>

            </div>
          </div>
        </div>
      </div>
    </nav>`

  }
  }
)
