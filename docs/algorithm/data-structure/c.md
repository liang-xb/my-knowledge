# 数据结构 — C 语言版本

C 语言中常用数据结构的实现。

## 数组

```c
int arr[10];
int arr2[] = {1, 2, 3, 4, 5};

// 遍历
for (int i = 0; i < 5; i++) {
    printf("%d ", arr2[i]);
}
```

## 链表

```c
struct ListNode {
    int val;
    struct ListNode* next;
};

// 创建节点
struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
node->val = 1;
node->next = NULL;
```

## 栈

```c
#define MAX_SIZE 1000

int stack[MAX_SIZE];
int top = -1;

void push(int val) {
    stack[++top] = val;
}

int pop() {
    return stack[top--];
}

int peek() {
    return stack[top];
}

int isEmpty() {
    return top == -1;
}
```

## 队列

```c
#define MAX_SIZE 1000

int queue[MAX_SIZE];
int front = 0, rear = 0;

void enqueue(int val) {
    queue[rear++] = val;
}

int dequeue() {
    return queue[front++];
}

int isEmpty() {
    return front == rear;
}
```

## 二叉树

```c
struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

// 前序遍历
void preorder(struct TreeNode* root) {
    if (root == NULL) return;
    printf("%d ", root->val);
    preorder(root->left);
    preorder(root->right);
}
```

## 常见注意事项

- 注意 `malloc` 后要 `free`，防止内存泄漏
- 数组下标从 0 开始
- 使用 `NULL` 判断指针是否为空
- 边界条件要特别注意
