<template>
  <component :is="name" class="icon" />
</template>
<script>
import DownArrow from '~/assets/icons/down-arrow.svg?inline';
import VideoPlay from '~/assets/icons/video-play.svg?inline';
import IpfsIllustrationsHow1 from '~/assets/icons/ipfs-illustrations-how-1.svg?inline';
import IpfsIllustrationsHow2 from '~/assets/icons/ipfs-illustrations-how-2.svg?inline';
import IpfsIllustrationsHow3 from '~/assets/icons/ipfs-illustrations-how-3.svg?inline';
import IpfsIllustrationsHow4 from '~/assets/icons/ipfs-illustrations-how-4.svg?inline';
import IpfsIllustrationsHow5 from '~/assets/icons/ipfs-illustrations-how-5.svg?inline';
import IpfsIllustrationData from '~/assets/icons/ipfs-illustration-data.svg?inline';
import IpfsIllustrationDeveloping from '~/assets/icons/ipfs-illustration-developing.svg?inline';
import IpfsIllustrationArchivists from '~/assets/icons/ipfs-illustration-archivists.svg?inline';
import IpfsIllustrationHistory from '~/assets/icons/ipfs-illustration-history.svg?inline';
import IpfsIllustrationBlockchains from '~/assets/icons/ipfs-illustration-blockchains.svg?inline';
import IpfsIllustrationHttp from '~/assets/icons/ipfs-illustration-http.svg?inline';
import IpfsIllustrationCentralized from '~/assets/icons/ipfs-illustration-centralized.svg?inline';
import IpfsIllustrationNetwork from '~/assets/icons/ipfs-illustration-network.svg?inline';
import IpfsIllustrationCreators from '~/assets/icons/ipfs-illustration-creators.svg?inline';
import IpfsIllustrationService from '~/assets/icons/ipfs-illustration-service.svg?inline';
import ProtocolLabsIcon from '~/assets/icons/protocol-labs-icon.svg?inline';
import IpfsLogo from '~/assets/icons/ipfs-logo.svg?inline';
import YoutubeIcon from '~/assets/icons/youtube-icon.svg?inline';
import LinkedinIcon from '~/assets/icons/linkedin-icon.svg?inline';
import GithubIcon from '~/assets/icons/github-icon.svg?inline';
import TwitterIcon from '~/assets/icons/twitter-icon.svg?inline';

export default {
  components: {
    DownArrow,
    VideoPlay,
    IpfsIllustrationsHow1,
    IpfsIllustrationsHow2,
    IpfsIllustrationsHow3,
    IpfsIllustrationsHow4,
    IpfsIllustrationsHow5,
    IpfsIllustrationData,
    IpfsIllustrationDeveloping,
    IpfsIllustrationArchivists,
    IpfsIllustrationHistory,
    IpfsIllustrationBlockchains,
    IpfsIllustrationHttp,
    IpfsIllustrationCentralized,
    IpfsIllustrationNetwork,
    IpfsIllustrationCreators,
    IpfsIllustrationService,
    ProtocolLabsIcon,
    IpfsLogo,
    YoutubeIcon,
    LinkedinIcon,
    GithubIcon,
    TwitterIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
