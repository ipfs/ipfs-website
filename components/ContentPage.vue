<template>
  <main>
    <ContentDoc>
      <template #default="{ doc }">
        <Hero background="community-hero.jpg">
          <template #title>
            {{ doc.title }}
          </template>
          <template #subtitle>
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
