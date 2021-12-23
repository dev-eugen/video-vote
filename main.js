import { database } from './db.js' 
import { getDatabase, ref, update, onValue, set, push, remove } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"

const app = Vue.createApp({
  data() {
    return {
      user: {},
      token: (new URL(document.location)).searchParams.get("token"),
      lastid: null,
      videos: [
        {
          id: 1,
          video: `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                      <div class="wistia_responsive_wrapper"
                          style="height:100%;left:0;position:absolute;top:0;width:100%;"><span
                              class="wistia_embed wistia_async_c5c75jm7eh popover=true popoverAnimateThumbnail=true videoFoam=true"
                              style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span>
                      </div>
                  </div>`,
          select: false,
          description: 'Николаевский филиал'
        },
        {
          id: 2,
          video: `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_s4ld3tburh popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Полтавский филиал'
        },
        {
          id: 3,
          video: `<div class="wistia_responsive_padding" style="padding:100.0% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_2nqfk7b8sk popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Фронт-офис'
        },
        {
          id: 4,
          video: `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_14ovh4uw0r popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: ' Днепровский филиал'
        }, 
        {
          id: 5,
          video: `<div class="wistia_responsive_padding" style="padding:177.92% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_h6e0oytvqp popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Запорожский филиал'
        }, 
        {
          id: 6,
          video: `<div class="wistia_responsive_padding" style="padding:178.13% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_qxqhpevdme popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Ивано-Франковский филиал'
        }, 
        {
          id: 7,
          video: `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_653lyb1tb3 popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Харьковский филиал'
        }, 
        {
          id: 8,
          video: `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_04wfg33j75 popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'ТОМО'
        }, 
        {
          id: 9,
          video: `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_l04rp2mazy popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Киевский филиал'
        }, 
        {
          id: 10,
          video: `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_1ipr6bqaza popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Одесский филиал'
        }, 
        {
          id: 11,
          video: `<div class="wistia_responsive_padding" style="padding:100.0% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_mhslc1vr8u popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Инженерный отдел'
        }, 
        {
          id: 12,
          video: `<div class="wistia_responsive_padding" style="padding:100.0% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_tjdm5a1whw popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Львовский филиал'
        }, 
        {
          id: 13,
          video: `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_3io03ipytx popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>`,
          select: false,
          description: 'Ровенский филиал'
        }, 
        
      ]
    }
  },
  methods: {
    async send() {
      const user_ref = ref(database, `users/${this.token}`) 
      let l_votes = this.videos.filter(e => e.select).map(e =>  e.id)
      await onValue(user_ref, async (snapshot) => {
        const data = snapshot.val() 
        this.user = data  
        this.user.votes = l_votes
        if (l_votes.length == 3) {
          this.update_user(this.user)
          return 
        }
        alert('Выберите еще видео')
      })   
    },
    update_user(data){
      const updates = {}
      updates[`users/${this.token}`] = data
      if (data.isVoted) {
        console.log(data)
          alert('Вы проголосовали')
          return
      }
      data.isVoted = true
      update(ref(database), updates) 
    },
    select(i) {
      if (this.videos[i].select) {
        this.videos[i].select = false
        return
      }
      const selected_len = this.videos.filter(e => e.select).length
      if (selected_len <= 2) {
        this.videos[i].select = true
      } else {
        this.videos[this.lastid].select = false
        this.videos[i].select = true
      }
      this.lastid = i
    }
  },
})
app.mount("#app")