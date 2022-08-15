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
      const { hostname, pathname, href: url } = window.location;

      // regular ipfs.io
      if (
        hostname === 'ipfs.io' &&
        !(
          pathname.startsWith('/ipns/ipfs.io/') || pathname.startsWith('/ipfs/')
        )
      ) {
        window.location.replace(url.replace('//ipfs.io/', '//ipfs.tech/'));
      }
      // subdomain gateways (no tls)
      if (hostname.startsWith('ipfs.io.ipns.')) {
        window.location.replace(
          url.replace('//ipfs.io.ipns.', '//ipfs.tech.ipns.')
        );
      }
      // subdomain gateways (inlined)
      if (hostname.startsWith('ipfs-io.ipns.')) {
        window.location.replace(
          url.replace('//ipfs-io.ipns.', '//ipfs-tech.ipns.')
        );
      }
      // path gateways
      if (pathname.startsWith('/ipns/ipfs.io/')) {
        window.location.replace(
          url.replace('/ipns/ipfs.io/', '/ipns/ipfs.tech/')
        );
      }
      // drop www. if typed in address bar for some reason
      if (hostname.startsWith('www.ipfs.')) {
        window.location.replace(url.replace('//www.ipfs.', '//ipfs.'));
      }
      // ipfs.network → ipfs.tech (we used it before we got .tech)
      if (url.includes('ipfs.network')) {
        window.location.replace(url.replace('ipfs.network', 'ipfs.tech'));
      }
      if (url.includes('ipfs-network')) {
        window.location.replace(url.replace('ipfs-network', 'ipfs-tech'));
      }
    }
  },
};
</script>
