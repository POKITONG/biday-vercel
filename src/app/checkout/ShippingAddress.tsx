"use client";

import Label from "@/components/Label/Label";
import React, {ChangeEvent, FC} from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Input from "@/shared/Input/Input";
import Radio from "@/shared/Radio/Radio";
import {AddressModel} from "@/model/user/address.model";

interface Props {
    isActive: boolean,
    onCloseActive: () => void,
    onOpenActive: () => void,
    recipient: string,
    selectedAddress: AddressModel,
    onAddressChange: (index: number) => void,
    handleRecipientChange: (e: ChangeEvent<HTMLInputElement>) => void,
    shipper: string,
    handleShipperChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

// const getAddress = () => {
//   const {data, isLoading, }
// };

const ShippingAddress: FC<Props> = ({
                                        isActive,
                                        onCloseActive,
                                        onOpenActive,
                                        recipient,
                                        selectedAddress,
                                        onAddressChange,
                                        handleRecipientChange,
                                        shipper,
                                        handleShipperChange,
                                    }) => {
        const renderShippingAddress = () => {
            return (
                <div className="border border-slate-200 dark:border-slate-700 rounded-xl ">
                    <div className="p-6 flex flex-col sm:flex-row items-start">
          <span className="hidden sm:block">
            <svg
                className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
            </svg>
          </span>

                        <div className="sm:ml-8">
                            <h3 className=" text-slate-700 dark:text-slate-300 flex ">
                                <span className="uppercase">SHIPPING ADDRESS</span>
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            </h3>
                            <div className="font-semibold mt-1 text-sm">
              <span className="">
                {`${selectedAddress.streetAddress} ${selectedAddress.detailAddress}`}
              </span>
                            </div>
                        </div>
                        <button
                            className="py-2 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg"
                            onClick={onOpenActive}
                        >
                            Change
                        </button>
                    </div>
                    <div
                        className={`border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 ${
                            isActive ? "block" : "hidden"
                        }`}
                    >
                        {/* ============ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                            <div>
                                <Label className="text-sm">보내시는 분</Label>
                                <Input className="mt-1.5" value={shipper} onChange={handleShipperChange}/>
                            </div>
                            <div>
                                <Label className="text-sm">받으시는 분</Label>
                                <Input className="mt-1.5" value={recipient} onChange={handleRecipientChange}/>
                            </div>
                        </div>

                        {/* ============ */}
                        <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-3">
                            <div className="flex-1">
                                <Label className="text-sm">주소</Label>
                                <Input
                                    className="mt-1.5"
                                    placeholder=""
                                    defaultValue={selectedAddress.streetAddress}
                                    type={"text"}
                                />
                            </div>
                        </div>

                        {/* ============ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                            <div>
                                <Label className="text-sm">상세 주소</Label>
                                <Input className="mt-1.5" defaultValue={selectedAddress.detailAddress}/>
                            </div>
                            <div>
                                <Label className="text-sm">우편 번호</Label>
                                <Input className="mt-1.5" defaultValue={selectedAddress.zipcode}/>
                            </div>
                        </div>

                        {/* ============ */}
                        <div>
                            <Label className="text-sm">주소지 정보</Label>
                            <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                <Radio
                                    label={`<span class="text-sm font-medium">거주지 <span class="font-light">(배달 시간 제한 없음)</span></span>`}
                                    id="Address-type-home"
                                    name="Address-type"
                                    defaultChecked
                                />
                                <Radio
                                    label={`<span class="text-sm font-medium">사무실 <span class="font-light">(배달시간:  <span class="font-medium">9 AM - 5 PM</span>)</span> </span>`}
                                    id="Address-type-office"
                                    name="Address-type"
                                />
                            </div>
                        </div>

                        {/* ============ */}
                        <div className="flex flex-col sm:flex-row pt-6">
                            <ButtonPrimary
                                className="sm:!px-7 shadow-none"
                                onClick={onCloseActive}
                            >
                                저장 후 결제
                            </ButtonPrimary>
                            <ButtonSecondary
                                className="mt-3 sm:mt-0 sm:ml-3"
                                onClick={onCloseActive}
                            >
                                취소
                            </ButtonSecondary>
                        </div>
                    </div>
                </div>
            );
        };
        return renderShippingAddress();
    }
;

export default ShippingAddress;
