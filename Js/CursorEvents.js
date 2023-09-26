AFRAME .registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"", type:"string",}
    },


    init:function() {
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvent();
    },

    handlePlacesListState:function() {
        const id = this.el.getAttribute("id");
        const placesId = ["taj_mahal", "budapest", "new_york_city", "eiffel_tower"];
        if (placesId.includes(id)) {
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute("cursor-listener", {
                selectedItemId:id
            })
           this.el.setAttribute("material", {
            color:"yellow", opacity:1
           })
        }
    },

    handleMouseEnterEvent:function() {
        this.el.addEventListener("mouseenter", ()=>{
            this.handlePlacesListState();
        })
    },

    handleMouseLeaveEvent:function() {
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data;
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId) {
                    el.setAttribute("material", {color:"#0077CC", opacity:1});
                };
            };
        });
    },
});