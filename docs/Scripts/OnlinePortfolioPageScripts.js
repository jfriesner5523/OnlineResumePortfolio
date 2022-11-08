window.onload = async (event) => {
    loadtopNav();
};

var rev_opn = true;
var kjfiso_opn = false;
var mop_opn = false;

// REVATURE TOP BUTTON HANDLER
document.getElementById("revbtn").addEventListener("click",onclick =>{

    let revature_row = document.getElementById("revature_row");
    let mop_row = document.getElementById("mop_row");
    let kjfiso_row = document.getElementById("kjfiso_row");
    // close_all();

    
    if(kjfiso_opn == true){
        kjfiso_row.classList.add("clsd");
        kjfiso_opn = false;

    }
    if(mop_opn==true){
        mop_row.classList.add("clsd");
        mop_opn = false;
    }

    if(rev_opn == false){
        revature_row.classList.remove("clsd");
        rev_opn=true
    }


});


document.getElementById("kjfisobtn").addEventListener("click",onclick =>{

    let revature_row = document.getElementById("revature_row");
    let mop_row = document.getElementById("mop_row");
    let kjfiso_row = document.getElementById("kjfiso_row");

   
    
    if(rev_opn == true){
        revature_row.classList.add("clsd");
        rev_opn = false;
    }
    
    if(mop_opn == true){
        mop_row.classList.add("clsd");
        mop_opn = false;
    }
    if(kjfiso_opn == false){
        kjfiso_row.classList.remove("clsd");
        kjfiso_opn=true;

    }


});


document.getElementById("mopbtn").addEventListener("click",onclick =>{

    let revature_row = document.getElementById("revature_row");
    let mop_row = document.getElementById("mop_row");
    let kjfiso_row = document.getElementById("kjfiso_row");
    // close_all();

    
    if(rev_opn == true){
        revature_row.classList.add("clsd");
        rev_opn = false;
    }
    
    if(kjfiso_opn == true){
        kjfiso_row.classList.add("clsd");
        kjfiso_opn = false;
    }

    if(mop_opn == false){
        mop_row.classList.remove("clsd");
        mop_opn=true;
    }

    

});


// function close_all(){
//     let revature_row = document.getElementById("revature_row");
//     let mop_row = document.getElementById("mop_row");
//     let kjfiso_row = document.getElementById("kjfiso_row");

//     if(rev_opn == true){
//         revature_row.classList.add("clsd");
//         rev_opn = false;
//     }
//     if(kjfiso_opn == true){
//         kjfiso_row.classList.add("clsd");
//         kjfiso_opn = false;
//     }
//     if(mop_opn == true){
//         mop_row.classList.add("clsd");
//         mop_opn = false;
//     }
// }
