import { hookstate } from '@hookstate/core';

const globalData = {
    scrollRefs: {},
}

const globalStateRevised = hookstate(globalData);

export default globalStateRevised;

