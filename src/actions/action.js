'use strict';

let actions = {

    headerAction: (text) => ({
        type: 'TOGGLE',
        text
    }),

    menuAction: () => ({
        type: 'ATOGGLE'
    })

};

export default actions;