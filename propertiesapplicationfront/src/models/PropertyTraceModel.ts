export interface PropertyTracePostModel {
    dateSale:   Date;
    name:       string;
    value:      number;
    tax:        number;
    idProperty: string;
}

export interface PropertyTraceResponseModel {
    idPropertyTrace: string;
    dateSale:        Date;
    name:            string;
    value:           number;
    tax:             number;
    idProperty:      string;
}
