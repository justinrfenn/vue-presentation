<template>
  <div id="app">
    <img id="vue-logo" src="./assets/logo.png">
    <Stream :messages="messages"></Stream>
    <input type="text" @keyup.enter="sendMessage">
  </div>
</template>

<script>
import io from 'socket.io-client';
import Stream from './components/Stream';

export default {
  name: 'app',
  components: {
    Stream
  },
  data() {
    return {
      socket: {}
    }      
  },
  computed: {
    messages: function(){
      return this.$store.getters.messages
    }
  },
  methods: {
    sendMessage: function(event){
      let messageText = event.target.value;
      this.socket.emit('send', messageText);
      event.target.value = "";
    }
  },
  beforeCreate() {
    let baseUrl = "http://localhost:8082";
    let room = "sample";
    let url = baseUrl + "/api/rooms/" + room;
    fetch(url, {method: 'put'})
    .then(() => {
      this.socket = io.connect(baseUrl).io.socket('/rooms/' + room)

      fetch(url)
      .then(res => res.json())
      .then(room => {
        room.messages.forEach(msg => this.$store.commit('ADD_MESSAGE', msg));
        //subscribe to new messages
        this.socket.on('new', msg => this.$store.commit('ADD_MESSAGE', msg));

      })
    })
  }

}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

#vue-logo {
  height: 10vh;
}
</style>
