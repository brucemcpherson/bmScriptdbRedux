// we want to be able to get a dropin cache usable on both live and fake
// family by default witll partition according to the scriptId, but we can have broader sharing by providing some other string
//import { newCacheDropin } from '@mcpher/gas-flex-cache'

// handle if it comes from a gaslibrary (as in live apps script)
let dropin = null
if (typeof bmGasFlexCache !== 'undefined' && bmGasFlexCache.newCacheDropin) {
  dropin = bmGasFlexCache.newCacheDropin
} else {
  dropin = newCacheDropin
}

const getUpstashBackend = ({kind='property', family = ScriptApp.getScriptId(), creds = null} = {}) => {
  creds = {
    ...creds,
    type:"upstash",
    family,
    kind
  }
  // this will be the store that we use  as the backend for the database
  const store = dropin({ creds });
  return store
}