<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="bg-hero-bg relative">
    <div class="container pt-40 lg:pt-44">
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-10 3xl:gap-10">
        <div class="text-white">
          <h1 class="text-4.5xl lg:text-5xl 3xl:text-7xl font-bold">
            {{ heroSectionContent.heading }}
          </h1>
          <h3 class="text-2xl lg:text-2xl 2xl:text-4.5xl py-6 lg:pb-8">
            {{ heroSectionContent.subHeading }}
          </h3>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined @click="scrollToSection('whyUs')">
              {{ buttonsLabel.whyUsBtn }}
            </SiteButton>
          </div>
        </div>
        <div class="flex items-end justify-center">
          <img :src="heroSectionContent.image" :alt="heroSectionContent.alt">
        </div>
      </div>
    </div>
  </section>
</template>
