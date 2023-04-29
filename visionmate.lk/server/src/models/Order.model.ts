import * as mongoose from "mongoose";
import {StringOrObjectId} from "../types/util-types";

interface CommonAttributes {
    userId: StringOrObjectId;
    status: "pending" | "processing" | "shipped" | "delivered";
    address: string;
    phone: string;
    email?: string;
    paymentMethod: "cod" | "online";
    totalAmount: number;
    shippingFee: number;
    note?: string;
}

export interface DOrder extends CommonAttributes {
    _id?: StringOrObjectId;
}

export interface IOrder extends CommonAttributes, mongoose.Document {

}