// solução 1 utilizando recursos do javascript 
function verificaPalindromo(string){
    if(!string) return "String inexistente";

     if(string.split("").reverse().join("") === string) return "É palindromo";
        else return "Não é palindromo";
}

// solução 2 utilizando repetição
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i=0; i< string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) return "Não é palindromo";

       else return "É palindromo";
    }
}

