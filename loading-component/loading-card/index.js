const vm = {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    }
  },
}
const app = Vue.createApp(vm)
app.mount('.wrap')
console.log(app)
