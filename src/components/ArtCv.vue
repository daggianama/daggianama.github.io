<template>
  <article class="cv-container">
    <article class="cv-item-text">
      <h2 class="hidden size-0">Curriculum Vitae</h2>
      <section class="cv-section">
        <h3 class="cv-section-title">Education</h3>
        <ul class="cv-list">
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">B.A Visual arts</h4>
            <p class="cv-list-item-description">
              Universidad Católica del Perú | 2005-2011
            </p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">Media art & New technologies</h4>
            <p class="cv-list-item-description">UNA Bs.As | 2013-2014</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">Master Art and Education</h4>
            <p class="cv-list-item-description">
              Universitat Barcelona | 2019 - 2020
            </p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">UX/UI Bootcamp</h4>
            <p class="cv-list-item-description">AllWoman | 2021</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">Web development</h4>
            <p class="cv-list-item-description">CodeOp | 2023</p>
          </li>
        </ul>
      </section>
      <section class="cv-section">
        <h3 class="cv-section-title">Work Experience</h3>
        <ul class="cv-list">
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">
              Software Developer | Porsche Digital - Barcelona
            </h4>
            <p class="cv-list-item-description">April 2024 - Present</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">
              Software Developer | Amphora - Barcelona
            </h4>
            <p class="cv-list-item-description">January - March 2024</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">
              Full stack developer | DQS - Barcelona
            </h4>
            <p class="cv-list-item-description">August 2023 - January 2024</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">
              Research & Design | Fundació Antoni Tapies - Barcelona
            </h4>
            <p class="cv-list-item-description">2021</p>
          </li>
        </ul>
      </section>
    </article>
    <article class="cv-item-art">
      <section class="art-section">
        <img
          class="cv-img w-200px"
          src="public/img/art_cv.png"
          alt="Artistic CV of Daggiana Madrid, with a collage of images and text describing her background and experience in the creative field."
        />
      </section>
    </article>
  </article>
</template>

<script>
export default {
  name: 'ArtCv',
};
</script>

<style lang="scss" scoped>
.cv-container {
  gap: 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 810px) {
    flex-direction: row;
  }
}

.cv-section {
  margin-bottom: 2rem;
}

.cv-section-title {
  background-color: rgb(34, 34, 34);
  padding: 0;
  width: fit-content;
  font-size: 1.18rem;
  margin-bottom: 1rem;
  color: white;
  @media (max-width: 810px) {
    font-size: 2rem;
  }
}

.cv-list-item {
  margin-bottom: 7px;
}

.cv-list-item-title {
  font-size: 13px;
  margin-bottom: 6px;
}

.cv-item-text {
  padding: 2rem 1.5rem 1.5rem 0;
  min-width: 22rem;
}
.cv-img {
  object-fit: cover;
  max-width: 100%;
  max-height: auto;

  @media (min-width: 810px) {
    max-width: 53vw;
  }
}
</style>
