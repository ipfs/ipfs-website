<template>
  <footer class="bg-gradient-6 text-white py-8 md:py-16 mt-auto">
    <div class="grid-margins">
      <NewsletterForm class="col-start-1 col-span-12 lg:pb-20" />
      <div class="flex flex-col lg:flex-row lg:items-top lg:justify-between">
        <div
          class="flex flex-col lg:flex-row lg:items-center mb-4 md:mb-8 lg:mb-0"
        >
          <ul class="flex flex-col sm:flex-row mt-4 md:mt-8 lg:mt-0">
            <li
              v-for="(item, index) in footerNavigation"
              :key="'link-' + index"
              class="sm:mr-10 last:mr-0"
              :class="[{ 'mb-4': item.children && item.children.length }]"
            >
              <a
                :href="item.link"
                class="footer-link font-medium hover:opacity-75 transition-opacity duration-300 ease-in-out"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
        <SocialLinks class="flex items-center" />
      </div>
      <FooterLegal class="mt-4 md:mt-8" />
    </div>
  </footer>
</template>

<script>
import SocialLinks from './SocialLinks';
import FooterLegal from './FooterLegal';
import NewsletterForm from './NewsletterForm';

const footerNavigation = [
  { text: 'Blog & news', link: 'https://blog.ipfs.io/' },
  { text: 'Press', link: '/media' },
  {
    text: 'Code of conduct',
    link: 'https://github.com/ipfs/community/blob/master/code-of-conduct.md',
  },
  {
    text: 'Security',
    link:
      'https://github.com/ipfs/community/blob/master/CONTRIBUTING.md#security-issues',
  },
];

export default {
  name: 'Footer',
  components: { SocialLinks, FooterLegal, NewsletterForm },
  data: () => ({
    footerNavigation: footerNavigation,
  }),
};
</script>

<style scoped>
.footer-link {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.01em;
  line-height: 1.4;
}
</style>
