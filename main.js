
$( document ).ready(function(){ 
    for(var i = 0 ;i<arr.length;i++)	
       {display()}
   })
   
   
   var arr = []
   function Case(id,img,name,price)
   {
       var o = {}
       o.id=id
       o.name=name
       o.price=price
       o.img=img
       o.prepare=prepare
   
       return o ;
   }
   function prepare()
   {
       return '<div><img id="img" src="'+this.img+'"</div></div> <div id= "name" > '+this.name+'</div> <div id="price">'+this.price+'</div>'
   }
   
   var c1= Case(1,"https://image.lucrin.com/is/image/LucrinRender/900x600/HB2011-002_VCLS_RGG_RGG/931212-8f1819-bc2d27-b63631-c72d26-c35860-c71b1b/watch-case-for-1-watch-red-smooth-leather-6.jpg","Watch Roll for 1 Watche","269$")
   
   arr.push(c1);
   var c2= Case(1,"https://image.lucrin.com/is/image/LucrinRender/900x600/HB2012-002_VCLS_NTR_NTR/b98837-ca9743-c48a4d-a96c2f-b9985a-d09e70-c08649/watch-roll-for-2-watches-natural-smooth-leather-6.jpg","Watch Roll for 2 Watches","399$")
   arr.push(c2)
   var c3= Case(1,"https://image.lucrin.com/is/image/LucrinRender/900x600/HB2016-003_VCLS_VTC_VTC/1b7716-1b7716-405e32-353931-283c2d-4a6352-2f3b32/watch-box-for-2-watches-light-green-smooth-leather-6.jpg","Watch Roll for 2 Watches","423$")
   arr.push(c3)
   var c4= Case(1,"https://image.lucrin.com/is/image/LucrinRender/900x600/HB2013-002_VCLS_GRF_GRF/626665-626665-5d5d5d-494747-5e5e5d-5e5e5d-414243/watch-case-for-3-watches-mouse-grey-smooth-leather-6.jpg","Watch Roll for 3 Watches","539$")
   arr.push(c4)
   var c5= Case(1,"https://image.lucrin.com/is/image/LucrinRender/900x600/HB2018-001_VCVC_NTR_NTR/b98837-ca9743-c48a4d-a96c2f-b9985a-d09e70-c08649/watch-roll-for-8-watches---natural---vegetable-tanned-leather-natural-vegetable-tanned-leather--6.jpg","Watch Roll for 8 Watches","1200$")
   arr.push(c5)
   
   

   function displayWatchs() {
    for(var i=0; i<arr.length;i++){
     $(".container").append(arr[i].prepare())
    }
  }
  function displayFilterWatches(arr) {
    for(var i=0; i<arr.length;i++){
     $(".container").append(arr[i].prepare())
    }
  }

   function filterByPrice(){
    var array=[]
    for( var i=0 ; i<arr.length; i++){
        if(parseInt((arr[i].price),10)> $('#min').val() && parseInt((arr[i].price),10)< $('#max').val() ){
            array.push(arr[i])
        }
    }
$(".container").html('')
displayFilterWatches(array)
}