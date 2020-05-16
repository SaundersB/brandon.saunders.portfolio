interface ProjectInterface {
    name: string;
    experienceId: number;
    url: string;
    year: number;
    tags: string[];
}

export default class Project {
    private readonly _name: string
    private readonly _experienceId: Number
    private readonly _url: string
    private readonly _year: Number
    private readonly _tags: object

    constructor(projectData: ProjectInterface) {
        this._name = projectData.name;
        this._experienceId = projectData.experienceId;
        this._url = projectData.url;
        this._year = projectData.year;
        this._tags = projectData.tags;
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
