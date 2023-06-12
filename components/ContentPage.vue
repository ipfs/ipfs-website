<template>
  <main>
    <ContentDoc>
      <template #default="{ doc }">
        <Hero background="community-hero.jpg">
          <template v-if="doc.title" #title>
            {{ doc.title }}
          </template>
          <template v-if="doc.description" #subtitle>
            {{ doc.description }}
          </template>
        </Hero>
        <PageSection>
          <div class="text-base prose prose-truegray xl:text-xl">
            <ContentRenderer :value="doc" />
          </div>
        </PageSection>
      </template>
      <template #not-found>
        <h1>Oops, this page is missing</h1>
      </template>
    </ContentDoc>
  </main>
</template>
