const errorResponse = {
    'confirmation-id': null,
    'partner-request-id': 1234567890,
    reason: {
        code: 'failure',
        'error-key': 'InternalError',
        retriable: true,
        'error-message': 'Predefined error'
    }
}

const typeTask = (query, body) => {
    const petition = {
        type: query == 1 ? "active": "cancel",
        "customer-id": body['customer-id'],
        body
      }
    return petition
}

export const Utils = {
    errorResponse,
    typeTask
}