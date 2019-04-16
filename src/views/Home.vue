<template>
  <div class="home">
    <Header />

    <main class="main-content">
      <div class="main-content__column">
        <h2 class="main-content__intro">Hello! I’m Brett Frable. I specialize in front-end development and UX/UI design. I'm 
          currently employed at <a href="">Zenmonics</a> as a UX Designer.</h2>

        <div class="projects">
          <ProjectCard v-for="project in projects[0]" :key="project.guid"
          :bgColor="project.bgColor" :title="project.title"/>
        </div>
      </div>
      <div class="main-content__column">
        <img class="profile" src="assets/images/me.jpg" />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import axios from 'axios';
import oridomi from 'oridomi';

export default {
  name: 'home',

  components: {
    Header,
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
    this.getProjects();
  },

  methods: {
    getProjects() {
      axios.get('../data/projects.json').then((response) => {
        this.projects.push(response.data);
      }, (response) => {
        console.log(response);
      }).then(() => {
        console.log(this.projects[0]);
      });
    },
    showProjects() {
      const projects = document.querySelectorAll('.project-card');
      let top = 0;

      for (let i = 0; i < projects.length; i += 1) {
        if (!i == 0) {
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
    activePhoto() {
      const profile = document.querySelectorAll('.profile')[1];
      profile.classList.add('unfolded');
    },
    setOridomi() {
      const OriDomi = oridomi;
      const folded = new OriDomi(document.querySelectorAll('.main-content__column')[1], {
        shading: 'soft',
        ripple: 0.5,
        vPanels: 2,
      });
      folded.setSpeed(450).stairs(25).accordion(-50).stairs(-70)
        .curl(-50, () => {
          this.activePhoto();
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

a {
  color: #f3128b;
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1em;

  &__column {
    box-sizing: border-box;
    flex: 0 calc(50% - 2em);
    margin: 1em;

    &:first-child {
      // padding: 0 50px 0 0;
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
</style>
