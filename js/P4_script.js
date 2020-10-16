console.log("1. FizzBuzz")

for(let i = 1; i<5; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }else if(i%3 == 0){
        console.log("Fizz")
    }else if(i%5 == 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

console.log("2. Fibonacci sequence")

function fibo(n){
    if(n==1){
        return 1
    }
    if(n==0){
        return 0
    }
    return fibo(n-1)+fibo(n-2)
}

for(let i = 0; i<10; i++){
    console.log(fibo(i))
} 

console.log("3. Prime numbers")

function prime(n){
    if(n>1){
        for(let i = 2; i<n; i++){
            if(n%i == 0){
                return "";
            }
        }
        return n;
    }
}

let primes = []
for(let i = 1; i<20; i++){
    primes.push(prime(i))
   
}
primes = primes.filter(prime => typeof(prime) == "number")

console.log(primes)