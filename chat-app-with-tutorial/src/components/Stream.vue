<template>
  <div class="stream">
    <ul>
      <li v-for="message in messages">
        <Message 
        :text="message.message"
        :when="message.when"
        :from="message.from" 
        v-scroll-lock
        ></Message>
      </li>
    </ul>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'app',
  components: {
    Message
  },
  props: ['messages'],
  directives: {
    scrollLock: {
      inserted: function(el){
        let containerElement = document.getElementsByClassName("stream")[0];
        console.log(containerElement);
        containerElement.scrollTop = containerElement.scrollHeight;
      }
    }
  }
}

</script>

<style lang="css" scoped>
.stream {
  overflow-y: auto;
  height: 80vh;
  border-style: inset;
}

ul {
  list-style-type: none;
  padding: 0;
  background-color: #35495E;
}

li {
  margin: 5px;
}

@media only screen and (min-width: 900px) {
  .stream {
    width: 762px;
    margin: auto;
  }

}
</style>