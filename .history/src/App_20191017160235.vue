<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <transition name="bounce">
        <TopAlbums v-if="showAlbums" :getAlbums="albums"/>
    </transition>
    <div class="container">
      <Header />

      <router-view/>
      <!-- eslint-disable -->
      <svg class="scene" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns:pathdata="">
        <path d="M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1518,719.9 1487,644 1429,533 1388,437.7 1447,259.7 1400,187 1362,132 1270,90.53 1207,39.93 1161,2.932 1071,-74.45 1071,-74.45 1071,-74.45 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z" pathdata:id="M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1576,704.7 1517,625.7 1459,514.7 1418,419.4 1430,288.5 1382,187 1349,116.3 1296,54.47 1240,0.3429 1205,-33.51 1120,-83.59 1120,-83.59 1120,-83.59 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z"></path>
        <path d="M 665.2,-83.08 C 413.7,-81.89 162.2,-82.43 -89.29,-81.61 -90.35,164.3 -85.06,410.2 -84.09,656.1 -83.37,733.7 -82.64,811.3 -81.92,888.9 442.4,889.8 966.7,890.7 1491,891.6 1253,747.5 1417,429.4 1286,245.4 1227,163.2 1107,142.1 1043,64.54 1009,24.41 973,-76.01 973,-76.01 973,-76.01 706.6,-83.67 665.2,-83.08 Z" pathdata:id="M 665.2,-83.08 C 413.7,-81.89 162.2,-82.43 -89.29,-81.61 -90.35,164.3 -85.06,410.2 -84.09,656.1 -83.37,733.7 -82.64,811.3 -81.92,888.9 442.4,889.8 966.7,890.7 1491,891.6 1253,747.5 1349,460.4 1243,260.6 1199,176.6 1145,96.92 1083,24.95 1050,-12.63 973,-76.01 973,-76.01 973,-76.01 706.6,-83.67 665.2,-83.08 Z"></path>
        <path d="M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1224,643.6 1187,526 1153,417 1091,319.3 1029,224.1 998.8,178.5 968.8,132.6 936.6,88.23 891.7,27.39 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z" pathdata:id="M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1175,659.3 1150,544.3 1128,438.4 1143,312.6 1081,227.1 1004,121.1 925.8,114.8 851.3,54.73 762,-17.34 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z"></path>
        <path d="M -92.42,-79.11 C -89.97,243.8 -87.52,566.7 -85.07,889.6 201.8,889.9 488.7,889.9 775.5,895.6 880.4,896.9 985.2,894 1090,892.5 1064,773.3 1037,651.6 976.1,544.8 946.7,495.8 914.6,448.3 882,401.3 820.9,314.4 742.3,252 666.4,177.4 583.2,98.01 496.5,12.18 386.7,-23.38 328.4,-45.64 232.6,-81.38 232.6,-81.38 232.6,-81.38 9.82,-84.94 -92.42,-79.11 Z" pathdata:id="M -92.42,-79.11 C -89.97,243.8 -87.52,566.7 -85.07,889.6 201.8,889.9 488.7,889.9 775.5,895.6 880.4,896.9 1063,889.5 1063,889.5 1063,889.5 1081,768.2 997.4,608.7 958.5,534.8 969.9,436.8 918.5,370.8 848.4,280.8 717,260.3 629.9,186.5 552.6,121.2 491.5,38.73 426.3,-38.61 412.9,-54.44 387.9,-87.47 387.9,-87.47 387.9,-87.47 9.82,-84.94 -92.42,-79.11 Z"></path>
        <path d="M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 855.2,767 831,639.4 721.4,519.4 634.7,424.5 526.4,360.9 428.8,281.8 332.7,204 251.6,102.3 140.1,48.9 70.75,15.73 -24.82,24.2 -85.28,0.03 Z" pathdata:id="M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 906.9,734.7 779.3,676 721.4,519.4 676.8,398.8 566.5,307.1 458.9,236.6 355.2,168.7 220.3,165.7 107.8,113.5 40.05,82.12 -24.82,24.2 -85.28,0.03 Z"></path>
        <path d="M -95.69,252.3 -87.65,890.4 698.1,892 C 698.1,892 599.1,687.7 518.9,610.6 348,446.2 131.4,466.5 -95.69,252.3 Z" pathdata:id="M -95.69,252.3 -87.65,890.4 698.1,892 C 698.1,892 569.8,587.1 448.9,482.7 299.7,353.9 131.4,466.5 -95.69,252.3 Z"></path>
        <path d="M -85.59,444.4 -85.59,890.6 489,895.6 C 489,895.6 436.8,745.3 382.5,690.8 258.1,565.8 57.98,629.2 -85.59,444.4 Z" pathdata:id="M -85.59,444.4 -85.59,890.6 546.9,895.6 C 546.9,895.6 517.4,695.4 339.9,593.4 187.7,505.9 57.98,629.2 -85.59,444.4 Z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import Header from '@/components/Header.vue';
import TopAlbums from '@/components/TopAlbums.vue';
import 'reset-css';

export default {
  name: 'app',

  components: {
    TopAlbums,
    Header
  },

  data() {
    return {
      showAlbums: false,
      albums: []
    }
  },

  created() {
    window.addEventListener('load', () => {
      this.setHeight();
    });

    this.$on('toggle-albums', () => {
      this.showAlbums = !this.showAlbums;
    });

    this.$on('store-albums', ($event) => {
      this.albums.push($event);
    });
  },

  mounted() {
    // this.animate();
  },

  methods: {
    animate() {
      const background = document.querySelector('svg.scene');

      Array.from(background.querySelectorAll('path')).forEach((path) => {
        setTimeout(() => {
          anime({
            targets: path,
            duration: anime.random(3000, 5000),
            d: path.getAttribute('pathdata:id'),
            loop: true,
            direction: 'alternate',
          });
        }, anime.random(0, 3000));
      });

      background.style.opacity = 1;
    },
    setHeight() {
      const height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight, document.documentElement.offsetHeight);

      document.querySelector('svg.scene').setAttribute('style', `height: ${height};`);

      this.animate();
    },
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: 'HK Grotesk';
    src: url('assets/fonts/HKGrotesk-Bold.woff2') format('woff2'),
        url('assets/fonts/HKGrotesk-Bold.woff') format('woff'),
        url('assets/fonts/HKGrotesk-Bold.svg#HKGrotesk-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'HK Grotesk';
    src: url('assets/fonts/HKGrotesk-Medium.woff2') format('woff2'),
        url('assets/fonts/HKGrotesk-Medium.woff') format('woff'),
        url('assets/fonts/HKGrotesk-Medium.svg#HKGrotesk-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'HK Grotesk';
    src: url('assets/fonts/HKGrotesk-SemiBold.woff2') format('woff2'),
        url('assets/fonts/HKGrotesk-SemiBold.woff') format('woff'),
        url('assets/fonts/HKGrotesk-SemiBold.svg#HKGrotesk-SemiBold') format('svg');
    font-weight: 600;
    font-style: normal;
}

html {
  font-size: 62.5%;
  font-weight: 400;
}

body {
  font-size: 1.8em;
}

#app {
  font-family: 'HK Grotesk', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #460528;
}

.container {
  margin: 0 auto;
  max-width: 1300px;
  padding: 20px 0;
  width: 100%;
}

.link {
  color: #f3128b;
  cursor: pointer;
  text-decoration: none;
  transition: all .2s ease-in;

  &:hover {
    color: #460528;
  }

  &--black {
      color: #000000;
  }
}

.scene {
  background: #FFA797;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 100vh;
  z-index: -1;
}

.scene path:first-child {
  fill: #E8C7C8;
}

.scene path:nth-child(2) {
  fill: #FFE0DB;
}

.scene path:nth-child(3) {
  fill: #FFE8F4;
}

.scene path:nth-child(4) {
  fill: #E7C7E8;
}

.scene path:nth-child(5) {
  fill: #F5DBFF;
}

.scene path:nth-child(6) {
  fill: #FFA797;
}

.scene path:nth-child(7) {
  fill: #FFA797;
}

.bounce-enter-active {
  animation: bounce-in .1s;
}

.bounce-leave-active {
  animation: bounce-in .1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translate(0, -300px);
  }
  50% {
    transform: translate(0, -150px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
