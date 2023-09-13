<script setup lang="ts">
import TeamMember from './TeamMember.vue'
import { data }  from './team.data.ts'
</script>

<template>
  <TeamMember
    v-for="item in data.team"
    :teammember="item"
  ></TeamMember>
</template>
