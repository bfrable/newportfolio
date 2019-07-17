<template>
    <div class="albums">
        <div
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
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TopAlbums',

  components: {
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

.container {
  margin: 0 auto;
  max-width: 940px;
  width: 100%;
}

.albums {
    background: #000000;
    display: flex;
    height: 100%;
    padding: 20px 0;
    position: fixed;
    width: 100%;
}

.album {
    box-sizing: border-box;
    margin: 0 7px;
    position: relative;

    &__image {
        filter: blur(0px);
        transition: all 0.5s ease-in-out;
        width: 100%;
    }

    &:hover .album__image {
        filter: blur(4px);
    }

    &__wrapper {
        position: relative;
    }

    &__details {
        align-items: center;
        background: rgba(0, 0, 0, 0.15);
        bottom: 0;
        box-sizing: border-box;
        color: #ffffff;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        font-weight: 900;
        height: 100%;
        justify-content: center;
        left: 10%;
        margin: 0 auto;
        opacity: 0;
        padding: 15px;
        position: absolute;
        right: 0;
        text-transform: uppercase;
        top: 10%;
        transition: all 0.5s ease-in-out;
        width: 100%;
        z-index: 999;
    }

    &:hover .album__details {
        left: 0;
        opacity: 1;
        top: 0;
    }
}

</style>
