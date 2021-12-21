import { database } from './db.js' 
import { getDatabase, ref, update, onValue, set, push, remove } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"

const app = Vue.createApp({
  data() {
    return { 
      new_user: {
        bio: '',
        email: ''
      },
      votes:  [
        {
          id: 1,
          //name: 'Николаев НГ',
          votes: 0
        },
        {
          //name: 'Полцуктава',
          id: 2,
          votes: 0
        },
        {
          //name: 'Фронт офис',
          id: 3,
          votes: 0
        },
        {
          //name: 'Полцукцукцкутава',
          id: 4,
          votes: 0
        },
        {
          //name: 'Полцукцтава',
          id: 5,
          votes: 0
        },
        {
          //name: 'По тава',
          id: 6,
          votes: 0
        },
        {
          //name: 'Полтава',
          id: 7,
          votes: 0
        },
        {
          //name: 'Полтава',
          id: 8,
          votes: 0
        },
        {
          //name: 'KF 2022',
          id: 9,
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
    },
    add_user() {  
      const starCountRef = ref(database, 'users')
      const newUserRef = push(starCountRef)
      set(newUserRef, { ...this.new_user, votes: [0, 0, 0], isVoted: false})
      this.new_user = {
        bio: '',
        email: ''
      }
    }
  },
  async mounted() {
    const starCountRef = ref(database, 'users')
    onValue(starCountRef, async (snapshot) => {
      const data = snapshot.val()
      this.users = data
      const  arr_uses = Object.keys(data).map((key) => data[key]);
      console.log(arr_uses);
      this.votes.forEach(v => {
        arr_uses.forEach(user => {
          if (user.votes.includes(v.id)) {
            v.votes++
          }
        })
      })

    }) 
  },
})
app.mount("#app")