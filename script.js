let pass_gen = (inp_len) => {
    console.log(1)
    let noiselist = (len) => {
        
        const array = new Uint8Array(len);

        crypto.getRandomValues(array);
        return(array)
    }
    let password = "" ;

    const dec_num = noiselist(inp_len) ;

    for(const value of dec_num){
        let ascii = String.fromCharCode(32 + (value % 95 ));
        password = password + ascii ; 
    }
    console.log(password) ; 
    return password ;

}
const lenth_value = document.querySelector("#lengthValue");

const lenth_change = document.querySelector("#passwordLength");
const generate = document.querySelector("#redoBtn"); 
const passwordDisplay = document.querySelector("#password")
const autocopy = document.querySelector("#copyBtn")
lenth_change?.addEventListener("click",() => {
    lenth_value.innerHTML = lenth_change.value;
} );

generate?.addEventListener("click",() => 
    {
    const new_passwore = pass_gen(lenth_change.value);
        passwordDisplay.value = new_passwore ; 

    }
)
autocopy?.addEventListener("click",() => {
    navigator.clipboard.writeText(passwordDisplay.value)
})


