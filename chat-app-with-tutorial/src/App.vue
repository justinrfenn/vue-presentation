<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="message in messages">
         <message :text="message.message"></message>
      </li>
    </ul>
    <input type="text" @keyup.enter="sendMessage">
  </div>
</template>

<script>
import io from 'socket.io-client';
import Message from './components/Message';

export default {
  name: 'app',
  components: {
    Message
  },
  data: function() {
    return {
      messages: [],
      socket: {}
    }
  },
  beforeCreate() {
    let room = "sample";
    let baseUrl = "http://localhost:8082";
    let url = baseUrl + "/api/rooms/" + room;

    fetch(url, {method: 'put'})
    .then(() => {
      this.socket = io.connect(baseUrl).io.socket('/rooms/' + room);
      fetch(url)
      .then(res => res.json())
      .then(room => {
        room.messages.forEach( msg => this.messages.push(msg));
        // subscribe to new messages
        this.socket.on("new", msg => this.messages.push(msg));
      })
    })
  },
  methods: {
    sendMessage: function(event) {
      let messageText = event.target.value;
      this.socket.emit("send", messageText);
      event.target.value = "";
    }
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
  margin-top: 60px;
}
</style>
