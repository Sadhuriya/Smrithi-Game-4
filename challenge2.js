class Challenge2{
    constructor(){
        this.security=new Security();
        this.image=loadImage("images/background.jpg")
    }
    display(){
        background(this.image);
        clues();
        this.security.display();
    }
}