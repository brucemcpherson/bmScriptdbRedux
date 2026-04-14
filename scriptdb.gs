//import { ScriptDbInstance } from "./scriptdbinstance.js";
//import { getUpstashBackend } from "./backends.js";
/**
 * Top-level service used to get a database instance.
 */
class ScriptDbBase {
  constructor({family = null, kind , type = "upstash", creds = null} = {}) {
    // this default will only be available if we are running live or gas-fakes apps script
    if (family === null && typeof ScriptApp !== typeof undefined) family = ScriptApp.getScriptId()
    if (!family) {
      throw new Error ('no family provided, and no scriptID available')
    }
    // to do .. add how to get a database
    if (type !== 'upstash') {
      throw new Error ('only currently support upstash backend')
    }
    if (!creds) {
      throw new Error ('no upstash creds provided')
    }
    const how = getUpstashBackend({family, kind, creds})
    console.log (`...database is partitioned by ${family}`)
    this._instance = new ScriptDbInstance(how);
  }
  /**
   * Gets the database for the current user and script.
   * @returns {ScriptDbInstance}
   */
  getMyDb() {
    return this._instance
  }
}

// should use by default the partitioned by scriptId version of the database
const newScriptDb = (how) => new ScriptDbBase(how);
