import { Service, Inject } from "typedi";

@Service()
export default class ApiService {
    constructor(@Inject("requester") private requester) {}

    async getRoles(bearer: string) {
        const response = await this.requester.get("/roles", bearer);

        if (Object.keys(response.error).length > 0) {
            return { response: {}, error: response.error };
        }

        if (Object.keys(response.response).length === 0) {
            return { response: {}, error: { "content.found": false } };
        }

        return { response: response.response, error: {} };
    }
}
