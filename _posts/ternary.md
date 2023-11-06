---
title: "JavaScript ? ternary : 1/4"
excerpt: "JavaScript questions pt.1"
date: "2023-11-01T12:44:07.322Z"
author:
  name: "@la_la_code"
ogImage:
  url: "/assets/blog/preview/snapsq.png"
---

# Вступление

Это первая статья из цикла моего маленького семиотического исследования конструкций JavaScript, содержащих символ ```?```.

Читая документацию к библиотеке [TanStack Table](https://tanstack.com/table/v8) наткнулся на ```??``` оператор в [коде](https://github.com/TanStack/table/blob/a1e9732e6fc3446a2ae80db72a1f2b46a5c11e46/examples/react/sorting/src/main.tsx#L121C1-L121C1), и так как я не помнил его функцию, не встречал, чтобы кто-то его использовал в "живом" сеттинге (может слышал только в подкасте uWebDesign, миллион лет назад), пошёл читать документацию...

В процессе задался вопросом, а в каких ещё конструкциях ещё используют ```?```, что их объединяет и в каких конструкциях вообще можно встретить знак вопроса, или точнее - символ ```?```?

Начал с того что стал переходить по всем ссылкам в разделе "Смотрите также"...

Да, я знаю про **тернарый оператор** ```?:``` (единственный оператор в Javascript, который принимает три аргумента btw), также использую **оператор опциональной последовательности** (Optional chaining operator) ```.?``` (так как работаю с TypeScript-ом), и вот узнал про **оператор нулевого слияния** (Nullish coalescing operator) ```??```, но оказалось что существует ещё и такой оператор, как **логическое нулевое присваивание** (Nullish coalescing assignment) ```??=```.

И тут мне пришла мысль:
>"Вроде бы теперь всё понимаю, но стоит записать основные фишки и примеры, когда всё это может пригодится, чтобы не оставалось больше никаких вопросов на счет этих вопросов, хех."

Ошибка! Как оказалось, вопросов всегда больше чем ответов...

Но начало уже положено, так что приступим.

# Условный (тернарный) оператор
### Синтаксис:

```javascript
condition ? truthy : falsy
```

Тернарный оператор может использоваться как часть выражения:
```javascript
let result = condition ? value1 : value2;
```

или сам по себе (при включении выражений в качестве аргументов при выполнении условия, их следует отделять скобками):
```javascript
condition ? (expression1) : (expression2);

//example
let userCount = 2;
const newUser = { valid: true };
newUser.valid ? (userCount += 1) : console.log("Error");
```

### Множественные условия:

```javascript
let result = condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;

// то же, что и:

const result = condition1
  ? expression1
  : condition2
  ? expression2
  : expression3;
```
Выглядит конечно стильно и меньше знаков чем при использовании обычной конструкции ```if(condition) { } else { }```, но уже не так легко читается, так что по возможности буду избегать такого применения...

### Множественные операции в одном условии
```javascript
condition ? (expression1, expression2, ...) : (expression3, expression4...);

//example
let userCount = 2;
const newUser = { valid: true };
newUser.valid ?
  (userCount += 1, console.log("New user regestered"))
: (newUser.lastValidationFail = Date.now(), console.log("Error"));
```
Это уже интереснее чем множественное условие, и может быть полезно для быстрой отладки и логирования, но условия через ```if() {} else {}``` всё еще более удобны для чтения и изменения.

>##### **Замечание**
>При выполнении нескольких выражений, будет "возвращено" значение последнего выражения в соотвествующей ветке:
>
```javascript

let userCount = 2;
const newUser = { valid: true };

//Unwanted behavior!
userCount = newUser.valid ?
//Will assign undefined
  (userCount + 1, console.log("New user regestered"))
//Will also assign undefined
: (newUser.lastValidationFail = Date.now(), userCount , console.log("Error"));


//Expected behaviour
userCount = newUser.valid ?
//Will assign userCount + 1
  (console.log("New user regestered"), userCount + 1)
//Will assign userCount
: (newUser.lastValidationFail = Date.now(), console.log("Error"), userCount);
```

Это свойтво тернарного оператора можно использовать в контесте рендера jsx:

```javascript

import { useState, useEffect } from 'react';
export default function App() {
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <>
      <button onClick={() => setAuthenticated((currAuth)=>!currAuth)}>
        {authenticated ? 'Logout' : 'Auth'} user
      </button>
      {authenticated ?

        <p>Hello reactor!</p> :

        (console.log("Send error log or smth..."),
        <p>Oops!</p>)
      }
    </>
  );
}
```


>##### **Замечание**
>В режиме разработки такая конструкция будет выполнятся дважды (из-за режима строгой проверки), это ожидаемое поведение, таким образом нам напоминают, что поведение компонентов не должно нарушаться при удалении элементов, и это должно помогать разработчику выявлять проблемы с побочными эффектами и производительностью.
>
>**В сборке производственной версии, такого не будет** и React документация советует не изменять логику отправки логов в таких случаях, так как в рабочем приложении всё будет работать без нежелательных эффектов.

Данная кострукция может помочь при разработке и тестировании, так как позволяет локализировать логику сторонних эффектов ```console.log()``` c логикой рендеринга, но скорее должна быть использованна как "qwick and dirty" трюк, ускоряющий локальную разработку.

Нежелательный ререндеринг может сигнализировать о неправильном расположении эффектов, в таком случае возможно следует перенести логику в обрабочик изменеий:
```javascript
<button onClick=() => {setAuthenticated((currAuth)=>!currAuth), console.log("Log only state change")}>
  {authenticated ? 'Logout' : 'Auth'} user
</button>
```
Такой вариант будет привязан только к изменению состояния, и уже не будет сообщать значение по умолчанию