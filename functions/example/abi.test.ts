import test from 'ava'
import abi from './abi'

test.only('Returns mainnet address', async (t) => {
	t.is(abi.toString(), 'event Query()')
})
