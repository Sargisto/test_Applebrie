export interface IUser {
    address: IUserAdress,
    company: IUserCompany,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
    post?: Array<IPost>
}

export interface IUserAdress {
    city: string,
    geo: { lat: string, lng: string, }
    street: string,
    suite: string,
    zipcode: string,
}

export interface IUserCompany {
    bs: string,
    catchPhrase: string,
    name: string,
}


export interface IPost {
    body: string,
    id: number,
    title: string,
    userId: number,
}