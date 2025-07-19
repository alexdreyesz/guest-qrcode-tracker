export interface UserEventsProp {
    _id: string;
    userID: string;
    events: {
        date: string;
        event: {
            name: string;
            scanned: boolean;
            _id: string;
        } [];
    } [];
}
