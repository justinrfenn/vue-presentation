<template>
  <div class="message" >
    <img :src="avatar" alt="Robohash Avatar">  
    <div class="message-content">
      <p class="username">{{shortName}}</p>
      <p class="time-posted">{{displayTime}}</p>
      <p class="message-text">{{text}}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'message',
  props: ['text', 'from', 'when'],
  computed: {
    displayTime: function() {
      return moment(this.when).format('MMMM Do, YYYY @h:mm:ss a');
    },
    avatar: function() {
      return "https://robohash.org/" + this.from;
    },
    shortName: function() {
      return this.from.substring(0,20);
    }
  }
}
</script>

<style scoped>
.message {
  height: 10vh;
  border-top: solid lightgray 1px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

img { 
  max-height: 80%;
  max-width: 20%;
  margin-right: 15px;
  border-radius: 50%;
  background-color: #D6D5D5;
  /*border: dotted cadetblue 1px;*/
}

.message-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.username {
  margin: 0;
  font-weight: bold;
  font-size: x-large;
  color: #41B883;
}

.time-posted {
  margin: 0;
  font-size: 60%;
  color: #D6D5D5;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.message-text {
  color: #D6D5D5;
}

@media only screen and (min-width: 900px) {
    .user-info {
      max-height: 130px;
    }
}
</style>