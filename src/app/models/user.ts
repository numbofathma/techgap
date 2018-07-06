export class User {
    protected _id: number;
    protected _first_name: string;
    protected _last_name: string;
    protected _avatar: string;

    constructor(id: number, first_name: string, last_name: string, avatar: string) {
        this._id = id;
        this._first_name = first_name;
        this._last_name = last_name;
        this._avatar = avatar;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get first_name(): string {
        return this._first_name;
    }

    set first_name(value: string) {
        this._first_name = value;
    }

    get last_name(): string {
        return this._last_name;
    }

    set last_name(value: string) {
        this._last_name = value;
    }

    get avatar(): string {
        return this._avatar;
    }

    set avatar(value: string) {
        this._avatar = value;
    }
}
