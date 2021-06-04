<template>
  <div>
    <StarfieldHero title="IPFS powers the Distributed Web">
      <h2 class="text-center">
        A peer-to-peer hypermedia protocol
        <br />
        designed to make the web faster, safer, and more open.
      </h2>
      <div class="flex flex-col sm:flex-row mt-6">
        <Button
          type="primary"
          href="#install"
          text="Get started"
          class="mr-0 sm:mr-2.5 mb-2.5 sm:mb-0 px-8 py-3"
          :on-click="(item) => onCTAClick({ ui: 'hero/install', ...item })"
        />
        <Button
          href="#how"
          class="px-8 py-3"
          text="How it works"
          :on-click="(item) => onCTAClick({ ui: 'hero/how', ...item })"
        />
      </div>
    </StarfieldHero>
    <section id="why" class="grid-margins py-36">
      <div class="text-center mb-20">
        <h2 class="font-display mb-3">The web of tomorrow needs IPFS today</h2>
        <p class="text-base sm:text-lg">
          IPFS aims to surpass HTTP in order to build a better web for all of
          us.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-20">
        <div>
          <div class="flex justify-center h-52">
            <svg-icon name="ipfs-illustration-http" />
          </div>
          <h3 class="text-center text-navy text-base sm:text-lg mb-4 font-bold">
            Today's web is inefficient and expensive
          </h3>
          <p>
            HTTP downloads files from one computer at a time instead of pieces
            from multiple computers simultaneously. Peer-to-peer IPFS saves big
            on bandwidth &mdash;
            <Link
              class="text-blueGreen font-bold hover:underline"
              :item="{
                link:
                  'https://math.oregonstate.edu/~kovchegy/web/papers/p2p-vdn.pdf',
                text: 'up to 60% for video',
              }"
              :on-click="
                (item) => onCTAClick({ ui: 'why/1-performance', ...item })
              "
            />
            &mdash; making it possible to efficiently distribute high volumes of
            data without duplication.
          </p>
        </div>
        <div>
          <div class="flex justify-center h-52">
            <svg-icon name="ipfs-illustration-history" />
          </div>
          <h3 class="text-center text-navy text-base sm:text-lg mb-4 font-bold">
            Today's web can't preserve humanity's history
          </h3>
          <p>
            <Link
              class="text-blueGreen font-bold hover:underline"
              :item="{
                link:
                  'https://blogs.loc.gov/thesignal/2011/11/the-average-lifespan-of-a-webpage/',
                text: 'The average lifespan of a web page is 100 days',
              }"
              :on-click="
                (item) => onCTAClick({ ui: 'why/2-preservation', ...item })
              "
            />
            before it's gone forever. It's not good enough for the medium of our
            era to be this fragile. IPFS keeps every version of and makes it
            simple to set up resilient networks for mirroring data.
          </p>
        </div>
        <div>
          <div class="flex justify-center h-52">
            <svg-icon name="ipfs-illustration-centralized" />
          </div>
          <h3 class="text-center text-navy text-base sm:text-lg mb-4 font-bold">
            Today's web is centralized, limiting opportunity
          </h3>
          <p>
            The Internet has turbocharged innovation by being one of the great
            equalizers in human history &mdash; but increasing consolidation of
            control threatens that progress. IPFS stays true to the original
            vision of an open, flat web by delivering technology to make that
            vision a reality.
          </p>
        </div>
        <div>
          <div class="flex justify-center h-52">
            <svg-icon name="ipfs-illustration-network" />
          </div>
          <h3 class="text-center text-navy text-base sm:text-lg mb-4 font-bold">
            Today's web is addicted to the backbone
          </h3>
          <p>
            IPFS powers the creation of diversely resilient networks that enable
            persistent availability &mdash; with or without Internet backbone
            connectivity. This means better connectivity for the developing
            world, during natural disasters, or just when you're on flaky coffee
            shop wi-fi.
          </p>
        </div>
      </div>
    </section>
    <section id="install" class="py-20 bg-gradient-6 text-white">
      <div class="grid-margins 2xl:px-32">
        <div class="text-center mb-16">
          <h2 class="font-display mb-3">Install IPFS</h2>
          <p class="text-base sm:text-lg">
            Join the future of the web right now &mdash; just choose the option
            that's right for you.
          </p>
        </div>
        <h3 class="text-2xl sm:text-3xl font-display text-center">
          Store and share files
        </h3>
        <div class="grid grid-cols-12 p-4 mt-4 gap-y-0 sm:gap-y-24">
          <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
            <img
              class="max-h-24 sm:max-h-36 mx-auto"
              src="~/assets/img/ipfs-desktop-hex.png"
              alt="IPFS Desktop icon"
            />
          </div>
          <div
            class="col-span-12 mb-16 text-center sm:mb-0 sm:col-span-10 sm:text-left"
          >
            <h4 class="text-xl sm:text-2xl mb-1.5">
              <Link
                class="text-blueGreenLight font-display hover:underline"
                :item="{
                  link: 'https://github.com/ipfs-shipyard/ipfs-desktop',
                  text: 'IPFS Desktop',
                }"
                :on-click="
                  (item) => onCTAClick({ ui: 'install/ipfs-desktop', ...item })
                "
              />
            </h4>
            <h5 class="mb-4 text-base sm:text-lg font-bold">
              IPFS for everyone
            </h5>
            <p class="mb-4">
              The desktop app offers menubar/tray shortcuts and an easy
              interface for adding, pinning, and sharing files &mdash; plus a
              full IPFS node ready for heavy-duty hosting and development too. A
              great choice for devs and non-devs alike.
            </p>
            <div class="flex justify-center sm:justify-start">
              <Button
                href="https://github.com/ipfs-shipyard/ipfs-desktop"
                target="_blank"
                rel="noopener"
                text="Get IPFS Desktop"
                :on-click="
                  (item) => onCTAClick({ ui: 'install/ipfs-desktop', ...item })
                "
              />
            </div>
          </div>
          <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
            <img
              class="max-h-24 sm:max-h-36 mx-auto"
              src="~/assets/img/command-line-hex.png"
              alt="Screenshot of IPFS command-line interface"
            />
          </div>
          <div
            class="col-span-12 mb-16 text-center sm:mb-0 sm:col-span-10 sm:text-left"
          >
            <h4 class="text-xl sm:text-2xl mb-1.5">
              <Link
                class="text-blueGreenLight font-display hover:underline"
                :item="{
                  link: 'https://docs.ipfs.io/how-to/command-line-quick-start',
                  text: 'Command-line install',
                }"
                :on-click="
                  (item) => onCTAClick({ ui: 'install/ipfs-cli', ...item })
                "
              />
            </h4>
            <h5 class="mb-4 text-base sm:text-lg font-bold">
              All IPFS, no frills
            </h5>
            <p class="mb-4">
              Just want IPFS in your terminal? Get step-by-step instructions
              getting up and running on the command line using the Go
              implementation of IPFS. Includes directions for Windows, macOS,
              and Linux.
            </p>
            <div class="flex justify-center sm:justify-start">
              <Button
                href="https://docs.ipfs.io/how-to/command-line-quick-start"
                target="_blank"
                rel="noopener"
                text="Get the CLI"
                :on-click="
                  (item) => onCTAClick({ ui: 'install/ipfs-cli', ...item })
                "
              />
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 grid grid-cols-12 sm:grid-cols-6"
          >
            <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
              <img
                class="max-h-24 sm:max-h-36 mx-auto"
                src="~/assets/img/ipfs-companion-hex.png"
                alt="IPFS Companion icon"
              />
            </div>
            <div
              class="col-span-12 mb-16 text-center sm:mb-0 sm:col-span-4 sm:text-left"
            >
              <h4 class="text-xl sm:text-2xl mb-1.5">
                <Link
                  class="text-blueGreenLight font-display hover:underline"
                  :item="{
                    link: 'https://github.com/ipfs-shipyard/ipfs-companion',
                    text: 'IPFS Companion',
                  }"
                  :on-click="
                    (item) =>
                      onCTAClick({ ui: 'install/ipfs-companion', ...item })
                  "
                />
              </h4>
              <h5 class="mb-4 text-base sm:text-lg font-bold">
                Add IPFS to your browser
              </h5>
              <p class="mb-4">
                Get <code>ipfs://</code> URL support and much more in your web
                browser with this extension.
              </p>
              <div class="flex justify-center sm:justify-start">
                <Button
                  href="https://github.com/ipfs-shipyard/ipfs-companion"
                  target="_blank"
                  rel="noopener"
                  text="Get Companion"
                  :on-click="
                    (item) =>
                      onCTAClick({ ui: 'install/ipfs-companion', ...item })
                  "
                />
              </div>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 grid grid-cols-12 sm:grid-cols-6"
          >
            <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
              <img
                class="max-h-24 sm:max-h-36 mx-auto"
                src="~/assets/img/ipfs-cluster.png"
                alt="IPFS Cluster logo"
              />
            </div>
            <div class="col-span-12 text-center sm:col-span-4 sm:text-left">
              <h4 class="text-xl sm:text-2xl mb-1.5">
                <Link
                  class="text-blueGreenLight font-display hover:underline"
                  :item="{
                    link: 'https://cluster.ipfs.io/',
                    text: 'IPFS Cluster',
                  }"
                  :on-click="
                    (item) =>
                      onCTAClick({ ui: 'install/ipfs-cluster', ...item })
                  "
                />
              </h4>
              <h5 class="mb-4 text-base sm:text-lg font-bold">
                For servers or big data
              </h5>
              <p class="mb-4">
                Automatically allocate, replicate, and track your data as
                pinsets across multiple IPFS nodes.
              </p>
              <div class="flex justify-center sm:justify-start">
                <Button
                  href="https://cluster.ipfs.io/"
                  target="_blank"
                  rel="noopener"
                  text="Get Cluster"
                  :on-click="
                    (item) =>
                      onCTAClick({ ui: 'install/ipfs-cluster', ...item })
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <h3 class="text-2xl sm:text-3xl font-display text-center mt-24 mb-4">
          Build with IPFS
        </h3>
        <div class="grid grid-cols-12 p-4 mt-4 gap-y-0 sm:gap-y-24">
          <div
            class="col-span-12 sm:col-span-6 grid grid-cols-12 sm:grid-cols-6"
          >
            <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
              <img
                class="max-h-24 sm:max-h-36 mx-auto"
                src="~/assets/img/go-ipfs-hex-logo.png"
                alt="IPFS icon with a superimposed Go logo"
              />
            </div>
            <div
              class="col-span-12 mb-16 sm:mb-0 text-center sm:col-span-4 sm:text-left"
            >
              <h4 class="text-xl sm:text-2xl mb-1.5">
                <Link
                  class="text-blueGreenLight font-display hover:underline"
                  :item="{
                    link: 'https://github.com/ipfs/go-ipfs',
                    text: 'Go implementation',
                  }"
                  :on-click="
                    (item) => onCTAClick({ ui: 'install/go-ipfs', ...item })
                  "
                />
              </h4>
              <p class="mb-4">
                The original IPFS, with core implementation, daemon server, CLI
                tooling, and more.
              </p>
              <div class="flex justify-center sm:justify-start">
                <Button
                  href="https://github.com/ipfs/go-ipfs"
                  target="_blank"
                  rel="noopener"
                  text="Get go-ipfs"
                  :on-click="
                    (item) => onCTAClick({ ui: 'install/go-ipfs', ...item })
                  "
                />
              </div>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 grid grid-cols-12 sm:grid-cols-6"
          >
            <div class="col-span-12 sm:col-span-2 mb-2 sm:mb-0">
              <img
                class="max-h-24 sm:max-h-36 mx-auto"
                src="~/assets/img/js-ipfs-logo.png"
                alt="js-ipfs logo"
              />
            </div>
            <div
              class="col-span-12 mb-16 sm:mb-0 text-center sm:col-span-4 sm:text-left"
            >
              <h4 class="text-xl sm:text-2xl mb-1.5">
                <Link
                  class="text-blueGreenLight font-display hover:underline"
                  :item="{
                    link: 'https://js.ipfs.io',
                    text: 'JS implementation',
                  }"
                  :on-click="
                    (item) => onCTAClick({ ui: 'install/js-ipfs', ...item })
                  "
                />
              </h4>
              <p class="mb-4">
                Written entirely in JavaScript for a world of possibilities in
                browser implementations.
              </p>
              <div class="flex justify-center sm:justify-start">
                <Button
                  href="https://js.ipfs.io"
                  target="_blank"
                  rel="noopener"
                  text="Get js-ipfs"
                  :on-click="
                    (item) => onCTAClick({ ui: 'install/js-ipfs', ...item })
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="how" class="grid-margins py-20">
      <div class="text-center mb-16">
        <h2 class="font-display mb-4">Here's how IPFS works</h2>
        <p class="text-base sm:text-lg">
          Take a look at what happens when you add a file to IPFS.
        </p>
      </div>
      <div class="max-w-3xl mx-auto">
        <div
          class="flex flex-col sm:flex-row text-center sm:text-left items-center mb-12"
        >
          <div
            class="flex items-center justify-center max-h-36 w-1/4 mb-5 sm:mb-0"
          >
            <svg-icon name="ipfs-illustrations-how-1" />
          </div>
          <div class="pl-0 sm:pl-14">
            <p class="leading-normal">
              Your file, and all of the <strong>blocks within it</strong>, is
              given a <strong>unique fingerprint</strong> called a
              <strong>cryptographic hash</strong>.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row text-center sm:text-left items-center mb-12"
        >
          <div
            class="flex items-center justify-center max-h-36 w-1/4 mb-5 sm:mb-0"
          >
            <svg-icon name="ipfs-illustrations-how-2" />
          </div>
          <div class="pl-0 sm:pl-14">
            <p class="leading-normal">
              IPFS <strong>removes duplications</strong> across the network.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row text-center sm:text-left items-center mb-12"
        >
          <div
            class="flex items-center justify-center max-h-36 w-1/4 mb-5 sm:mb-0"
          >
            <svg-icon name="ipfs-illustrations-how-3" />
          </div>
          <div class="pl-0 sm:pl-14">
            <p class="leading-normal">
              Each <strong>network node</strong> stores only content it is
              interested in, plus some indexing information that helps figure
              out which node is storing what.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row text-center sm:text-left items-center mb-12"
        >
          <div
            class="flex items-center justify-center max-h-36 w-1/4 mb-5 sm:mb-0"
          >
            <svg-icon name="ipfs-illustrations-how-4" />
          </div>
          <div class="pl-0 sm:pl-14">
            <p class="leading-normal">
              When you <strong>look up a file</strong> to view or download,
              you're asking the network to find the nodes that are storing the
              content behind that file's hash.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row text-center sm:text-left items-center"
        >
          <div
            class="flex items-center justify-center max-h-36 w-1/4 mb-5 sm:mb-0"
          >
            <svg-icon name="ipfs-illustrations-how-5" />
          </div>
          <div class="pl-0 sm:pl-14">
            <p class="leading-normal">
              You don't need to remember the hash, though &mdash; every file can
              be found by <strong>human-readable names</strong> using a
              decentralized naming system called <strong>IPNS</strong>.
            </p>
          </div>
        </div>
      </div>
      <h3 class="text-2xl sm:text-3xl font-display text-center mt-16 mb-8">
        Take a closer look
      </h3>
      <div class="flex flex-col sm:flex-row justify-around">
        <div class="flex flex-col items-center mb-8 sm:mb-0">
          <h4 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Want to dig in?
          </h4>
          <Button
            type="primary"
            href="https://docs.ipfs.io/"
            target="_blank"
            text="Check out the docs"
            :on-click="(item) => onCTAClick({ ui: 'how/docs', ...item })"
          />
        </div>
        <div class="flex flex-col items-center mb-8 sm:mb-0">
          <h4 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Hands-on learner?
          </h4>
          <Button
            type="primary"
            href="https://proto.school/course/ipfs"
            target="_blank"
            text="Explore ProtoSchool"
            :on-click="(item) => onCTAClick({ ui: 'how/protoschool', ...item })"
          />
        </div>
        <div class="flex flex-col items-center">
          <h4 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Curious where it all began?
          </h4>
          <Button
            type="primary"
            href="https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf"
            target="_blank"
            text="Read the whitepaper"
            :on-click="(item) => onCTAClick({ ui: 'how/whitepaper', ...item })"
          />
        </div>
      </div>
    </section>
    <Divider />
    <section class="grid-margins text-center py-20">
      <h2 class="font-display mb-4">IPFS can help here and now</h2>
      <p class="text-base sm:text-lg">
        No matter what you do with the web, IPFS helps make it better today.
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 gap-x-8 mt-24"
      >
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <svg-icon
              name="ipfs-illustration-archivists"
              class="h-36 w-36 mx-auto"
            />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Archivists
          </h3>
          <p>
            IPFS provides deduplication, high performance, and clustered
            persistence &mdash; empowering you to store the world's information
            for future generations.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <svg-icon
              name="ipfs-illustration-service"
              class="h-36 w-36 mx-auto"
            />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Service providers
          </h3>
          <p>
            Providing large amounts of data to users? IPFS offers secure,
            peer-to-peer content delivery &mdash; an approach that could save
            you millions in bandwidth costs.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <svg-icon name="ipfs-illustration-data" class="h-36 w-36 mx-auto" />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Researchers
          </h3>
          <p>
            If you're working with or distributing large data sets, IPFS can
            help provide fast performance and decentralized archiving.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 gap-x-8 mt-12"
      >
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <svg-icon
              name="ipfs-illustration-developing"
              class="h-36 w-36 mx-auto"
            />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Developing world
          </h3>
          <p>
            High-latency networks are a big barrier for those with poor internet
            infrastructure. IPFS provides resilient access to data independent
            of latency or backbone connectivity.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <svg-icon
              name="ipfs-illustration-blockchains"
              class="h-36 w-36 mx-auto"
            />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Blockchains
          </h3>
          <p>
            With IPFS, you can address large amounts of data and put immutable,
            permanent links in transactions &mdash; timestamping and securing
            content without having to put the data itself on-chain.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="max-h-24 mb-12">
            <svg-icon
              name="ipfs-illustration-creators"
              class="h-36 w-36 mx-auto"
            />
          </div>
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-2">
            Content creators
          </h3>
          <p>
            IPFS brings the freedom and independent spirit of the web in full
            force &mdash; and can help you deliver your content at a much lower
            cost.
          </p>
        </div>
      </div>
    </section>
    <Divider />
    <section class="grid-margins text-center py-20">
      <h2 class="font-display mb-4">Who's already using IPFS?</h2>
      <p class="text-base sm:text-lg mb-6">
        Companies and organizations worldwide are already building amazing
        things on IPFS.
      </p>
      <Button
        type="primary"
        href="/images/ipfs-applications-diagram.png"
        target="_blank"
        rel="noopener noreferrer"
        text="Explore the ecosystem"
        :on-click="(item) => onCTAClick({ ui: 'who/see-list', ...item })"
      />
    </section>
    <Divider />
    <section class="grid-margins py-20">
      <h2 class="font-display text-center mb-12">News and more</h2>
      <div class="grid grid-cols-4">
        <div class="col-span-1">
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-4">
            From the blog
          </h3>
        </div>
        <div class="col-span-1">
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-4">
            In the media
          </h3>
        </div>
        <div class="col-span-2">
          <h3 class="text-navy text-base sm:text-lg font-semibold mb-4">
            Latest videos
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Button from '../components/Button';
import StarfieldHero from '../components/StarfieldHero';

export default {
  components: { Button, StarfieldHero },
  methods: {
    onCTAClick(data) {
      this.$countly.trackEvent(this.$countly.events.CTA_CLICK, {
        path: this.$route.path,
        ...data,
      });
    },
  },
};
</script>

<style scoped>
h2 {
  @apply text-3xl;
}

@screen sm {
  h2 {
    @apply text-4xl;
  }
}
</style>
