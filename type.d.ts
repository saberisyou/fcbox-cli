/*
 * @Author: 乐祥孚
 * @Date: 2021-06-16 18:25:19
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-06-16 18:31:26
 * @Description: file content
 * @FilePath: \fcbox-cli\type.d.ts
 */

/** id是用户的id，可以是number或者string */
declare function yue(id: number | string): string;

//Get是一种类型
declare interface Get {
  (id: string): string;
  (name: string, age: number): string;
}

//get是Get类型的
declare var get: Get;
