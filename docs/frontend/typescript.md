# TypeScript

TypeScript 是 JavaScript 的超集，增加了类型系统。

## 为什么用 TypeScript

- **类型安全**：编译时发现错误，减少运行时 bug
- **智能提示**：更好的 IDE 补全体验
- **代码可读性**：类型即文档
- **大型项目必备**：方便重构和维护

## 基础类型

```typescript
// 基本类型
let name: string = '张三';
let age: number = 20;
let isStudent: boolean = true;

// 数组
let list: number[] = [1, 2, 3];
let list2: Array<string> = ['a', 'b'];

// 元组
let tuple: [string, number] = ['hello', 42];

// 枚举
enum Color { Red, Green, Blue }
let c: Color = Color.Red;
```

## 接口

```typescript
interface User {
  name: string;
  age: number;
  email?: string;      // 可选属性
  readonly id: number;  // 只读属性
}

function greet(user: User): string {
  return `你好 ${user.name}`;
}
```

## 泛型

```typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 泛型接口
interface ApiResponse<T> {
  code: number;
  data: T;
}

// 泛型约束
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

## 常用工具类型

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;       // 所有属性可选
type ReadonlyUser = Readonly<User>;     // 所有属性只读
type PickUser = Pick<User, 'name' | 'age'>; // 选取部分属性
type OmitUser = Omit<User, 'email'>;    // 排除部分属性
```
