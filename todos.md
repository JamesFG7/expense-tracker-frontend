# To do
### Transaction Page
 - [x] ~~Add transaction Dialog -> same with update~~
 - [x] ~~Add Transaction button in transaction history~~
 - [x] ~~Margin and size of header in transaction history~~
 - [x] ~~Transaction type conditional statement for up and down icon~~
 - [x] ~~Transaction amount conditional statement for negative and positive. value = (type === "expenses")  ?  -val  : val;~~
 - [ ] Transaction type radio button in dialog



### Summary page

 - [x] ~~Transaction Summary~~
 - [x] ~~Transaction history (Without actions)~~
 - [ ] Date Filter



# Pinia Notes

### Store
>A store is a centralized container for managing state in a predictable and organized manner. It typically contains the application's state, along with methods to update and access that state. In Vue.js applications, stores can be created using libraries like Vuex or Pinia.
----

### State 
>State refers to the data that you want to manage in your application. It represents the current condition or snapshot of your application at any given time.

Example
```javascript
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
})
```
---

### Actions 
>Functions responsible for performing asynch operations of committing mutations to update the store's state (data)

Example
```javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    async incrementAsync() {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.increment()
    },
  },
})
```
---

### Getters
>Getters are functions that compute derived state based on the store's state. They allow you to access and manipulate store state in a reactive manner without modifying the state directly. 

Example
```javascript
// src/store/index.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    doubledCount(state) {
      return state.count * 2
    },
  },
})
```