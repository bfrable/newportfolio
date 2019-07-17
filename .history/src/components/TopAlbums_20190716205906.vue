<template>
    <Carousel :perPage="8" paginationColor="#E7C7E8" paginationActiveColor="#f3118b" class="albums">
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
        <div class="close-top-albums"><i class="fa fa-times" @click="$parent.$emit('toggle-albums')"></i></div>
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
    getAlbums: Array,
  },

  data() {
    return {
      albums: [],
    };
  },

  mounted() {
    if (!this.getAlbums.length) {
      this.getTopAlbums();
    } else {
      this.albums.push(this.getAlbums[0][0]);
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

<style lang="scss">
    .VueCarousel-pagination {
        margin-top: 10px;
    }
    .VueCarousel-dot-container, .VueCarousel-dot {
        margin-top: 0 !important;
    }
    .VueCarousel-dot {
        transition: all .3s ease-in-out;

        &:hover:not(.VueCarousel-dot--active) {
            background-color: #FFA797 !important;
        }
    }
</style>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: 940px;
  width: 100%;
}

.albums {
    width: 100%;
    background: rgba(255,167,151,0.2);
    padding: 20px 0;
}

.album {
    box-sizing: border-box;
    padding: 7px;
    position: relative;

    &__image {
        filter: blur(0px);
        transition: all 0.5s ease-in-out;
        width: 100%;
    }

    &:hover .album__image {
        filter: blur(4px);
        opacity: 0.7;
    }

    &__wrapper {
        position: relative;
    }

    &__details {

        &:before, &:after {
            transition: all .5s ease-in-out;
            background: transparent;
            border-left: 0px solid #ffffff;
            content: '';
            height: 50%;
            left: 0;
            position: absolute;
            width: 100%;
            top: 0;
            transform: translate(0px, -100px) rotate(0deg);
            z-index: -1;
        }

        &:hover {
            &:before {
                border-left: 5px solid #ffffff;
                transform: translate(0px, 45px) rotate(-45deg);
            }
            &:after {
                border-right: 5px solid #ffffff;
                transform: translate(0px, 45px) rotate(-45deg);
            }
        }

        align-items: center;
        background: rgba(255, 167, 155, 0.20);
        bottom: 0;
        box-sizing: border-box;
        color: #460528;
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        justify-content: center;
        left: 10%;
        margin: 0 auto;
        opacity: 0;
        padding: 15px;
        position: absolute;
        right: 0;
        text-align: center;
        text-transform: capitalize;
        top: 10%;
        transition: all 0.5s ease-in-out;
        width: 100%;
        z-index: 999;
    }

    &__artist {
        background: #f3128b;
        color: #ffffff;
        display: inline-block;
        font-size: 20px;
        font-weight: 900;
        letter-spacing: .7px;
        padding: 3px;
        width: 100%;
    }

    &__title {
        background: #ffffff;
        color: #f3128b;
        font-size: 16px;
        font-weight: 400;
        padding: 3px;
    }

    &:hover .album__details {
        left: 0;
        opacity: 1;
        top: 0;
    }
}

.close-top-albums {
  bottom: 0;
  position: absolute;
  right: 0;
}

.VueCarousel-dot-container {
    margin: 0;
}

</style>
