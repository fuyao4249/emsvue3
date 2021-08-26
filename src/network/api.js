import { request } from './request'

// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    headers: {"content-type": "application/json"},
    data: data
  })
}

// 用户信息
export function usersInfo(id) {
  return request({
    url: '/users/' + id,
    headers: {"content-type": "application/json"}
  })
}


// 菜单
export function getRoleMenu(id) {
  return request({
    url: '/role/' + id + '/menu',
    headers: {"content-type": "application/json"},
  })
}

// 用户列表
export function getUserList(url, data) {
  return request({
    url: url,
    method: 'post',
    headers: {"content-type": "application/json"},
    data
  })
}

export function deleteUser(url) {
  return request({
    url: url,
    method: 'del',
    headers: {"content-type": "application/json"},
  })
}
