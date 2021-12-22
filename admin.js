import { database } from './db.js' 
import { getDatabase, ref, update, onValue, set, push, remove } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"

const app = Vue.createApp({
  data() {
    return { 
      isLoad: true,
      new_user: {
        bio: '',
        email: ''
      },
      votes:  [
        {
          id: 1,
          name: 'Николаевский филиал',
          votes: 0
        },
        {
          name: 'Полтавский филиал',
          id: 2,
          votes: 0
        },
        {
          name: ' Фронт-офис',
          id: 3,
          votes: 0
        },
        {
          name: ' Днепровский филиал',
          id: 4,
          votes: 0
        },
        {
          name: 'Запорожский филиал',
          id: 5,
          votes: 0
        },
        {
          name: 'Ивано-Франковский филиал',
          id: 6,
          votes: 0
        },
        {
          name: 'Харьковский филиал',
          id: 7,
          votes: 0
        },
        {
          name: 'ТОМО',
          id: 8,
          votes: 0
        },
        {
          name: 'Киевский филиал',
          id: 9,
          votes: 0
        },
        {
          name: 'Одесский филиал',
          id: 10,
          votes: 0
        },
        {
          name: 'Инженерный отдел',
          id: 11,
          votes: 0
        },
        {
          name: 'Львовский филиал',
          id: 12,
          votes: 0
        }
      ],
        users: [ ]
    }
  },
  methods: { 
    delete_user(k){
      const starCountRef = ref(database, `users/${k}`)
      remove(starCountRef)
      this.isLoad = true
      document.location.reload()
    },
    async add_user() {   
        const starCountRef = ref(database, 'users')
        const newUserRef = push(starCountRef) 
        set(newUserRef, { ...this.new_user, votes: [0, 0, 0], isVoted: false}) 
        this.isLoad = true
        document.location.reload()
    }
  },
  async mounted() {
    const starCountRef = ref(database, 'users')
    onValue(starCountRef, async (snapshot) => {
      const data = snapshot.val()
      this.users = data
      const  arr_uses = Object.keys(data).map((key) => data[key])
      this.votes = [
        {
          id: 1,
          name: 'Николаевский филиал',
          votes: 0
        },
        {
          name: 'Полтавский филиал',
          id: 2,
          votes: 0
        },
        {
          name: ' Фронт-офис',
          id: 3,
          votes: 0
        },
        {
          name: ' Днепровский филиал',
          id: 4,
          votes: 0
        },
        {
          name: 'Запорожский филиал',
          id: 5,
          votes: 0
        },
        {
          name: 'Ивано-Франковский филиал',
          id: 6,
          votes: 0
        },
        {
          name: 'Харьковский филиал',
          id: 7,
          votes: 0
        },
        {
          name: 'ТОМО',
          id: 8,
          votes: 0
        },
        {
          name: 'Киевский филиал',
          id: 9,
          votes: 0
        },
        {
          name: 'Одесский филиал',
          id: 10,
          votes: 0
        },
        {
          name: 'Инженерный отдел',
          id: 11,
          votes: 0
        },
        {
          name: 'Львовский филиал',
          id: 12,
          votes: 0
        }
      ]
      this.votes.forEach(v => {
        arr_uses.forEach(user => {
          if (user.votes.includes(v.id)) {
            v.votes++
          }
        })
      })
      this.isLoad = false

    }) 
  },
})
app.mount("#app")