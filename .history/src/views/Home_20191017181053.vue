<template>
  <div class="home">
    
    <main class="main-content">
      
      <div class="main-content__column">
        <h2 class="main-content__intro">
          Hello! I’m Brett Frable. I'm a front-end developer and UX enthusiast. I'm
         currently employed at <a href="https://duke-energy.com" target="_blank" class="link">Duke Energy</a>.
         </h2>
        <div class="projects">
          <ProjectCard v-for="project in projects[0]" :key="project.guid"
          :bgColor="project.bgColor" :title="project.title"/>
        </div>
      </div>

      <div class="main-content__column">
        <img class="profile" src="assets/images/me2.jpg" />
      </div>
    
    </main>

    <Footer />
  
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import axios from 'axios';
import oridomi from 'oridomi';

export default {
  name: 'home',

  components: {
    ProjectCard,
    Footer,
  },

  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    this.setOridomi();
  },

  created() {
    //
  },

  methods: {
    preloadImage() {
      axios.get('../assets/images/me.jpg').then((response) => {
        this.projects.push(response.data);
      });
    },

    setOridomi() {
      const OriDomi = oridomi;
      const folded = new OriDomi(document.querySelectorAll('.main-content__column')[1], {
        shading: 'soft',
        vPanels: 3,
        ripple: 0.2,
      });
      folded.wait(250).setSpeed(250).stairs(25).accordion(-25)
        .stairs(-25)
        .curl(-25, () => {
          document.querySelectorAll('.profile')[1].classList.add('unfolded');
          this.$parent.$emit('oridomi-done');
        })
        .reveal();
      folded.disableTouch();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

a {
  color: #f3128b;
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1em;
  position: relative;

  &__column {
    box-sizing: border-box;
    flex: 0 calc(50% - 2em);
    margin: 1em;

    &:nth-of-type(2) {
      animation: fadein 2s;
    }
  }

  &__intro {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 1.5;
    max-width: 700px;
    text-align: left;
  }
}

.projects {
  border-radius: 20px;
  box-shadow: 0 0 30px 0px rgba(255, 166, 151,0.2);
  margin: 50px 0 0;
  position: relative;
}

.profile {
    box-shadow: 0 0 0 0 rgba(255, 166, 151,0.7);
    float: right;
    max-width: 500px;
    transition: all .2s;
    width: 100%;

    &.unfolded {
      box-shadow: -30px 0 0 -10px rgba(255, 166, 151,0.7);
    }
}

@keyframes fadein {
    0% { opacity: 0; }
    50%{ opacity: 0; }
    75%{ opacity: .5; }
    100%{ opacity: 1; }
}
</style>
