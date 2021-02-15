foodObj = class food {

    preload() {
        var milk = loadImage("images/Milk.png")
    }

    constructor() {
   
    }

    getFoodStock() {
            var foodStockRef = database.ref('Food');
            foodStockRef.on("value", function (data){
                foodStock = data.val();
            })
        }

    updateFoodStock(Food) {
        database.ref('Food').update({
            foodStock:Food
        })
    } 


    deductFood(Food) {
        var foodCount =  "Food" + foodStock;
        database.ref(Food).set({
            foodStock:Food
        })
    }
    
    bedroom(){
        background(bedroom,500,500);
    }

    garden(){
        background(garden,500,500);
    }

    washroom(){
        background(washroom,500,500);
    }
    
    
    ;
    display() {

        var x = 80 , y = 100

        imageMode(CENTER);
        image(this.image,720,220,70,70)

        if(this.foodStock!=0){
            for (let i=0; i<this.foodStock; i++) {
                if(i%10==0) {
                    x = 80;
                    y = y + 50;
                }   
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}