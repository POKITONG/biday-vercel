import {UserModel} from "@/model/user/user.model";
import {strategy} from "../api.strategy"; // 전략 패턴을 사용하는 공통 모듈 import
import {api} from "../request";
import {RequestOptions} from "@/model/api/RequestOptions"; // 공통 API 경로 설정 import

// 회원 한 명의 정보를 가져오는 API
/*
export async function findUserById(id: string): Promise<UserModel | null> {
    try {
        const response = await strategy.GET(`${api.user}/findById/${id}`);
        console.log("유저 정보 가져오기 성공:", response);
        return response as UserModel;
    } catch (error) {
        console.error(`ID로 유저 불러오기 실패: ${id}`, error);
        return null; // 오류 발생 시 null 반환
    }
}

// 회원가입 API
export async function insertUser(user: UserModel): Promise<any> {
    const body = {
        name: user.name,
        email: user.email,
        password: user.password,
        phoneNum: user.phoneNum,
    };

    try {
        const response = await strategy.POST(`${api.user}/join`, body);
        console.log("유저 등록 성공:", response);
        return { ...response, status: true }; // 성공 시 true 반환
    } catch (error) {
        console.error('유저 등록 실패:', error);
        return { status: false }; // 실패 시 false 반환
    }

// 유저 삭제 API
export async function deleteUser(id: number): Promise<void | { status: number }> {
    try {
        await strategy.DELETE(`${api.user}/${id}/cancel`);
    } catch (error) {
        console.error("유저 삭제 실패:", error);
        return { status: 500 };
    }
}

// 유저 업데이트 API
export async function updateUser(id: number, user: UserModel): Promise<Response> {
    const body = {
        name: user.name,
        email: user.email,
        password: user.password,
        phoneNum: user.phoneNum,
    };

    try {
        const response = await strategy.PUT(`${api.user}/${id}`, body);
        console.log("유저 업데이트 성공:", response);
        return response;
    } catch (error) {
        console.error("유저 업데이트 실패:", error);
        throw error;
    }
}
*/

const changePassword = async (options: RequestOptions<{}, { password: string, newPassword: string }>): Promise<any> => {
    const response = await strategy.PATCH(`${api.user}/changepass`, options);

    console.log("response",response)
    if ((response === "예전 비밀번호가 틀렸습니다."||response ==="유저 대상이 없습니다.")) {
        throw new Error("비밀번호 변경 실패");
    }
    // 문자열 응답 처리
    return response;
};



export const userAPI = {
    changePassword
}

