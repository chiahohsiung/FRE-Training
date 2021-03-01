// export class student {
//     id: number;
//     name: string;

//     display(): void {
//         console.log('Function displays Student id is:' + this.id)
//         console.log('Function displays Student name is:' + this.name)
//     }

// }

// let obj = new student();
// obj.id = 101;
// obj.name = 'Tom';
// obj.display();




// export class student {
//     id: number;
//     name: string;

//     display(id: number, name: string): void {
//         this.id = id;
//         this.name = name;
//         console.log('Function displays Student id is:' + this.id)
//         console.log('Function displays Student name is:' + this.name)
//     }

// }
// let obj = new student();
// obj.display(101, 'Tom');





export class student {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {    
        console.log('Function displays Student id is:' + this.id)
        console.log('Function displays Student name is:' + this.name)
    }

}

let obj = new student(101, 'Tom')
obj.display();