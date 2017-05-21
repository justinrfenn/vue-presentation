<template>
    <div class="message">
        <div class="message-content">
            <p class="message-text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
 name: 'message',
 props: ['text']
}
</script>