<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <MobileMenu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client && window) {
      window.history.scrollRestoration = 'auto';

      // redirect 'ipfs.io' to the new canonical domain name 'ipfs.network'
      // https://github.com/protocol/bifrost-infra/issues/178#issuecomment-1133082634
      const { hostname, pathname } = window.location;
      // regular ipfs.io
      if (hostname === 'ipfs.io' && !(pathname.startsWith('/ipns/ipfs.io/') || pathname.startsWith('/ipfs/'))) {
        window.location.hostname = hostname.replace('ipfs.io', 'ipfs.network');
      }
      // subdomain gateways (no tls)
      if (hostname.startsWith('ipfs.io.ipns.')) {
        window.location.hostname = hostname.replace('ipfs.io', 'ipfs.network');
      }
      // subdomain gateways (inlined)
      if (hostname.startsWith('ipfs-io.ipns.')) {
        window.location.hostname = hostname.replace('ipfs-io', 'ipfs-network');
      }
      // path gateways
      if (pathname.startsWith('/ipns/ipfs.io/')) {
        window.location.pathname = pathname.replace(
          '/ipns/ipfs.io/',
          '/ipns/ipfs.network/'
        );
      }
    }
  },
};
</script>
