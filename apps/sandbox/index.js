import init from './pkg/sandbox.js';

const suppress = "Using exceptions for control flow, don't mind me.";
init().catch((error) => { if (!error.message.startsWith(suppress)) throw error; });
