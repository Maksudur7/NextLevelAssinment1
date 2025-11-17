
const formatValue = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value
    }
}


type array = number[]
const getLength = (value: string | array) => {
    return value.length;
}


class Person {
    constructor(public name: string, public age: number) {
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;

    }
}



type books = {
    title: string;
    rating: number;
}
type filterArray = books[]
const filterByRating = (value: filterArray) => {
    const filter = value.filter(element => {
        if (element.rating < 0 || element.rating > 5) {
            throw new Error('rating range 0 to 5');
        }
        else {
            return element.rating >= 4
        }
    })
    return filter
}


type users = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
type filterActiveArray = users[]
const filterActiveUsers = (value: filterActiveArray) => {
    const activeUsers = value.filter(elemant => elemant.isActive === true)
    return activeUsers
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}
const printBookDetails = (value: Book) => {
    return `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable === true ? 'Yes' : "No"}`
}


type UniqArray = (string | number)[];
const getUniqueValues = (value1: UniqArray, value2: UniqArray) => {
    let combine: (string | number)[] = [];
    for (let i = 0; i < value1.length; i++) combine.push(value1[i]!);
    for (let i = 0; i < value2.length; i++) combine.push(value2[i]!);
    let uniqArr: UniqArray = []
    for (let i = 0; i < combine.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqArr.length; j++) {
            if (combine[i] === uniqArr[j]) {
                isDuplicate = true;
                break;
            }

        }
        if (!isDuplicate) {
            uniqArr.push(combine[i]!)
        }
    }
    return uniqArr
}


type ProductObj = {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}
type Product = ProductObj[];
const calculateTotalPrice = (value: Product) => {
    if (value.length >= 0) {
        const totalPrice = value.reduce((acc: number, product: ProductObj) => {
            if (product.discount! < 0 || product.discount! > 100) {
                throw new Error('discount must be under 100')
            } else {
                const total = product.price * product.quantity;
                const productDiscount = ((product?.discount ? product.discount : 0) / 100);
                const totalDiscountPrice = total * productDiscount;
                return acc + (total - totalDiscountPrice);
            }

        }, 0)
        return totalPrice;
    } else {
        return 0;
    }
}

