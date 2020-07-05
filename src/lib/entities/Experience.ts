export interface ExperienceInterface {
    name: string;
    title: string;
    workType: string;
    startDate: string;
    endDate: string;
    description: string;
    developmentTools: string;
    skills: string;
    url: string;
    companyDescription: string;
}

export default class Experience {
    private readonly _name: string;
    private readonly _title: string;
    private readonly _workType: string;
    private readonly _url: string;
    private readonly _startDate: string;
    private readonly _endDate: string;
    private readonly _description: string;
    private readonly _developmentTools: string[];
    private readonly _skills: string[];
    private readonly _companyDescription: string;

    constructor(experienceData: ExperienceInterface) {
        this._name = experienceData.name;
        this._title = experienceData.title;
        this._workType = experienceData.workType;
        this._url = experienceData.url;
        this._startDate = experienceData.startDate;
        this._endDate = experienceData.endDate;
        this._description = experienceData.description;
        this._developmentTools = experienceData.developmentTools.split(', ');
        this._description = experienceData.description;
        this._skills = experienceData.skills.split(', ');
        this._companyDescription = experienceData.companyDescription;
    }

    get companyDescription(): string {
        return this._companyDescription;
    }
    get skills(): string[] {
        return this._skills;
    }
    get developmentTools(): string[] {
        return this._developmentTools;
    }
    get description(): string {
        return this._description;
    }
    get endDate(): string {
        return this._endDate;
    }
    get startDate(): string {
        return this._startDate;
    }
    get url(): string {
        return this._url;
    }
    get workType(): string {
        return this._workType;
    }
    get name(): string {
        return this._name;
    }
    get title(): string {
        return this._title;
    }
}
