<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import TimePoint from '@/components/icons/TimePoint.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <img alt="stage0" src="../assets/images/stage0.png" />
    <template #heading>Inception at Hackathon</template>

    The journey begins with the creative inception of our collection at the esteemed hackathon
    hosted by
    <a href="https://tokenforge.gg/" target="_blank" rel="noopener" class="underline"
      >tokenforge.gg</a
    >. Here, talented developers, artists, and blockchain enthusiasts converge to craft the first
    generation of our unique NFTs. This pivotal event lays the foundation for our game, with each
    collectible being not just a work of art but a cornerstone of the gameplay experience that
    awaits.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <img alt="aurora_grant_receipt" src="../assets/images/aurora_grant_receipt.png" />
    <template #heading>Funding Approval and AC-DAO Grant Receipt</template>

    We are thrilled to announce a significant milestone in our journey — the approval of our
    project's budget by the AC-DAO in NDC for May. This approval includes a substantial grant that
    will be instrumental in advancing our project's development. The grant not only provides
    financial backing but also validates our vision and the potential impact of our game within the
    community. This stage marks a pivotal point in our roadmap, setting the foundation for
    accelerated growth and innovation.
    <br />
    <a
      href="https://gov.near.org/t/proposal-to-hom-ac-dao-ndc-may-budget-application/38991"
      target="_blank"
      rel="noopener"
      class="underline"
    >
      AC-DAO: NDC May Budget Application.
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <img alt="Collaboration_Segmint" src="../assets/images/Collaboration_Segmint.jpg" />
    <template #heading>Collaboration! Segmint & Elemental Game</template>

    Take one, tow or three of the following actions and create an NFT with link.
    <br />
    🎁 Prize: a random <b>NFT from Elemental Game #200</b> will be distributed among participants
    that successfully meet the requirements. 🗓 The results will be announced on: May 18th at 23:59
    CET.
    <a
      href="https://medium.com/@elemgame/collaboration-segmint-elemental-game-8420ff5f4445"
      target="_blank"
      rel="noopener"
      class="underline"
    >
      Read more in our blog.
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <img alt="stage1" src="../assets/images/stage1.png" />
    <template #heading>Beta Game Launch</template>

    Following the momentum of our inaugural collection, we proudly announce the beta launch of our
    game. This stage allows players to not only witness the stunning visuals and intricate designs
    of their acquired NFTs but to actively engage with them in a rich, interactive gaming
    environment. The beta version serves as a testbed for refinement, where community feedback is
    paramount to enhancing the gaming experience.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <img alt="stage2" src="../assets/images/stage2.png" />
    <template #heading>Tournament Organization</template>

    With the game's mechanics refined and the community’s strategies emerging, we step into the
    competitive arena with our first official tournament. This event will not only showcase the
    prowess and skill of our top players but will also highlight the strategic depth of our game.
    Participants will battle for glory, prizes, and the chance to cement their names in the game’s
    burgeoning history.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <TimePoint />
    </template>
    <img alt="stage3" src="../assets/images/stage3.png" />
    <template #heading>Game Evolution and NFT Expansion</template>

    Building on the excitement of the tournament, we move forward to the next game version,
    introducing new layers of complexity and opportunities. This update expands the capabilities and
    utilities of our NFTs, ensuring that they remain at the cutting edge of both aesthetic value and
    in-game functionality. This stage represents our commitment to growth and the continuous
    evolution of our gaming ecosystem.
  </WelcomeItem>
</template>
