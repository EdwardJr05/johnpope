const SampleData = {
  data(){
    return {
      content:[

        {id:1,imgSrc:"https://images.pexels.com/photos/3380805/pexels-photo-3380805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Hanibal Girmay",subTitle:"Developer"},
        {id:2,imgSrc:"https://images.pexels.com/photos/2406385/pexels-photo-2406385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Example example",subTitle:"UI/UX designer"},
        {id:3,imgSrc:"johnpope/camera.jpeg",title:"Some Name",subTitle:"Photographer"},
      ]
    }
  }
}

Vue.createApp(SampleData).mount('#vueBind');
