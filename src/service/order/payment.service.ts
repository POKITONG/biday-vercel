import Cookies from "js-cookie";
import {paymentAPI} from "@/api/order/payment.api";
import {PaymentTempModel} from "@/model/order/paymentTemp.model";
import {PaymentConfirmModel} from "@/model/order/paymentConfirm.model";
import {PaymentRequestModel} from "@/model/order/payment.model";
import {PaymentSaveModel} from "@/model/order/paymentSave.model";
import {handleApiErrorResponse, handlePaymentErrorResponse, isApiError, isPaymentError} from "@/utils/error/error";

export async function savePaymentTemp(
    paymentTemp: PaymentTempModel
) {

    const userToken = Cookies.get('userToken');
    if (!userToken) throw new Error("유저토큰 없음");
    // TODO error enum

    const requestOptions = {
        data: paymentTemp,
        userToken: userToken,
    };

    try {
        return await paymentAPI.savePaymentTemp(requestOptions);
    } catch (error) {
        console.log(error);
        throw new Error();
        // TODO error enum
    }
}



export async function fetchAllPaymentByUserId(): Promise<PaymentRequestModel[]> {
    try {

        const userToken = Cookies.get('userToken');

        if (!userToken) {
            throw new Error("userToken 갖고 올 수 없습니다.")
            // TODO error enum
        }

        const options = {
            userToken : userToken,
        }

        const paymentArray: PaymentRequestModel[] = await paymentAPI.findByUser(options);

        if (paymentArray.length === 0) {
            console.log("결제 찾을 수 없습니다.");
            return [];
        }

        return paymentArray
    } catch (error){
        console.error("fetchAllPaymentByUserId 에러 발생", error);
        throw new Error("결제를 가져오는 중 에러가 발생했습니다.");
        // TODO error enum
    }
}

export async function confirmPayment(payment: PaymentConfirmModel): Promise<PaymentSaveModel> {
    const userToken = Cookies.get("userToken");
    if (!userToken) throw new Error("유저토큰 없음");
    // TODO error enum

    const options = {
        userToken: userToken,
        data: payment,
    }

    try {
        const result = await paymentAPI.savePayment(options);
        console.log("result", result);
        return result;

    } catch (error) {
        if (isPaymentError(error)) {
            handlePaymentErrorResponse(error.status);
        } else if (isApiError(error)) {
            handleApiErrorResponse(error.status);
        } else {
            console.error('알 수 없는 에러 발생', error);
        }

        throw new Error("결제를 처리할 수 없습니다.");
    }
}