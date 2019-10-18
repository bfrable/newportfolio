<template>
  <div class="home">
    
    <main class="main-content">
      
      <div class="main-content__column">
        <h2 class="main-content__intro">
          Hello! I’m Brett Frable. I'm a front-end developer and UX enthusiast. I'm
         currently employed at <a href="https://duke-energy.com" target="_blank" class="link">Duke Energy</a>.
         </h2>

         <h2 class="main-content__intro">
           Below are some projects I have worked on and or contributed towards. 
         </h2>


        <div class="projects">
          <ProjectCard v-for="project in projects[0]" :key="project.guid" :title="project.title" :link="project.link"/>
        </div>
      </div>

      <div class="main-content__column">
        <img class="profile" src="assets/images/me3.jpg" />
      </div>
    
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectCard from '@/components/ProjectCard.vue';
import axios from 'axios';
import oridomi from 'oridomi';

export default {
  name: 'home',

  components: {
    ProjectCard,
  },

  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    this.preloadImage();
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {
      axios.get('../data/projects.json').then((response) => {
        if (response) {
          this.projects.push(response.data);
        }
      });
    },

    showProjects() {
      const projects = document.querySelectorAll('.project-card');
      let top = 0;
      for (let i = 0; i < projects.length; i += 1) {
        if (i !== 0) {
          setTimeout(() => {
            top += 47;
            projects[i].style.top = `${top}px`;
            projects[i].style.opacity = 1;
          }, i * 250);
        } else {
          projects[i].style.opacity = 1;
        }
      }
    },

    preloadImage() {
      axios.get('../assets/images/me.jpg').then((response) => {
        this.setOridomi(0);
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
          this.showProjects();
        })
        .reveal();
      folded.disableTouch();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass-mq';

a {
  color: #f3128b;
}

.main-content {
  @include mq($until: desktop) {
    display: block;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -1em;
  position: relative;

  &__column {
    box-sizing: border-box;
    flex: 0 calc(50% - 2em);
    margin: 1em;

    &:nth-of-type(2) {
      @include mq($until: desktop) {
          // display: none;
      }

      animation: fadein 2s;
      margin-right: 0;
    }
  }

  &__intro {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0 0 30px;
    max-width: 700px;
    text-align: left;
  }
}

.projects {
  @include mq($until: desktop) {
    height: 200px;
    margin: 25px 0 0;
  }

  border-radius: 20px;
  box-shadow: 0 0 30px 0px rgba(255, 166, 151,0.2);
  margin: 50px 0 0;
  position: relative;
}

.profile {
    @include mq($until: desktop) {
      float: none;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 300px;
    }

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
