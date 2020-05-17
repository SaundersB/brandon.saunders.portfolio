export interface ProjectInterface {
    name: string;
    experienceId: number;
    url: string;
    years: number;
    tags: string[];
    image: string;
    description: string;
}

export default class Project {
    private readonly _name: string
    private readonly _experienceId: Number
    private readonly _url: string
    private readonly _years: Number
    private readonly _tags: object
    private readonly _image: string
    private readonly _description: string

    constructor(projectData: ProjectInterface) {
        this._name = projectData.name;
        this._experienceId = projectData.experienceId;
        this._url = projectData.url;
        this._years = projectData.years;
        this._tags = projectData.tags;
        this._image = projectData.image;
        this._description = projectData.description;
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

    get years(): Number {
        return this._years;
    }

    get tags(): object {
        return this._tags;
    }

    get image(): string {
        return this._image;
    }

    get description(): string {
        return this._description;
    }
}
