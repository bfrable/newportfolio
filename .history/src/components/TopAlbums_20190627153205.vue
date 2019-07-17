<template>
    <Carousel :perPage="8" paginationColor="#E7C7E8" paginationActiveColor="#FFA797" class="albums">
        <Slide
        v-for="album in albums[0]"
        v-if="album.image[3]['#text']"
        v-bind:key="album.image[3]['#text']"
        class="album"
        >
        <div class="album__wrapper">
            <div class="album__details">
            <p class="album__artist">{{album.artist.name}}</p>
            <p class="album__title">{{album.name}}</p>
            </div>
            <img class="album__image" :src="album.image[3]['#text']">
        </div>
        </Slide>
    </Carousel>
</template>

<script>
import axios from 'axios';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'TopAlbums',

  components: {
    Carousel,
    Slide,
  },

  props: {
      getAlbums: Array
  },

  data() {
    return {
      albums: []
    };
  },

  mounted() {
    if (!this.getAlbums.length) {
        this.getTopAlbums();
    } else {
        this.albums.push(this.getAlbums[0]);
    }
  },

  methods: {
    getURL(endpoint, cb) {
      axios
        .get(
          `http://ws.audioscrobbler.com/2.0/?method=user.${endpoint} &user=bfrable&api_key=c152ef462199b4430eec28a1727dc218&format=json`,
          {
            headers: {
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET',
              'Access-Control-Allow-Headers': 'application/json',
            },
          },
        )
        .then((response) => {
          cb(response);
        });
    },

    addTopAlbums(response) {
      this.albums.push(response.data.topalbums.album);
    },

    getTopAlbums() {
      this.getURL('gettopalbums', this.addTopAlbums);
      this.$parent.$emit('store-albums', this.albums);
    },
  },
};
</script>

<style>

.container {
  margin: 0 auto;
  max-width: 940px;
  width: 100%;
}

.albums {
    width: 100%;
    background: #fdf0f7;
    padding: 20px 0;
}

.albums:before {
    background: #E7C7E8;
    content: 'x';
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -20px;
    right: 15px;
    z-index: 2;
}

.albums:after {
    background: #F4DBFF;
    content: '';
    right: 0;
    position: absolute;
    width: 50%;
    height: 20px;
    bottom: -10px;
}

.album {
  box-sizing: border-box;
  padding: 15px;
  position: relative;
}

.album__image {
  transition: all 0.5s ease-in-out;
  filter: blur(0px);
  width: 100%;
}

.album:hover .album__image {
  filter: blur(4px);
}

.album__wrapper {
  position: relative;
}

.album__details {
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  padding: 15px;
  position: absolute;
  z-index: 999;
  background: rgba(0, 0, 0, 0.15);
  height: 100%;
  width: 100%;
  left: 10%;
  right: 0;
  top: 10%;
  bottom: 0;
  margin: 0 auto;
  box-sizing: border-box;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 900;
  font-size: 20px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.album:hover .album__details {
  opacity: 1;
  top: 0;
  left: 0;
}

.VueCarousel-dot {
    border: 2px solid red;
}
</style>
