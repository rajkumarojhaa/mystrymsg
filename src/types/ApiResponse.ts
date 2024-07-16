import { Message } from "@/model/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessage?: boolean       //here is an error in hitesh code
    messages?: Array<Message>
}