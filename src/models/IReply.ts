export class IReply<T>{
    error: boolean = false;
    message: string | null = null;
    data: T | null = null;
}
