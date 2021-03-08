class myPromise{
    thenCallBackQueue = [];
    catchCallBackQueue = [];
    currentData;
    promiseState = "pending";
    constructor(executor){
        try{
            executor(this.resolve, this.reject);
        }
        catch(error){
            this.reject(error);
        }
    }
    resolve = (data) =>{
        this.promiseState = "fulfilled";
        if(this.thenCallBackQueue.length !== 0){
            this.currentData = data;
            while(this.thenCallBackQueue.length !== 0){
                const callback = this.thenCallBackQueue.shift();
                console.log(callback);
                this.currentData = callback(this.currentData);
            }
        }
        else{
            return;
        }
    }
    reject = (error) =>{
        console.log(error);
        this.promiseState = "reject";
        if(this.catchCallBackQueue.length !== 0){
            this.currentData = error;
            while(this.catchCallBackQueue.length !== 0){
                const callback  = this.catchCallBackQueue.shift();
                this.currentData = callback(this.currentData);
            }
        }
        else{
            console.log(error);
            return;
        }
    }
    then = (callback) =>{
        console.log("pog");
        if(this.promiseState === "pending"){
            this.thenCallBackQueue.push(callback);
        }
        return this;
    }
    catch = (callback) =>{
        if(callback !== undefined){
            this.catchCallBackQueue.push(callback);
        }
        return this;
    }
}

const promise1 = new Promise((resolve,reject)=>{
    resolve("hello");
    reject("ERROR");
    let arr = undefined;
    console.log(arr.wtf);

});

promise1.then(data =>{
    console.log(data);
    return data;
})
.then(data =>{
    data += "again";
    return data;
})
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
});
/*
console.log("new promise");
const prom = new Promise((resolve, reject)=>{
    resolve("poggers");
    reject("weirdChamp");

})
.then(data =>{
    console.log(data);
    return data;
})
.then(data =>{
  console.log(data);
})

*/
