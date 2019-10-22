import { Service } from "typedi";
import needle from "needle";
import config from "../config";

@Service()
export default class RequesterService {
    static async get(uri: string, bearer: string) {
        try {
            const response = await needle(
                "get",
                `${config.api.host}${uri}?per_page=${config.perPage}`,
                {
                    headers: {
                        Authorization: `Bearer ${bearer}`
                    }
                }
            );

            if (
                response.body.error &&
                Object.keys(response.body.error).length > 0
            ) {
                return { response: {}, error: response.body };
            }

            return { response: response.body, error: {} };
        } catch (error) {
            return { response: {}, error: error.response };
        }
    }
}
