import Reef from 'reefjs';

export const ShowComp = new Reef('#show-component', {
  template: function () {

    return `<div class="buttons">
              <button class="button" id="change-component" value="uploader">Uploader</button>
              <button class="button" id="change-component" value="contract-gen">Contract Generator</button>
              <button class="button" id="change-component" value="scanner">Scanner</button>
              <button class="button" id="change-component" value="make-offer">Make Offer</button>
            </div>`
  }
})
