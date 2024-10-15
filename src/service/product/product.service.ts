import {productAPI} from "@/api/product/product.api";
import {ProductDictionary, ProductModel} from "@/model/product/product.model";
import {auctionAPI} from "@/api/auction/auction.api";
import {AuctionModel} from "@/model/auction/auction.model";
import {fetchAuctionsBySize} from "@/service/auction/auction.service";

// 데이터 변환을 여기서 해야한다. 인수로 필요한 것을 받아서,
// 서비스에서 데이터 변환을 자바 스프링을 서비스에서 했잖아. 변환을 똑같이 서비스를 여기에서 해야한다.
export async function fetchProductOne(productId: string): Promise<ProductModel> {

    try {
        const options = {
            params: {
                id: productId
            }
        }

        const result = (await productAPI.findOneById(options))[String(productId)];

        if (result === undefined) {
            console.log("Product not found");
        } else {
            console.log("Product found: ", result);
        }

        return result;

    } catch (error) {
        console.error("fetchProductOne 에러 발생", error);
        throw new Error();
    }
}

export async function fetchProduct(productId: number): Promise<ProductModel[]> {
    console.log("fetchProduct 진입")
    try {
        const options = {
            params: {
                id: productId,
            }
        };

        const productDictArray: ProductDictionary[] = await productAPI.findById(options);
        console.log("productDictArray", productDictArray);
        if (productDictArray.length === 0) {
            return [];
        }

        return productDictArray.map((item) => Object.values(item)).flat();

    } catch (error) {
        console.error("fetchProduct 에러 발생", error);
        throw new Error("");
    }
}

export async function fetchProductDetails(id: number): Promise<{
    colorIds: number[],
    product: ProductModel,
    size: string[],
    auctions: AuctionModel[]
}>{
    try {
        console.log("fetchProductDetails 진입");

        const options = {
            params: {
                id: id,
            }
        };

        const productArray = await fetchProduct(id);
        const product = productArray.find((item) => item.id === id);
        if (product === undefined) {
            throw new Error(`해당 product를 찾을 수 없습니다. id: ${id}`);
        }
        const colorIds = productArray.map((item) => item.id);
        const sizes = product.sizes.map((size) => size.id);

        const auctionArray = await Promise.all(sizes.map((size) => {
            return fetchAuctionsBySize(size);
        }));
        const auctions = auctionArray.flat(Infinity) as unknown as AuctionModel[];
        const size = product.sizes.map((size) => size.size);

        return {colorIds, product, size, auctions};


    } catch (error) {
        console.error("fetchProductDetail", error);
        throw new Error("fetchProductError");
    }
}