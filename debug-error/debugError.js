function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Não foi passado nenhum array ou nenhum número");

        if (typeof arr !== 'object') throw new TypeError("Array não é um objeto");

        if (typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

        if (arr.length != num) throw new RangeError("Array não possui o número de elementos esperado");

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        }else{
            console.log("Este erro é um erro desconhecido: " + e.message);
        }
    }
}

console.log(validaArray([1,2,3,4,5], 5));