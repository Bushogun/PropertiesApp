export interface PropertyPostModel {
    name:         string;
    address:      string;
    price:        number;
    codeInternal: string;
    year:         number;
    idOwner:      string;
}

export interface PropertyResponseModel {
    idProperty:   string;
    name:         string;
    address:      string;
    price:        number;
    codeInternal: string;
    year:         number;
    idOwner:      string;
}