let s1 = 95;
    let s2 = 95;
    let s3 = 97;
    let s4 = 98;
    let s5 = 90;
    const total = s1 + s2 + s3 + s4 + s5
    console.log(total);
    let percentage = (total / 5) * 100 ;
    console.log(percentage)
    if(percentage >= 90){
        console.log("Grade A")
    }
    else if(percentage >= 80){
        console.log("Grade B")
    }
    else if(percentage >= 70){
        console.log("Grade C")
    }
    else if(percentage >= 60){
        console.log("Grade D")
    }
    else if(percentage >= 40){
        console.log("Grade E")
    }
    else{
        console.log("Grade f")
    }