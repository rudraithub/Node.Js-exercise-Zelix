let num = 1234;
    let n = num.toString()
    
    for(i=0;i<=n.length;i++){
        if(i===0){
            let a = parseInt(n[i])
            console.log(a);
        }
        if(i===n.length-1){
            let b = parseInt(n[i])
            console.log(b);
        }    
    }