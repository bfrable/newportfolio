<template>
    <div class="now-playing-widget">
        <div class="now-playing-widget__container">
            <img :src="track.image[2]['#text']" alt="" class="now-playing-widget__artwork">
            Currently Listening: <a :href="track.url" target="_blank" class="now-playing-widget__link"> {{ track.artist['#text'] }} - {{ track.name }}</a>
            <div @click="$parent.$parent.$emit('toggle-albums') && toggleAlbumsOpen() && setHeight()" v-bind:class="glow"><a target="_blank" class="now-playing-widget__link now-playing-widget__link--black"><i v-if="this.albumsOpen" class="fab fa-lastfm"></i></a></div>
        </div>
    </div>          
</template>

<script>
import axios from 'axios';

export default {
  name: 'NowPlaying',

  data() {
    return {
      playingNow: false,
      track: [],
      albumsOpen: false
    };
  },
  
  computed: {
    glow: function() {
        return this.albumsOpen ? 'now-playing-widget__icon now-playing-widget__icon--active' : 'now-playing-widget__icon now-playing-widget__icon--glow';
    }
  },

  mounted() {
    this.getCurrentlyPlaying();
  },

  methods: {
    setHeight() {
      const height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight, document.documentElement.offsetHeight);

      document.querySelector('svg.scene').setAttribute('style', `height: ${height};`);

      console.log(height);
    },
    toggleAlbumsOpen() {
      this.albumsOpen = !this.albumsOpen;
    },
    getCurrentlyPlaying() {
      axios.get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bfrable&api_key=c152ef462199b4430eec28a1727dc218&format=json&nowplaying=true', {
        headers: {
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET',
          'Access-Control-Allow-Headers':'application/json',
        } 
      }).then((response) => {
        this.track = response.data.recenttracks.track[0];
        this.playingNow = response.data.recenttracks.track[0]['@attr'].nowplaying;
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass-mq';

.now-playing-widget {
  animation: fadein 2s;
  background: rgba(255,255,255,0.5);
  border-radius: 4px;
  font-size: 14px;

  &__container {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }

  &__artwork {
    border-radius: 75px;
    margin: 5px 10px 5px 0;
    width: 50px;
    height: 50px;
  }
  
  &__link {
    color: #f3128b;
    font-size: 14px;
    text-transform: capitalize;
    text-decoration: none;
    margin: 0 0 0 5px;
    transition: all .2s ease-in;

    &--black {
        color: #000000;
    }
  }

  &__icon {
      @include mq($until: desktop) {
        width: 39px;
      }

      cursor: pointer;
      display: flex;
      align-items: center;
      background: rgba(255,255,255,0.6);
      border-radius: 20px;
      height: 30px;
      width: 30px;
      margin: 0 10px;
      position: relative;
      text-align: center;
      z-index: 2;

      &:before {
        animation: shrink 1.5s;
        display: flex;
        align-items: center;
        background: rgba(255,255,255,0.6);
        border-radius: 20px;
        content: '';
        height: 30px;
        left: -10px;
        margin: 0 10px;
        position: absolute;
        transition: all .2s ease-in;
        width: 30px;
        z-index: -1;
      }

      &:hover, &--active {

        &:before {
          background: rgb(243, 18, 139);
        }

        a {
            color: #ffffff;
        }
      }

      i {
          padding: 0 0 0 3px;
      }

      &--glow {
        animation: glow 1s infinite;
        animation-direction: alternate-reverse;
      }
  }
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.15);
  }

  to {
    box-shadow: 0 0 15px 3px rgba(0,0,0,0.2);
  }
}

@keyframes shrink {
  from {
    background: rgb(243, 18, 139);
    height: 40px;
    width: 40px;
    left: -15px;
  }

  to {
    background: rgb(255,255,255);
    height: 30px;
    width: 30px;
    left: -10px;
  }
}
</style>
