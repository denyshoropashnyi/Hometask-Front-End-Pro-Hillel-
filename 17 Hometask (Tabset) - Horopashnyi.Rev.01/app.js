// // @ts-check
'use strict';

class Tabset {

}

const tabs = new Tabset(
    document.getElementById('container')
);

tabs.show();
tabs.next();
tabs.prev();