let highestz=1;


class Paper{
    holdingPaper=false;

    prevMousex=0;
    prevMousey=0;

    mousex=0;
    mousey=0;

    velocityx=0;
    velocityy=0;

    currentPaperx=0;
    currentPapery=0;

    init(paper) {
        paper.addEventListener('mousedown', (e) => {
            this.holdingPaper= true;
            paper.style.zIndex= highestz;
            highestz+=1;

            if(e.button==0){
                this.prevMousex=this.mousex;
                this.prevMousey=this.mousey;

                console.log(this.prevMousex);
                console.log(this.prevMousey);
            }
        })

        document.addEventListener('mousemove', (e) =>{
            this.mousex= e.clientX;
            this.mousey= e.clientY;

            this.velocityx=this.mousex-this.prevMousex;
            this.velocityy=this.mousey-this.prevMousey;

            if(this.holdingPaper){
                this.currentPaperx+= this.velocityx;
                this.currentPapery+= this.velocityy;

                this.prevMousex=this.mousex;
                this.prevMousey=this.mousey;

                paper.style.transform=`translateX(${this.currentPaperx}px) translateY(${this.currentPapery}px)`;
            }
        
        })

        window.addEventListener('mouseup', (e) =>{
            console.log('mouse button is released');
            this.holdingPaper=false;
            
        })

    }
}

const papers=Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
    const p= new Paper();
    p.init(paper);
})

const paper = document.querySelectorAll(".paper");

paper.forEach(card => {
    card.style.left = `${Math.random() * 125-50}px`;
    card.style.top = `${Math.random() * 125-50}px`;
    card.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
});