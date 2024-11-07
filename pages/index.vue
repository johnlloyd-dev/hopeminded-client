<template>
    <div>
        <h1 v-if="status == 'pending'">Loading...</h1>
        <h1 v-else>{{ users.users[0] }}</h1>
    </div>
</template>

<script setup>
    const { data: users, error, status } = await $useLazyFetch('/users');
</script>

<style lang="scss" scoped>

</style>