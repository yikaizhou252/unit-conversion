<template>
  <div class=" bg-lightBlue shadow-md border-2 rounded flex flex-col justify-center items-center text-center min-h-52 container">
    <div class="flex flex-row items-center space-x-4 m-3">
      <div>Input:</div>
      <input class="flex rounded" v-model="message" placeholder="enter here"/>
      <select class="flebasis-1/2" v-model="selected">
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <div class="flex flex-row space-x-4 m-3">
      <div>Output: </div>
      <div>{{ convert }}</div>
      <input :value="getOther" :disabled="true" class=" text-end justify-end" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const options = ref(['KG', 'LB'])
const selected = ref(options.value[0])
const message = ref(0)

const getOther = computed(() => {
  return selected.value === 'KG' ? 'LB' : 'KG'
})

const convert = computed(() => {
  const kgToLbs = 2.20462
  let ret
  if (selected.value === 'KG') {
    ret = message.value * kgToLbs
  } else {
    ret = message.value / kgToLbs
  }

  return ret.toPrecision(4)
})
</script>

<style></style>
