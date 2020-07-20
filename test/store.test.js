import store from '../src/store.js'

test('获取token',()=>{
    expect(store.state.token).toBe('')
})

test('保存token',()=>{
    store.commit('saveToken','abc')
    expect(store.state.token).toBe('abc')
})