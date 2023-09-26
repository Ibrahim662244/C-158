AFRAME .registerComponent("tour",{
    init:function() {
        this.placesContainer = this.el
        this.createCards()
    },
   createCards:function() {
    const thumbNailsRef = [
        {
            id:"budapest",
            title:"The Budapest",
            url:"./assets/thumbnails/budapest.jpg"
        },
        {
            id:"eiffel_tower",
            title:"The Eiffel Tower",
            url:"./assets/thumbnails/eiffel_tower.jpg"
        },
        {
            id:"new_york_city",
            title:"New York City",
            url:"./assets/thumbnails/new_york_city.png"
        },
        {
            id:"taj_mahal",
            title:"The Taj Mahal",
            url:"./assets/thumbnails/taj_mahal.png"
        },
     ]
     let previousXPosition = -60
     for (var item of thumbNailsRef){
        const posX = previousXPosition + 25
        const posY = 10
        const posZ = -40
        const position = {x:posX, y:posY, z:posZ}
        previousXPosition = posX
        const borderEl = this.createBorder(position, item.id)
        const thumbNail = this.createThumbNail(item)
        borderEl.appendChild(thumbNail)
        const titleEl = this.createTitleEl(position, item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl)
     }
   },

   createBorder:function(position, id){
    const entityEl = document.createElement("a-entity")
          entityEl.setAttribute("id", id)
          entityEl.setAttribute("visible", true)
          entityEl.setAttribute("position", position)
          entityEl.setAttribute("geometry", {primitive:"ring",radiusInner:9, radiusOuter:10})
          entityEl.setAttribute("material", {opacity:1, color:"#0077CC"})
          entityEl.setAttribute("cursor-listener", {})
          return entityEl;
   },

   createThumbNail:function(item){
    const entityEl = document.createElement("a-entity")
          entityEl.setAttribute("visible", true)
          entityEl.setAttribute("geometry", {primitive:"circle",radius:9})
          entityEl.setAttribute("material", {src:item.url})
          return entityEl
   },

   createTitleEl:function(position, item){
    const entityEl = document.createElement("a-entity")
          entityEl.setAttribute("text", {width:70, color:"#E65100", align:"center", value:item.title})
          const elPosition = position
          elPosition.y = -20

          entityEl.setAttribute("visible", true)
          entityEl.setAttribute("position", elPosition)
          return entityEl
   },
})