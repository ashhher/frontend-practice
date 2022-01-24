export const FETCH_RECOMMEND_PRODUCTS_START = "fetch_recommend_products_start";
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = "fetch_recommend_products_success";
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "fetch_recommend_products_fail";

interface FetchRecommandProductsStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START,
}

interface FetchRecommandProductsSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: any,
}

interface FetchRecommandProductsFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: any,
}

export type RecommandProductsAction =
    FetchRecommandProductsStartAction |
    FetchRecommandProductsSuccessAction |
    FetchRecommandProductsFailAction;

export const fetchRecommandProductsStartActionCreator = (): FetchRecommandProductsStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START,
    };
};

export const fetchRecommandProductsSuccessActionCreator = (data): FetchRecommandProductsSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data,
    };
};

export const fetchRecommandProductsFailActionCreator = (error): FetchRecommandProductsFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error,
    };
};
