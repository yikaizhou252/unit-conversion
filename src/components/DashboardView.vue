<template>
  <div
    class="bg-lightBlue shadow-md border-2 rounded flex flex-col justify-center items-center text-center min-h-52 container"
  >
    <div class="flex flex-row items-center space-x-4 m-3">
      <div>Input:</div>
      <input class="flex rounded" v-model="message" placeholder="enter here" />
      <select class="flebasis-1/2" v-model="selectedInput">
        <option v-for="option in inputOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <div class="flex flex-row space-x-4 m-3">
      <div>Output:</div>
      <div>{{ convert }}</div>
      <select class="flebasis-1/2" v-model="selectedOutput">
        <option v-for="option in outputOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// we should use KG as the standard point of reference
// every unit is defined as its ratio to KG

// how many kgs is 1 X
const weightUnitsToKilo = {
  'Implerial Ton': 1016.05,
  Tonne: 1000.0,
  kg: 1.0,
  g: 0.001,
  mg: 1e-6,
  μg: 1e-9,
  lb: 0.453592,
  stone: 6.35029,
  ounce: 0.0283495089275588
}
const inputOptions = ref(Object.keys(weightUnitsToKilo))
const outputOptions = ref(Object.keys(weightUnitsToKilo))

const selectedInput = ref(inputOptions.value[0])
const selectedOutput = ref(outputOptions.value[0])

const message = ref(0)

// const getOther = computed(() => {
//   return selectedInput.value === 'KG' ? 'LB' : 'KG'
// })

const convert = computed(() => {
  const kgToLbs = 2.20462
  let ret
  if (selectedInput.value === 'KG') {
    ret = message.value * kgToLbs
  } else {
    ret = message.value / kgToLbs
  }

  return ret.toPrecision(4)
})
</script>

<style></style>
