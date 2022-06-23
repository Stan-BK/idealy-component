const vm = {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    }
  },
  methods: {
    startRotate() {
      const cards = this.$refs.card
      this.rotateCard(cards)
    },
    rotateCard(cards) {
      if (cards[0].className.includes(' rotate-card')) {
        cards.forEach(element => {
          element.className = element.className.replace(' rotate-card', ' reset-card')
        });
      } else if (cards[0].className.includes(' reset-card')) {
        cards.forEach(element => {
          element.style.transition = 'all .0s'
          element.className = element.className.replace(' reset-card', '')
        })
      } else {
        cards.forEach(element => {
          element.style.transition = 'all .4s'
          element.className += ' rotate-card'
        })
      }
      setTimeout(this.rotateCard.bind(this, cards), 1000)
    }
  },
  mounted() {
    this.startRotate()
  }
}
const app = Vue.createApp(vm)
app.mount('.wrap')
console.log(app)
