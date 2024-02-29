<template>
  <div
    class="bg-lightBlue shadow-md border-2 rounded flex flex-col justify-center items-center text-center min-h-52 container"
  >
    <div class="flex flex-row items-center space-x-4 m-3">
      <div>Input:</div>
      <input class="flex rounded" v-model="inputNumber" placeholder="enter here" />
      <select class="flebasis-1/2" :value="selectedInput" @change="changeUnit($event, 'input')">
        <option v-for="option in availableUnits" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <div class="flex flex-row space-x-4 m-3">
      <div>Output:</div>
      <div>{{ calculate }}</div>
      <select class="flebasis-1/2" :value="selectedOutput" @change="changeUnit($event, 'output')">
        <option v-for="option in availableUnits" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface IWeightChart {
  [index: string]: number
}
// how many kgs is 1 X
const weightUnitsToKilo: IWeightChart = {
  kg: 1.0,
  'Implerial Ton': 1016.05,
  Tonne: 1000.0,
  g: 0.001,
  mg: 1e-6,
  μg: 1e-9,
  lb: 0.453592,
  stone: 6.35029,
  ounce: 0.0283495089275588
}

const availableUnits = ref(Object.keys(weightUnitsToKilo))

const selectedInput = ref(availableUnits.value[0])
const selectedOutput = ref(availableUnits.value[1])

const changeUnit = (event: any, currentUnit: string) => {
  let newUnit = event.target.value

  if (currentUnit === 'input') {
    console.log('selectedInput', selectedInput.value)
    console.log('new', event.target.value)
    if (newUnit === selectedOutput.value) {
      swap()
    } else {
      selectedInput.value = newUnit
    }
  } else if (currentUnit === 'output') {
    console.log('selectedOutput', selectedOutput.value)
    console.log('new', event.target.value)
    if (newUnit === selectedInput.value) {
      swap()
    } else {
      selectedOutput.value = newUnit
    }
  }

  currentUnit = event.target.value
}

const inputNumber = ref(0)

const swap = () => {
  let temp = selectedInput.value
  selectedInput.value = selectedOutput.value
  selectedOutput.value = temp
}

const calculate = computed(() => {
  let ret =
    inputNumber.value *
    (weightUnitsToKilo[selectedInput.value] / weightUnitsToKilo[selectedOutput.value])
  return ret.toFixed(4)
})
</script>

<style></style>
