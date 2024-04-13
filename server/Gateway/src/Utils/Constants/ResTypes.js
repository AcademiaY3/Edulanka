class ResTypes {
    errors = {
        missing_token: { message: "bearer token is missing" },
        missing_auth_header: { message: "authorization header is missing" },
        missing_role_header: { message: "role in header is missing" },
        invalid_token: { message: "token is invalid" },
        cancelled_token: { message: "token has been revoked" },
        token_expired: { message: "token has expired" },
        not_found: { message: "invalid routes" },
        not_found_role: { message: "not a valid role"},
    };
    successMessages = {
        data_retrieved: { message: "data retrieved successfully" },
        server_online: { message: "gateway Online" },
    };
}

export default ResTypes = new ResTypes()