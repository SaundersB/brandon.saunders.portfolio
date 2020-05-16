export default class Project {
    private readonly _name: string
    private readonly _experienceId: Number
    private readonly _url: string
    private readonly _year: Number
    private readonly _tags: object

    constructor({name, experienceId, url, year, tags}) {
        this._name = name;
        this._experienceId = experienceId;
        this._url = url;
        this._year = year;
        this._tags = tags;
    }

    get name(): string {
        return this._name;
    }

    get experienceId(): Number {
        return this._experienceId;
    }

    get url(): string {
        return this._url;
    }

    get year(): Number {
        return this._year;
    }

    get tags(): object {
        return this._tags;
    }
}
