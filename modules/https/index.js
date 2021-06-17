/*
 *
 * 📦 [Module] Core
 *
 */

// ///////////////////////////////////////////////////////////////////// Imports
// -----------------------------------------------------------------------------
// ///////////////////////////////////////////////////////////////////// General
import Path from 'path';
import Fs from 'fs';

// ///////////////////////////////////////////////////////////////////// Liftoff
// -----------------------------------------------------------------------------
function HttpsModule() {
  if (
    process.env.NODE_ENV === 'development' &&
    typeof this.options.server === 'object'
  ) {
    this.options.server.https = {
      key: Fs.readFileSync(Path.resolve(__dirname, '../../localhost_key.pem')),
      cert: Fs.readFileSync(
        Path.resolve(__dirname, '../../localhost_cert.pem')
      ),
    };
  }
}

// ////////////////////////////////////////////////////////////////////// Export
// -----------------------------------------------------------------------------
export default HttpsModule;
