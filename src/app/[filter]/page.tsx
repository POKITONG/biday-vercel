"use client"

import React, {FC, useEffect, useState} from "react";
import Pagination from "@/shared/Pagination/Pagination";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import SectionSliderCollections from "@/components/SectionSliderLargeProduct";
import SectionPromo1 from "@/components/SectionPromo1";
import ProductCard from "@/components/ProductCard";
import TabFilters from "@/components/TabFilters";
import {ProductModel, SearchFilter} from "@/model/product/product.model";
import {fetchProducts} from "@/service/product/product.service";
import {setLoading} from "@/lib/features/products.slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/query";
import {setCurrentPage, setProducts} from "@/features/dohee/products.slice";
import {RootStateProduct} from "@/lib/store";

type ProductCardData = {
    product: ProductModel;
    image: string;
};

function FetchItems() {

}

export default function PageCollection({params} : {params: {filter: string}}){
    // const searchParams = useSearchParams(); // searchParams 가져오기
    // const categoryFilter  = searchParams.get('filter') as string;
    // console.log("categoryFilter", categoryFilter);

    // const itemsPerPage = 20; // 한 페이지에 20개씩 (가로 5 , 세로 4개)
    // const [PRODUCTS, setProducts] = useState<ProductModel[]>([]);
    //
    // useEffect(() => {
    //     const fetchAndSetProducts = async () => {
    //         setLoading(true);
    //         const searchFilter: SearchFilter = {
    //             category: params.filter,
    //         };
    //
    //         const fetchedProducts = await fetchProducts(searchFilter);
    //         if (fetchedProducts) {
    //             setProducts(fetchedProducts);
    //         }
    //         setLoading(false);
    //     };
    //
    //     fetchAndSetProducts();
    // }, [params.filter]);
    //
    // console.log("Products By Category", PRODUCTS)
    //
    // const totalPages = Math.ceil(PRODUCTS.length / itemsPerPage);
    // // 현재 페이지 상태를 관리
    // const [currentPage, setCurrentPage] = useState(1);
    // const startIndex = (currentPage -1) * itemsPerPage;
    // const selectedProducts = PRODUCTS.slice(startIndex, startIndex + itemsPerPage);
    //
    // // 페이지 처리 클릭 핸들러
    // const handlePageChange = (page: number) => {
    //     console.log("페이지 변경", page)
    //     setCurrentPage(page);
    // };
    //
    // return (
    //     <div className={`nc-PageCollection`}>
    //         <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
    //             <div className="space-y-10 lg:space-y-14">
    //                 {/* HEADING */}
    //                 <div className="max-w-screen-sm">
    //                     <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
    //                         {params.filter}
    //                     </h2>
    //                 </div>
    //
    //                 <hr className="border-slate-200 dark:border-slate-700"/>
    //                 <main>
    //                     {/* TABS FILTER */}
    //                     <TabFilters/>
    //
    //                     {/* LOOP ITEMS */}
    //                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-10 mt-8 lg:mt-10">
    //                         {selectedProducts.map((item, index) => (
    //                             <ProductCard data={item} key={index}/>
    //                         ))}
    //                     </div>
    //
    //                     <div
    //                         className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
    //                         <Pagination
    //                             currentPage={currentPage}
    //                             totalPages={totalPages}
    //                             onPageChange={handlePageChange}
    //                         />
    //                         <ButtonPrimary loading>Show me more</ButtonPrimary>
    //                     </div>
    //                 </main>
    //             </div>
    //
    //             {/* === SECTION 5 === */}
    //             <hr className="border-slate-200 dark:border-slate-700"/>
    //
    //             <SectionSliderCollections/>
    //             <hr className="border-slate-200 dark:border-slate-700"/>
    //
    //             {/* SUBCRIBES */}
    //             <SectionPromo1/>
    //         </div>
    //     </div>
    // );

    // 무한 스크롤 실패
    // const dispatch = useDispatch();
    //
    // const { products, currentPage, itemsPerPage, isLoading } = useSelector(
    //     (state: RootStateProduct) => state.products || { products: [], currentPage: 1, itemsPerPage: 20, isLoading: false }
    // ); // 기본값 설정
    //
    // useEffect(() => {
    //     const fetchAndSetProducts = async () => {
    //         dispatch(setLoading(true));
    //
    //         const searchFilter: SearchFilter = {
    //             category: params.filter as string,
    //         };
    //
    //         const fetchedProducts = await fetchProducts(searchFilter);
    //         if (fetchedProducts) {
    //             dispatch(setProducts(fetchedProducts)); // 상품 데이터 업데이트
    //         }
    //
    //         dispatch(setLoading(false)); // 로딩 상태 false로 설정
    //     };
    //
    //     if (params.filter) {
    //         fetchAndSetProducts();
    //     }
    // }, [params.filter, dispatch]);
    //
    // // 페이지 데이터 처리
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);
    //
    // const handlePageChange = (page: number) => {
    //     dispatch(setCurrentPage(page)); // 페이지 변경 시 Redux 상태 업데이트
    // };
    //
    // const totalPages = Math.ceil(products.length / itemsPerPage);
    //
    // return (
    //     <div className={`nc-PageCollection`}>
    //         <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
    //             <div className="space-y-10 lg:space-y-14">
    //                 <div className="max-w-screen-sm">
    //                     <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
    //                         {params.filter}
    //                     </h2>
    //                 </div>
    //
    //                 <hr className="border-slate-200 dark:border-slate-700" />
    //                 <main>
    //                     <TabFilters />
    //                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-10 mt-8 lg:mt-10">
    //                         {selectedProducts.map((item, index) => (
    //                             <ProductCard data={item} key={index} />
    //                         ))}
    //                     </div>
    //
    //                     <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
    //                         <Pagination
    //                             currentPage={currentPage}
    //                             totalPages={totalPages}
    //                             onPageChange={handlePageChange} // 페이지 변경 시 핸들러 호출
    //                         />
    //                         <ButtonPrimary loading={isLoading}>Show me more</ButtonPrimary>
    //                     </div>
    //                 </main>
    //             </div>
    //
    //             <hr className="border-slate-200 dark:border-slate-700" />
    //             <SectionSliderCollections />
    //             <hr className="border-slate-200 dark:border-slate-700" />
    //             <SectionPromo1 />
    //         </div>
    //     </div>
    // );
};