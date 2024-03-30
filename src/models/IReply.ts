export class IReply<T>{
    error: boolean;
    message: string | null;
    data: T;
}
