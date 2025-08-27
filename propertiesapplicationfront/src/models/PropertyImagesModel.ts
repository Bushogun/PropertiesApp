export interface PropertyImagePostModel {
    idProperty: string;
    fileData:   string;
    enabled:    boolean;
}

export interface PropertyImageResponseModel {
    idPropertyImage:         string;
    idProperty: string;
    fileData:   string;
    enabled:    boolean;
}