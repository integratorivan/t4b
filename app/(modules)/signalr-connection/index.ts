import { type HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export class SignalrConnection {
    private token: string | null = null;

    private roomId: number | null = null;

    public connection!: HubConnection;

    constructor(token: string, roomId: number) {
        this.token = token;
        this.roomId = roomId;
        this.createConnection(token, roomId);
    }

    // eslint-disable-next-line class-methods-use-this
    public createConnection = (token: string, roomId: number) => {
        this.connection = new HubConnectionBuilder()
            .withUrl('/api/roomHub', {
                accessTokenFactory: () => token,
            })
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        this.startConnection(roomId);
    };

    public startConnection = (roomId: number) => {
        this.connection.start().then(() => {
            this.invoke('StartRoom', roomId);
            this.invoke('InitBalance');
        });
    };

    public stopConnection = () => {
        this.token = null;
        this.roomId = null;
        this.connection.stop();
    };

    public invoke = (method: string, ...args: unknown[]) => {
        if (args) {
            return this.connection.invoke(method, ...args).catch((err) => {
                console.error(err);
                throw err;
            });
        }

        return this.connection.invoke(method).catch((err) => {
            console.error(err);
            throw err;
        });
    };
}
