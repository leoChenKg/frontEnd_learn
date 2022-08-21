### 2022 8.21 hools

#### useState

- 内部有一个映射表，useState 的次序 --- 存储的值，有个 index 来指示 当前 useState 对应的值存储空间
- 多个 hooks 是有序列的按顺序对应，每个 useState 执行后 索引 index 自增 +1
- 执行的时候索引 0 位置保存初始值，返回当前索引的值和设置函数
- 重新渲染时，重置自增索引 index 为 0
-

#### useMemo useCallback

> 防止数据不变更新

#### useEffect

> 在渲染之后执行

#### useLayoutEffect

> 与 useEffect 区别：useLayoutEffect（微任务执行） useEffect（宏任务执行）
> useLayoutEffect 在渲染之前执行

> 处理副作用
