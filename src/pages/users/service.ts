import { request } from 'umi';



//加载数据
export function loaddatelist() {
  return request('http://jsonplaceholder.typicode.com/users', {
  
  })
}
//新增数据
export function saveOne(data: any) {
  return request('http://jsonplaceholder.typicode.com/users', {
  method: 'post',
  data})
}
//修改数据
export function updateOne(id:number,data: any) {
  return request('http://jsonplaceholder.typicode.com/users', {
  method: 'put',
  data})
}
//删除数据
export function delOne(id:number) {
  return request('http://jsonplaceholder.typicode.com/users', {
  method: 'delete',
  })
}