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
            <h4 class="cv-list-item-title">
              Media art & New technologies Postgraduate
            </h4>
            <p class="cv-list-item-description">UNA Bs.As | 2013-2014</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">Master in Art and Education</h4>
            <p class="cv-list-item-description">
              Universitat de Barcelona | 2019 - 2020
            </p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">UX/UI Bootcamp</h4>
            <p class="cv-list-item-description">AllWoman | 2021</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">Computer Science training</h4>
            <p class="cv-list-item-description">42 School Barcelona | 2022</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">
              Complete Web development Bootcamp
            </h4>
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
            <p class="cv-list-item-description">2020</p>
          </li>
          <li class="cv-list-item">
            <h4 class="cv-list-item-title">
              Design and Art Instructor | Institute Toulouse Lautrec - Lima
            </h4>
            <p class="cv-list-item-description">2016 - 2019</p>
          </li>
        </ul>
      </section>
    </article>
    <article class="cv-item-art">
      <section class="art-section">
        <img
          class="cv-img w-200px"
          src="img/art_cv.png"
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
  gap: 1rem;
  padding: 0;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 810px) {
    flex-direction: column;
    gap: 2rem;
  }
}

.cv-section {
  margin-bottom: 2rem;
}

.cv-section-title {
  background-color: rgb(34, 34, 34);
  padding: 0.2rem 0.5rem;
  width: fit-content;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 810px) {
    font-size: 1.2rem;
  }
}

.cv-list-item {
  margin-bottom: 1.1rem;

  @media (max-width: 899px) {
    margin-bottom: 1.2rem;

    p {
      font-size: 11px;
    }
  }
}

.cv-list-item-title {
  font-size: 13px;
  margin-bottom: 6px;
  @media (max-width: 899px) {
    font-size: 15px;
  }
}

.cv-item-text {
  padding: 1rem 0;
  box-sizing: border-box;

  @media (max-width: 899px) {
    padding: 0 1.5rem 1.5rem 0;
  }
}

.cv-img {
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  max-width: 63vw;

  @media (max-width: 899px) {
    max-width: 100vw;
    padding-bottom: 5rem;
  }
}

.art-section {
  width: 100%;
  max-width: 100%;
}
</style>
