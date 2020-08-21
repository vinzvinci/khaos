import { Authorizer } from '../authorizer'

const fn: Authorizer = async ({ message, secret }) => {
	return [message, secret].every((x) => typeof x === 'string')
}

export default fn
