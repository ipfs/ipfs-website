/*
 *
 * 📦 [Module] NuxtModuleIpfs
 *
 */

// ///////////////////////////////////////////////////////////////////// Imports
// -----------------------------------------------------------------------------
// ///////////////////////////////////////////////////////////////////// General
import Path from 'path';

// ///////////////////////////////////////////////////////////////////// Plugins
const MethodsPlugin = Path.resolve(__dirname, 'plugin.js');

// /////////////////////////////////////////////////////////////////// Functions
// -----------------------------------------------------------------------------
// ------------------------------------------------------------- registerPlugins
const registerPlugins = (instance, next) => {
  const plugins = {
    Methods: { src: MethodsPlugin, fileName: 'nuxt-module-ipfs/methods.js' },
  };
  Object.keys(plugins).forEach((key) => {
    const plugin = plugins[key];
    const dst = instance.addTemplate(plugin).dst;
    instance.options.plugins.push({
      src: Path.join(instance.options.buildDir, dst),
      ssr: undefined,
      mode: plugin.mode,
    });
  });
  if (next) {
    return next();
  }
};

// ------------------------------------------------------------------ parseRoute
const parseRoute = (route) => {
  const relativity = '../'.repeat(route.split('/').length - 1);
  return {
    // Make core nuxt files relative
    replaceSrc: route !== '/' ? `${relativity}_nuxt/` : '_nuxt/',
    // Make static directory files relative -- MUST run all component paths through $relativity method
    replaceStatic: route !== '/' ? `${relativity}` : '',
  };
};

// -------------------------------------------------------------------- addHooks
const addHooks = (instance) => {
  let staticAssetsOpts;
  let parsed;

  /*
    Grab the static asset path options to be applied in the render:routeContext
    hook (need the dir and the bundle version)
  */

  instance.nuxt.hook('generate:before', (generator, generateOptions) => {
    staticAssetsOpts = generateOptions.staticAssets;
  });

  /*
    This block gives us access to the generated javascript before it is
    serialized
  */

  instance.nuxt.hook('render:routeContext', (ctx) => {
    parsed = parseRoute(ctx.routePath);
    // Apply url replacements to generated javascript before it is serialized
    ctx.staticAssetsBase = `${parsed.replaceSrc}${staticAssetsOpts.dir}/${staticAssetsOpts.version}`;
  });

  /*
    This block gives us access to the generated HTML
  */

  instance.nuxt.hook('generate:page', (payload) => {
    parsed = parseRoute(payload.route);
    // Apply url replacements to generated HTML
    payload.html = payload.html
      .replace(/\/_nuxt\//gi, parsed.replaceSrc)
      .replace(/\/relativity\//gi, parsed.replaceStatic);
  });
};

// ////////////////////////////////////////////////////////////////// Initialize
// -----------------------------------------------------------------------------
function NuxtModuleIpfs() {
  console.log(`📦 [Module] NuxtModuleIpfs`);
  registerPlugins(this, () => {
    if (process.env.NODE_ENV !== 'development') {
      addHooks(this);
    }
  });
}

// ////////////////////////////////////////////////////////////////////// Export
// -----------------------------------------------------------------------------
export default NuxtModuleIpfs;
