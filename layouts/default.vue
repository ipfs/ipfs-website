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

      // redirect 'ipfs.io' to the new canonical domain name 'ipfs.tech'
      // https://github.com/protocol/bifrost-infra/issues/178#issuecomment-1195867284
      const { hostname, pathname } = window.location;
      // regular ipfs.io
      if (
        hostname === 'ipfs.io' &&
        !(
          pathname.startsWith('/ipns/ipfs.io/') || pathname.startsWith('/ipfs/')
        )
      ) {
        window.location.hostname = hostname.replace('ipfs.io', 'ipfs.tech');
      }
      // subdomain gateways (no tls)
      if (hostname.startsWith('ipfs.io.ipns.')) {
        window.location.hostname = hostname.replace('ipfs.io', 'ipfs.tech');
      }
      // subdomain gateways (inlined)
      if (hostname.startsWith('ipfs-io.ipns.')) {
        window.location.hostname = hostname.replace('ipfs-io', 'ipfs-tech');
      }
      // path gateways
      if (pathname.startsWith('/ipns/ipfs.io/')) {
        window.location.pathname = pathname.replace(
          '/ipns/ipfs.io/',
          '/ipns/ipfs.tech/'
        );
      }
    }
  },
};
</script>
