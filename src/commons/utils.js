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

function delay() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 5000)
    })
}

export const Utils = {
    errorResponse,
    delay
}