export default class Technology {

    _name;
    _image;

    constructor(name, image) {
        this._name = name;
        this._image = image;
    }

    get name() {
        return this._name;
    }

    get image() {
        return this._image;
    }
}