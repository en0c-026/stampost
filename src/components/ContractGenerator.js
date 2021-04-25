import Reef from 'reefjs';

export const ContractGenerator = new Reef('#contract-generator', {
    template: function (props, elem) {

      return `<h1 class="title is-size-6 fullwidth">Contract Generator</h1>`
    }
})
